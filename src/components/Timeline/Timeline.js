import { useContext } from "react";
import DataContext from "../context/DataContext.js";
import MapOverlay from "../Map/Map.js";
import { Content } from "../shared/pageBody.jsx";
import { Post } from "../shared/postBody.jsx";

const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

export default function Timeline() {
  const { overlay, setOverlay } = useContext(DataContext);

  function handleClick() {
    setOverlay(null);
  }

  const Render = () => {
    if (overlay === null) {
      return <MapOverlay />;
    }
    return (
      <Post
        handleClick={handleClick}
        text={lorem}
        username={"Ademir"}
        info={"a lot of pretty buttons and numbers"}
      />
    );
  };

  return (
    <Content>
      <Render />
    </Content>
  );
}
