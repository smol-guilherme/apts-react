import { TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import MapMarker, { LocationMarker } from "../Marker/Marker.js";
import { MapContent } from "./Map.jsx";
import { useEffect, useState } from "react";
import { Box, PostElement } from "../shared/postBody.jsx";
import { MapHeader } from "./Map.jsx";
import { useAxios } from "../../hooks/useAxios.js";

function MapElement(props) {
  const latitude = props.location.latitude / 10000;
  const longitude = props.location.longitude / 10000;
  // console.log(props);
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

export function MapOverlay(props) {
  const [overlay, setOverlay] = useState(false);
  const [config, setConfig] = useState({});
  const [stars, setStars] = useState(props.stars || 0);
  const [liked, setLiked] = useState(
    props.likedBy.includes(props.author.authorId)
  );
  const { response, error, loading } = useAxios(config);
  useEffect(() => {
    if (!loading) {
      if (response !== null) {
        setStars(response.count);
        setLiked((previous) => !previous);
      }
    }
  }, [response]);

  function handleClick() {
    setOverlay((previous) => !previous);
  }

  function handleClickStar(e, params = "") {
    e.stopPropagation();
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjMzOTlmYjNiLTQ4ZDYtNGI1NS1hN2EzLTc4NjZiNmUyMGZmNCIsImlhdCI6MTY2NDk3MjQ3NiwiZXhwIjoxNjY1MDAxMjc2fQ.qzK8gP2HZJ1O44J5KrklLpte3tB52s3iNvIBGLqWneg";
    const header = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const newConfig = {
      method: "post",
      path: `posts/star/${params}`,
      config: [{}, header],
    };
    setConfig(newConfig);
  }

  const Render = () => {
    if (!overlay)
      return (
        <MapElement
          starsCount={stars}
          liked={liked}
          handleClick={handleClick}
          {...props}
        />
      );
    return (
      <PostElement
        starsCount={stars}
        liked={liked}
        handleClickStar={handleClickStar}
        handleClick={handleClick}
        {...props}
      />
    );
  };

  return <Render />;
}
