import { TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import MapMarker, { LocationMarker } from "./Marker.js";
import { MapContent } from "./Map.jsx";

const where = {
  x: -29.694,
  y: -53.873,
  zoom: 17,
};

export default function MapOverlay() {
  return (
    <MapContent
      center={[where.x, where.y]}
      zoom={where.zoom}
      scrollWheelZoom={false}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <MapMarker x={where.x} y={where.y} />
      <LocationMarker />
    </MapContent>
  );
}
