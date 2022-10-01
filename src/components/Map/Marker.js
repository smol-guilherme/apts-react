import { useState, useContext } from "react";
import DataContext from "../context/DataContext.js";
import { Marker, Popup, SVGOverlay, useMap, useMapEvent } from "react-leaflet";
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

export default function MapMarker({ x, y }) {
  const mMap = useMap();
  const { overlay, setOverlay } = useContext(DataContext);
  const newBounds = mMap.getBounds();

  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconUrl: markerIcon,
    iconRetinaUrl: markerIcon2x,
    shadowUrl: markerShadow,
  });

  function handleClick() {
    if (overlay === null) {
      return setOverlay(
        Object.values(newBounds).map((border) => Object.values(border))
      );
    }
    setOverlay(null);
  }

  return <Marker position={[x, y]} eventHandlers={{ click: handleClick }} />;
}
