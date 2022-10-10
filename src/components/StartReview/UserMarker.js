import { useState } from "react";
import { useMap } from "react-leaflet";
import MapMarker from "../Marker/Marker.js";

export default function UserMarker() {
  const [coordinates, setCoordinates] = useState(null);
  const map = useMap();

  const Render = () => {
    if (coordinates === null) {
      map.locate().on("locationfound", (e) => {
        map.flyTo(e.latlng, 12, { duration: 1.5 });
        setCoordinates([e.latlng.lat, e.latlng.lng]);
      });
      return <></>;
    }
    return <MapMarker position={coordinates} />;
  };
  return <Render />;
}
