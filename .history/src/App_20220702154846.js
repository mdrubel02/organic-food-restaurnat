import { Route, Routes } from "react-router-dom";
import HeaderOne from "./Components/Header/HeaderOne.js";
import HeaderTwo from "./Components/Header/HeaderTwo.js";
import Home from "./Components/Home/Home";


function App() {
  return (
    <div>
      <HeaderOne />
      <HeaderTwo />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
