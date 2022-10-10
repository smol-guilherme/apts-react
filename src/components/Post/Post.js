import React, { useState } from "react";
import MapElement from "./MapElement.js";
import PostElement from "./PostElement.js";

export default function Post(props) {
  const [overlay, setOverlay] = useState(false);

  function handleClick() {
    setOverlay((previous) => !previous);
  }

  const Render = () => {
    if (!overlay)
      return (
        <MapElement
          starsCount={props.stars}
          liked={props.liked}
          handleClick={handleClick}
          {...props}
        />
      );
    return (
      <PostElement
        starsCount={props.stars}
        liked={props.liked}
        handleClickStar={props.handleClickStar}
        handleClick={handleClick}
        {...props}
      />
    );
  };

  return <Render />;
}
