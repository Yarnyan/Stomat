import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import PricePage from "./pages/PricePage";
// import './style/style.scss'
import LicensePage from "./pages/LicensePage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Stomatologia_1" element={<MainPage />}/>
        <Route path="/Stomatologia_1/price" element={<PricePage />}/>
        <Route path="/Stomatologia_1/license" element={<LicensePage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
