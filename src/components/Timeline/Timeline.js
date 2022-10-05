import { Content, HeaderElement } from "../shared/pageBody.jsx";
import { MapOverlay } from "../Map/Map.js";
import { useContext, useEffect, useState } from "react";
import { useAxios } from "../../hooks/useAxios.js";
import DataContext from "../context/DataContext.js";
import { BottomElement } from "../Footer/Footer.js";

export default function Timeline() {
  const [config, setConfig] = useState({});
  const { response, error, loading } = useAxios(config);
  const [timeline, setTimeline] = useState(null);
  const { locationData, setLocationData } = useContext(DataContext);

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

  return (
    <Content>
      <HeaderElement />
      <Page />
      <BottomElement />
    </Content>
  );
}
