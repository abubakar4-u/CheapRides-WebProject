import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/header";
import Home from "./components/Home/Home";

import Footer from "./components/Footer/footer";
import Login from "./components/Login/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
