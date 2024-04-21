import Header from "./components/Header/header";
import React from 'react'
import Home from "./components/Home/Home";
import Ride from "./components/Ride/Ride";
import Reviews from "./components/Reviews/Reviews";
import Footer from "./components/Footer/footer";
function App() {
  return (
    <>
      <Header />
      <Home />
      <Ride />
      <Reviews/>
      <Footer/>
    </>
  )
}

export default App