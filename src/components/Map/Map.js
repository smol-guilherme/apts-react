import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import MapMarker from "./Marker.js";

const where = {
  x: -29.694,
  y: -53.873,
  zoom: 18,
};

export default function MapOverlay() {
  return (
    <MapContainer
      style={{ height: "100vh", width: "100vw" }}
      center={[where.x, where.y]}
      zoom={where.zoom}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapMarker x={where.x} y={where.y} />
    </MapContainer>
  );
}
