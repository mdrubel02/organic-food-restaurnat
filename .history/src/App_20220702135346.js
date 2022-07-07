import {Route, Routes } from "react-router-dom";
import HeaderOne from "./Components/Header/HeaderOne";
import Home from "./Components/Home/Home";


function App() {
  return (
    <div>
      <Routes>
        <HeaderOne />
          <Route path="/" element={<Home />}/>
      </Routes>
    </div>
  );
}

export default App;
