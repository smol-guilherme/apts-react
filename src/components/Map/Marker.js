import { Marker, Popup } from "react-leaflet";

export default function MapMarker({ x, y }) {
  return (
    <Marker position={[x, y]}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  );
}
