import { Routes, Route } from "react-router-dom";
import Background from "./Components/Background/Background";
import Navbar from "./Components/Navbar/navbar";
import Home from "./Components/Home/home";
import Feature from "./Components/Feature/feature";
import About from "./Components/About/about";
import Footer from "./Components/Footer/footer";
import Login from "./Components/Login/login";
import Register from "./Components/Register/register";
import "./App.css";


function App() {
  return (
    <>
      {/* <Background /> */}
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Feature />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>

        <Footer />
    </>
  );
}


export default App;
