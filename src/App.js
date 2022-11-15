import { BrowserRouter, Routes, Route } from "react-router-dom";
import InvalidPage from "./utils/InvalidPage";
import HomePage from "./components/HomePage";
import PlaceToStay from "./components/PlaceToStay";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/placetostay" element={<PlaceToStay />} />
        <Route path="*" element={<InvalidPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
