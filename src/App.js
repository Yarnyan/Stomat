import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Stomatologia_1" element={<MainPage />}/>
        <Route path="/Stomatologia_1/price" />
        <Route path="/Stomatologia_1/licence" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
