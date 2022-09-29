import { useState } from "react";
import { Marker, Popup, useMapEvent } from "react-leaflet";
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

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
  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconUrl: markerIcon,
    iconRetinaUrl: markerIcon2x,
    shadowUrl: markerShadow,
  });
  const customData = {
    name: "potato",
    location: [x, y],
    stars: 35,
  };
  console.log(x, y);
  return (
    <Marker position={[x, y]}>
      <Popup>
        A pretty CSS3 popup at {x}, {y}. <br /> Easily customizable.
      </Popup>
    </Marker>
  );
}
