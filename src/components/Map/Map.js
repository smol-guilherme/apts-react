import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import { useAxios } from "../../hooks/useAxios.js";

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

  function handleClickStar(e, params = "") {
    e.stopPropagation();
    const token = process.env.REACT_APP_TOKEN;
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

  return <></>;
}
