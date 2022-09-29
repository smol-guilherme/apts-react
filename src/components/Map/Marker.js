import { useState } from "react";
import { Marker, Popup, useMapEvent } from "react-leaflet";

export function LocationMarker() {
  const [position, setPosition] = useState(null);
  const map = useMapEvent({
    click() {
      map.locate();
    },
    locationfound(e) {
      setPosition(e.latlng);
      // map.flyTo(e.latlng, map.getZoom());
      console.log(e.latlng);
    },
  });

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
}

export default function MapMarker({ x, y }) {
  return (
    <Marker position={[x, y]}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  );
}
