import GlobalStyle from "../../assets/globalStyles";
import Timeline from "../Timeline/Timeline.js";
import PreviewMap from "../StartReview/PreviewMap.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DataContextProvider } from "../context/DataContext.js";
import React from "react";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <DataContextProvider>
        <Routes>
          <Route path="/" element={<Timeline />} />
          <Route path="/new" element={<PreviewMap />} />
        </Routes>
      </DataContextProvider>
    </BrowserRouter>
  );
}
