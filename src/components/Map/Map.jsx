import styled from "styled-components";
import { MapContainer } from "react-leaflet";
import { Header } from "../shared/postBody.jsx";

export const MapContent = styled(MapContainer)`
  display: flex;
  height: 32vh;
  width: 85vw;
  border-radius: 0 0 8px 8px;
`

export const MapHeader = styled(Header)`
  z-index: 800;

  div {
    font-size: 18px;
    flex-grow: 1;
    line-height: 20px;
  }
`