import { TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import MapMarker from "./Marker.js";
import { MapContent } from "./Map.jsx";

export default function MapOverlay(props) {
  return (
    <MapContent
      zoomControl={false}
      center={props.position}
      zoom={17}
      dragging={false}
      scrollWheelZoom={false}
      doubleClickZoom={false}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <MapMarker position={props.position} />
    </MapContent>
  );
}
