import { Container } from "react-bootstrap";
import Header from "./components/Header/header";
import React from 'react'

function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <h1>Welcome! Cheap Rides</h1>
        </Container>
      </main>
    </>
  )
}

export default App