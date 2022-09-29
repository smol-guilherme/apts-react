import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyle from "../../assets/globalStyles";
import Timeline from "../Timeline/Timeline.js";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Timeline />} />
      </Routes>
    </BrowserRouter>
  );
}
