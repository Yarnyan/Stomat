import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import PricePage from "./pages/PricePage";
// import './style/style.scss'
import LicensePage from "./pages/LicensePage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/price" element={<PricePage />}/>
        <Route path="/license" element={<LicensePage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
