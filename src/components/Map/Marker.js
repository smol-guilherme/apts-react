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
  const [visibility, setVisibility] = useState(1);
  const newBounds = mMap.getBounds();

  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconUrl: markerIcon,
    iconRetinaUrl: markerIcon2x,
    shadowUrl: markerShadow,
  });

  function handleClick(e) {
    console.log("enter");
    if (overlay === null) {
      setVisibility(0);
      return setOverlay(
        Object.values(newBounds).map((border) => Object.values(border))
      );
    }
    setVisibility(1);
    setOverlay(null);
  }

  const ReviewOverlay = () => {
    if (overlay !== null) {
      return (
        <SVGOverlay zIndex={1000} bounds={overlay}>
          <rect x="0" y="0" width={"100%"} height={"100%"} />
          <circle
            r={"15"}
            cx={"25"}
            cy={"25"}
            fill={"blue"}
            onClick={(e) => console.log(e)}
          />
        </SVGOverlay>
      );
    }
    return <></>;
  };
  return (
    <Marker
      opacity={visibility}
      position={[x, y]}
      eventHandlers={{ click: handleClick }}
    >
      <ReviewOverlay />
    </Marker>
  );
}
