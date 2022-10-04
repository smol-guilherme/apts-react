import { TiThMenu } from "react-icons/ti";
import { TbComet } from "react-icons/tb";
import { MdStars } from "react-icons/md";
import { Content, Header, NewEntry } from "../shared/pageBody.jsx";
import { MapOverlay } from "../Map/Map.js";

const where = {
  x: -29.694,
  y: -53.873,
  zoom: 17,
};

const markers = [
  [where.x, where.y],
  [where.x + 0.02, where.y - 0.03],
  [where.x - 0.03, where.y + 0.02],
  [where.x, where.y + 0.01],
];

const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const mocked = [
  {
    text: lorem,
    username: "Ademir",
    info: "8008",
    position: markers[0],
  },
  {
    text: lorem,
    username: "Jorge",
    info: "880",
    position: markers[1],
    location: "Starlight Cafe",
  },
  {
    text: lorem,
    username: "Pedro",
    info: "9000",
    position: markers[2],
  },
  {
    text: lorem,
    username: "Bento",
    info: "7777",
    position: markers[3],
  },
];

export default function Timeline() {
  const Page = () =>
    mocked.map((data, index) => <MapOverlay key={index} {...data} />);
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
      <Page />
      <BottomElement />
    </Content>
  );
}
