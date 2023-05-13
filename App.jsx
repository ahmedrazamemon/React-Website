import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
// import Gallery from "./components/gallery";
// import Products from "./components/Products";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Gallery from "./components/gallery";
// import Home from "./components/Home";
// import NotFound from "./components/NotFound";
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./components/footer";
import Navbar from "./components/navbar";
let App = () => {
  return (
    
    <>

    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* <Route path="/Products" element={<Products />}></Route> */}
        <Route path="/Services" element={<Services />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/Gallery" element={<Gallery/>}></Route>
        {/* <Route path="*" element={<NotFound/>}></Route> */}
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
