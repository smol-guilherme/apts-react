import { TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import MapMarker from "./Marker.js";
import { MapContent } from "./Map.jsx";

const where = {
  x: -29.694,
  y: -53.873,
  zoom: 17,
};

const markers = [
  [where.x, where.y],
  [where.x + 0.02, where.y - 0.03],
  [where.x - 0.03, where.y + 0.02],
  [where.x, where.y + 0.01],
];

export default function MapOverlay() {
  return (
    <MapContent
      zoomControl={false}
      center={[where.x, where.y]}
      zoom={where.zoom}
      dragging={false}
      scrollWheelZoom={false}
      doubleClickZoom={false}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <MapMarker x={where.x} y={where.y} />
    </MapContent>
  );
}
