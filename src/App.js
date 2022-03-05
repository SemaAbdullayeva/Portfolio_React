import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/pages/about";
import Contact from "./components/pages/contact";
import Portfolio from "./components/pages/portfolio";
import Footer from "./components/Footer";
import './components/style.css';

import { Router, Routes, Route, BrowserRouter } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route path="/pages/about" element={<About />}></Route>

          <Route path="/pages/portfolio" element={<Portfolio />}></Route>

          <Route path="/pages/contact" element={<Contact />}></Route>

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}
export default App;

