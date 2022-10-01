import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyle from "../../assets/globalStyles";
import Timeline from "../Timeline/Timeline.js";
import { DataContextProvider } from "../context/DataContext.js";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <DataContextProvider>
        <Routes>
          <Route path="/" element={<Timeline />} />
        </Routes>
      </DataContextProvider>
    </BrowserRouter>
  );
}
