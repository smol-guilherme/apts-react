import { BottomElement } from "../Footer/Footer.js";
import { Content, HeaderElement } from "../shared/pageBody.jsx";
import { useEffect, useState } from "react";
import { Marker, TileLayer, useMap, useMapEvent } from "react-leaflet";
import { ReviewMap } from "./Review.jsx";
import MapMarker, { LocationMarker } from "../Marker/Marker.js";
import { Icon } from "../Marker/Marker.jsx";
import { useLocation } from "react-router";
import { useAxios } from "../../hooks/useAxios.js";

export default function Review() {
  const [position, setPosition] = useState({ lat: 0, lng: 0 });
  const [zoom, setZoom] = useState(1);
  const { pathname } = useLocation();
  const [config, setConfig] = useState({});
  const { response, error, loading } = useAxios(config);
  const [places, setPlaces] = useState([]);
  const [initialized, setInitialized] = useState(false);
  const [center, setCenter] = useState(null);

  useEffect(() => {
    Icon();
  }, [position]);
  // aprender useMemo para manter a renderização do mapa
  // estática enquanto ocorrem requisições para o backend
  const RenderNearbyLocations = () => {
    useMapEvent("dragend", () => {
      if (!loading && initialized) {
        const token = process.env.REACT_APP_TOKEN;
        const header = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        console.log("request in", position);
        const newConfig = {
          method: "get",
          path: "places",
          config: [header],
          query: `?lat=${position.lat.toFixed(4) * 10000}&lng=${
            position.lng.toFixed(4) * 10000
          }`,
        };
        setConfig(newConfig);
        if (response !== null) {
          setPlaces(response);
        }
      }
    });

    console.log(places);
    function handleClick(e) {
      e.stopPropagation();
      console.log("I clicked the map");
    }
    return places.map((place, id) => (
      <MapMarker key={id} position={[place.latitude, place.longitude]} />
    ));
  };

  const RenderMapElement = () => {
    return (
      <ReviewMap
        center={position}
        zoom={zoom}
        scrollWheelZoom={false}
        doubleClickZoom={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <LocationMarker />
        {/* <RenderNearbyLocations /> */}
        <WhereIAmMarker />
      </ReviewMap>
    );
  };

  const WhereIAmMarker = () => {
    const map = useMap();
    useEffect(() => {
      console.log(pathname);
      if (zoom === 1) {
        map.locate({ enableHighAccuracy: true, watch: false }).on(
          "locationfound",
          (e) => {
            setPosition(e.latlng);
            map.stopLocate();
            setZoom(14);
            // map.flyTo(e.latlng, 12, { duration: 0.75 });
            setInitialized((previous) => !previous);
          },
          [pathname]
        );
      }
    });
    if (zoom !== 1) return <Marker position={position} zoom={zoom} />;
    return <></>;
  };

  return (
    <Content>
      <HeaderElement />
      <RenderMapElement />
      <BottomElement />
    </Content>
  );
}
