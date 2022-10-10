import { Content, HeaderElement } from "../shared/pageBody.jsx";
import { MapOverlay } from "../Map/Map.js";
import React, { useContext, useEffect, useState } from "react";
import { useAxios } from "../../hooks/useAxios.js";
import { BottomElement } from "../Footer/Footer.js";
import DataContext from "../context/DataContext.js";
import Post from "../Post/Post.js";

//   function handleError() {
//     if (!loading) {
//       if (error?.response.status) {
//         const status = error?.response.status;
//         switch (status) {
//           case 401:
//             alert("Session expired, please try again");
//             // limpa o local storage e desloga
//             break;
//           case 422:
//             alert("Please fill in all fields");
//             break;
//           case 500:
//             alert("Server Error!!!");
//             break;
//           default:
//             break;
//         }
//       }
//     }
//   }

export default function Timeline(props) {
  const [config, setConfig] = useState({});
  const { response, error, loading } = useAxios(config);
  const [timeline, setTimeline] = useState(null);

  useEffect(() => {
    if (!loading && timeline === null) {
      const token = process.env.REACT_APP_TOKEN;
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
        window.scrollTo(0, 0);
        // NÃO É O IDEAL, MAS ACONTECE //
        setTimeline(response);
        setConfig({});
      }
    }
  }, [response]);

  const Page = () => {
    if (timeline === null) {
      return <></>;
    }
    return timeline.map((data, index) => <Post key={index} {...data} />);
  };

  const Render = () => {
    return (
      <Content>
        <HeaderElement />
        <Page />
        <BottomElement />
      </Content>
    );
  };

  return <Render />;
}
