import styled from "styled-components";
import { MapContainer } from "react-leaflet";
import { Box } from "../shared/postBody.jsx";
import { Header } from "../shared/pageBody.jsx";
import MapOverlay from "./Map.js";

export function MapElement(props) {
  return(
    <Box>
      <Header username={props.location} date={props.date} />
      <MapOverlay {...props} />
    </Box>
  )
}

export const MapContent = styled(MapContainer)`
  display: flex;
  height: 40vh;
  width: 85vw;
  border-radius: 8px;
`