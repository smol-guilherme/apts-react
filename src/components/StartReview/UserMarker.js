import { useState } from "react";
import { Popup, useMap, useMapEvent } from "react-leaflet";
import MapMarker from "../Marker/Marker.js";

export default function UserMarker() {
  const [coordinates, setCoordinates] = useState(null);
  const map = useMap();

  const Render = () => {
    if (coordinates === null) {
      map.locate().on("locationfound", (e) => {
        // console.log(e);
        map.flyTo(e.latlng, 12, { duration: 1.5 });
        setCoordinates([e.latlng.lat, e.latlng.lng]);
        map.stopLocate();
      });
      return <></>;
    }

    return <MapMarker position={coordinates} />;
  };
  return <Render />;
}
