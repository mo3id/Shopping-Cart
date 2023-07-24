import React from "react";
import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import Store from "./components/Store";
import Navbar from "./components/Navbar";
import About from "./components/About";
import ShoppingCartProvider from "./context/ShoppingCartContext";

function App() {
  return (

    <ShoppingCartProvider>
      <Navbar />
      <Container className='mb-4'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/store' element={<Store />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>

  );
}

export default App;
