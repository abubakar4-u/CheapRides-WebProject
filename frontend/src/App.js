import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/footer";
import Login from "./components/Login/Login";
import RiderModuleScreen from './Screens/RiderModuleScreen';
import RiderUpdate from './components/RiderModule/RiderUpdate';
import RideAddCar from './components/RiderModule/RiderAddCar';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/riderscreen" element={<RiderModuleScreen />} />
          <Route path="/ride-update/:id" element={<RiderUpdate />} /> {/* Pass ride object here */}
          <Route path="/ride-addcar" element={<RideAddCar/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;