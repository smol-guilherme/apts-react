import { useState, useContext, useEffect } from "react";
import DataContext from "../context/DataContext.js";
import { Marker, Popup, useMap, useMapEvent } from "react-leaflet";
import { FaMugHot } from "react-icons/fa";
import L from "leaflet";
import { Icon } from "./Marker.jsx";

export function LocationMarker() {
  const [position, setPosition] = useState(null);
  useMapEvent({
    click(e) {
      Icon();
      console.log(e.latlng);
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

  useEffect(() => {
    Icon();
  }, []);

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
