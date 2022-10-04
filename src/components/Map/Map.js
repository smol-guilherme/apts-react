import { TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import MapMarker, { LocationMarker } from "./Marker.js";
import { MapContent } from "./Map.jsx";
import { useState } from "react";
import { Box, PostElement } from "../shared/postBody.jsx";
import { MapHeader } from "./Map.jsx";

function MapElement(props) {
  const latitude = props.location.latitude / 10000;
  const longitude = props.location.longitude / 10000;
  return (
    <Box>
      <MapHeader username={props.location.locationName} date={props.date} />
      <MapContent
        zoomControl={false}
        center={[latitude, longitude]}
        zoom={17}
        dragging={false}
        scrollWheelZoom={false}
        doubleClickZoom={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <MapMarker
          handleClick={props.handleClick}
          position={[latitude, longitude]}
        />
        {/* <LocationMarker /> */}
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
