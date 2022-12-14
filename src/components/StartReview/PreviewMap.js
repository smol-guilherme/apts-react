import { useEffect, useState } from "react";
import { TileLayer } from "react-leaflet";
import { BottomElement } from "../Footer/Footer.js";
import { LocationMarker } from "../Marker/Marker.js";
import { Content, HeaderElement } from "../shared/pageBody.jsx";
import { ReviewMap } from "./PreviewMap.jsx";
import UserMarker from "./UserMarker.js";

export default function PreviewMap() {
  const [position] = useState({ lat: 0, lng: 0 });
  const [zoom] = useState(1);

  useEffect(() => {}, []);

  const RenderMapElement = () => {
    return (
      <ReviewMap
        center={position}
        zoom={zoom}
        scrollWheelZoom={false}
        doubleClickZoom={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <UserMarker />
        <LocationMarker />
      </ReviewMap>
    );
  };

  return (
    <Content>
      <HeaderElement />
      <RenderMapElement />
      <BottomElement />
    </Content>
  );
}
