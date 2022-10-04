import { TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import MapMarker from "./Marker.js";
import { MapContent } from "./Map.jsx";
import { useState } from "react";
import { Box, PostElement } from "../shared/postBody.jsx";
import { MapHeader } from "./Map.jsx";

function MapElement(props) {
  return (
    <Box>
      <MapHeader username={props.location} date={props.date} />
      <MapContent
        zoomControl={false}
        center={props.position}
        zoom={17}
        dragging={false}
        scrollWheelZoom={false}
        doubleClickZoom={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <MapMarker handleClick={props.handleClick} position={props.position} />
      </MapContent>
    </Box>
  );
}

export function MapOverlay(props) {
  const [overlay, setOverlay] = useState(false);

  function handleClick() {
    setOverlay((previous) => !previous);
  }

  const Render = () => {
    if (!overlay) return <MapElement handleClick={handleClick} {...props} />;
    return <PostElement handleClick={handleClick} {...props} />;
  };

  return <Render />;
}
