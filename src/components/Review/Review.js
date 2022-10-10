import { BottomElement } from "../Footer/Footer.js";
import { Content, HeaderElement } from "../shared/pageBody.jsx";
import React, { useEffect, useMemo, useState } from "react";
import { Marker, TileLayer, useMap, useMapEvents } from "react-leaflet";
import MapMarker, { LocationMarker } from "../Marker/Marker.js";
import { Icon } from "../Marker/Marker.jsx";
import { useLocation } from "react-router";
import { useAxios } from "../../hooks/useAxios.js";

function WhereIAmMarker({
  setPosition,
  center,
  setCenter,
  setZoom,
  zoom,
  setInitialized,
}) {
  const map = useMap();
  if (zoom === 1) {
    map
      .locate({ enableHighAccuracy: true, watch: false })
      .on("locationfound", (e) => {
        console.log("locate");
        setPosition(e.latlng);
        setCenter(e.latlng);
        map.stopLocate();
        setZoom(14);
        // map.flyTo(e.latlng, 12, { duration: 0.75 });
        setInitialized((previous) => !previous);
      });
  }
  return null;
}

export default function Review() {
  const [position, setPosition] = useState({ lat: 0, lng: 0 });
  const [zoom, setZoom] = useState(1);
  const [config, setConfig] = useState({});
  const { response, error, loading } = useAxios(config);
  const [places, setPlaces] = useState([]);
  const [initialized, setInitialized] = useState(false);
  const [center, setCenter] = useState(position);
  const memoPlaces = useMemo(() => {
    if (response !== null) {
      console.log(response);
      setPlaces(response);
      return response;
    }
    return places;
  }, [response]);

  function RenderNearbyLocations() {
    const map = useMapEvents({
      dragend() {
        const newCenter = map.getCenter();
        requestNewLocations(newCenter);
        setPosition(newCenter);
        setCenter(newCenter);
      },
      zoom() {
        setZoom(map.getZoom());
      },
    });

    function handleClick() {
      // e.stopPropagation();
      console.log("I clicked the map");
    }
    return memoPlaces.map((place, id) => (
      <MapMarker
        key={id}
        position={[place.latitude, place.longitude]}
        handleClick={handleClick}
        flag={true}
      />
    ));
  }

  function requestNewLocations(center) {
    if (!loading && initialized) {
      const token = process.env.REACT_APP_TOKEN;
      const header = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      // console.log("request in", position);
      const newConfig = {
        method: "get",
        path: "places",
        config: [header],
        query: `?lat=${center.lat.toFixed(4) * 10000}&lng=${
          center.lng.toFixed(4) * 10000
        }`,
      };
      setConfig(newConfig);
    }
  }

  useEffect(() => {
    Icon();
  }, [position]);
  // aprender useMemo para manter a renderização do mapa
  // estática enquanto ocorrem requisições para o backend

  return (
    <Content>
      <HeaderElement />
      <BottomElement />
    </Content>
  );
}
