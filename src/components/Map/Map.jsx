import { MapContainer } from "react-leaflet";
import styled from "styled-components";

export const MapContent = styled(MapContainer)`
  display: flex;
  position: absolute;
  height: 40vh;
  width: 85vw;
  border-radius: 8px;
  box-shadow: 2px 2px 3px 1px #66666670;
`