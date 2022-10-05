import { MdStars } from "react-icons/md";
import { IoArrowUndoCircle } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router";
import { NewEntry } from "../shared/pageBody.jsx";

export function BottomElement() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  function handleNewReview(e) {
    e.stopPropagation();
    e.preventDefault();
    const target = () => {
      if (pathname === "/new") return -1;
      return "/new";
    };
    navigate(target());
  }

  const Element = () => {
    if (pathname === "/")
      return <MdStars onClick={(e) => handleNewReview(e)} />;
    return <IoArrowUndoCircle onClick={(e) => handleNewReview(e)} />;
  };

  return (
    <NewEntry>
      <Element />
    </NewEntry>
  );
}
