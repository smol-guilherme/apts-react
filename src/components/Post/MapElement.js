import React from "react";
import { Box } from "../shared/postBody.jsx";
import { MapHeader, MapContent } from "../Map/Map.jsx";
import { TileLayer } from "react-leaflet";
import MapMarker from "../Marker/Marker.js";

export default function MapElement(props) {
  const latitude = props.location.latitude / 10000;
  const longitude = props.location.longitude / 10000;

  return (
    <Box>
      <MapHeader>
        <div>{props.title}</div>
        <p>{props.author.username}</p>
      </MapHeader>
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
