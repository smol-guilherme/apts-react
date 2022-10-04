import styled from "styled-components";
import { MapContainer } from "react-leaflet";
import { Header } from "../shared/pageBody.jsx";

export const MapContent = styled(MapContainer)`
  display: flex;
  height: 40vh;
  width: 85vw;
  border-radius: 8px;
`

export const MapHeader = styled(Header)`
  z-index: 900;
`