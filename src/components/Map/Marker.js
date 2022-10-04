import { useState, useContext } from "react";
import DataContext from "../context/DataContext.js";
import { Marker, Popup, useMap, useMapEvent } from "react-leaflet";
import { FaMugHot } from "react-icons/fa";
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

export function LocationMarker() {
  const [position, setPosition] = useState(null);
  useMapEvent({
    click(e) {
      setPosition(e.latlng);
    },
  });

  return position === null ? null : (
    <Marker position={position}>
      <Popup>
        You are here at {position.lat.toFixed(4)} {position.lng.toFixed(4)}
      </Popup>
    </Marker>
  );
}

export default function MapMarker({ position, handleClick }) {
  const mMap = useMap();
  const { overlay, setOverlay } = useContext(DataContext);
  const newBounds = mMap.getBounds();
  delete L.Icon.Default.prototype._getIconUrl;

  const svgIcon = L.divIcon({
    html: `
    <svg
      width="24"
      height="40"
      viewBox="0 0 100 100"
      version="1.1"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d=${FaMugHot().props.children[0].props.d} fill="#7A8BE7"></path>
    </svg>`,
    className: "",
    iconSize: [24, 40],
    iconAnchor: [12, 40],
  });

  L.Icon.Default.mergeOptions({
    iconUrl: markerIcon,
    iconRetinaUrl: markerIcon2x,
    shadowUrl: markerShadow,
  });

  function handleClickPrototype() {
    if (overlay === null) {
      return setOverlay(
        Object.values(newBounds).map((border) => Object.values(border))
      );
    }
    setOverlay(null);
  }

  return (
    <Marker position={[...position]} eventHandlers={{ click: handleClick }} />
  );
}
