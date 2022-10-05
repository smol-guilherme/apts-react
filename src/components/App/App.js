import GlobalStyle from "../../assets/globalStyles";
import Timeline from "../Timeline/Timeline.js";
import Review from "../Review/Review.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DataContextProvider } from "../context/DataContext.js";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <DataContextProvider>
        <Routes>
          <Route path="/" element={<Timeline />} />
          <Route path="/new" element={<Review />} />
        </Routes>
      </DataContextProvider>
    </BrowserRouter>
  );
}
