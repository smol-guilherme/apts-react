import { TiThMenu } from "react-icons/ti";
import { TbComet } from "react-icons/tb";
import { MdStars } from "react-icons/md";
import { Content, Header, NewEntry } from "../shared/pageBody.jsx";
import { MapOverlay } from "../Map/Map.js";
import { useEffect, useState } from "react";
import { useAxios } from "../../hooks/useAxios.js";

export default function Timeline() {
  const [config, setConfig] = useState({});
  const { response, error, loading } = useAxios(config);
  const [timeline, setTimeline] = useState(null);

  useEffect(() => {
    if (!loading && timeline === null) {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjMzOTlmYjNiLTQ4ZDYtNGI1NS1hN2EzLTc4NjZiNmUyMGZmNCIsImlhdCI6MTY2NDk3MjQ3NiwiZXhwIjoxNjY1MDAxMjc2fQ.qzK8gP2HZJ1O44J5KrklLpte3tB52s3iNvIBGLqWneg";
      const header = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const newConfig = {
        method: "get",
        path: "posts",
        config: [header],
      };
      setConfig(newConfig);
      if (response !== null) {
        setTimeline(response);
        setConfig({});
      }
    }
  }, [response]);

  function handleError() {
    if (!loading) {
      if (error?.response.status) {
        const status = error?.response.status;
        switch (status) {
          case 401:
            alert("Session expired, please try again");
            // limpa o local storage e desloga
            break;
          case 422:
            alert("Please fill in all fields");
            break;
          case 500:
            alert("Server Error!!!");
            break;
          default:
            break;
        }
      }
    }
  }

  const Page = () => {
    if (timeline !== null)
      return timeline.map((data, index) => (
        <MapOverlay key={index} {...data} />
      ));
    return <></>;
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
        <div></div>
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
