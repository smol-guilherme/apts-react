import { useContext } from "react";
import { TiThMenu } from "react-icons/ti";
import { TbComet } from "react-icons/tb";
import { MdStars } from "react-icons/md";
import { Content, Header, NewEntry } from "../shared/pageBody.jsx";
import { Post } from "../shared/postBody.jsx";
import DataContext from "../context/DataContext.js";
import MapOverlay from "../Map/Map.js";

const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const data = {
  text: lorem,
  username: "Ademir",
  info: "8008",
};

export default function Timeline() {
  const { overlay, setOverlay } = useContext(DataContext);

  function handleClick(e) {
    e.stopPropagation();
    setOverlay(null);
  }

  const Render = () => {
    if (overlay === null) {
      return <MapOverlay />;
    }
    return <Post handleClick={handleClick} {...data} />;
  };

  const HeaderElement = () => {
    return (
      <Header>
        <div>
          <TiThMenu />
        </div>
        <div>
          A PLACE TO STAR <TbComet />
        </div>
        <div></div>
      </Header>
    );
  };

  const BottomElement = () => {
    return (
      <NewEntry>
        <MdStars />
      </NewEntry>
    );
  };

  return (
    <Content>
      <HeaderElement />
      <Render />
      <BottomElement />
    </Content>
  );
}
