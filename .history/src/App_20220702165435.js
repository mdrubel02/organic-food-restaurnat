import { Route, Routes } from "react-router-dom";
import About from "./Components/About/About.js";
import HeaderOne from "./Components/Header/HeaderOne.js";
import HeaderTwo from "./Components/Header/HeaderTwo.js";
import Home from "./Components/Home/Home";
import Shop from "./Components/Shop/Shop.js";
import SignIn from "./Components/UserEntry/SignIn.js";
import SignUp from "./Components/UserEntry/SignUp.js";


function App() {
  return (
    <div>
      <HeaderOne />
      <HeaderTwo />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
