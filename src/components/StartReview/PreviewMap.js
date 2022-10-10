import { useEffect, useState } from "react";
import { TileLayer, useMap } from "react-leaflet";
import { BottomElement } from "../Footer/Footer.js";
import { Content, HeaderElement } from "../shared/pageBody.jsx";
import { ReviewMap } from "./PreviewMap.jsx";
import UserMarker from "./UserMarker.js";

export default function PreviewMap() {
  const [position, setPosition] = useState({ lat: 0, lng: 0 });
  const [zoom, setZoom] = useState(1);

  useEffect(() => {}, []);

  const RenderMapElement = () => {
    return (
      <ReviewMap
        center={position}
        zoom={zoom}
        scrollWheelZoom={false}
        doubleClickZoom={false}
      >
        <UserMarker />
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
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
