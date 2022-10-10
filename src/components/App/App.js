import GlobalStyle from "../../assets/globalStyles";
import Timeline from "../Timeline/Timeline.js";
import Review from "../Review/Review.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DataContextProvider } from "../context/DataContext.js";
import React from "react";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <GlobalStyle />
//       <DataContextProvider>
//         <Routes>
//           <Route path="/" element={<Timeline />} />
//           <Route path="/new" element={<Review />} />
//         </Routes>
//       </DataContextProvider>
//     </BrowserRouter>
//   );
// }

export default class App extends React.Component {
  componentDidMount() {
    console.log("App mounted");
  }
  componentDidUpdate() {
    console.log("App updated");
  }

  render() {
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
}
