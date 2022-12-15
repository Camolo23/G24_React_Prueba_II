import 'bootstrap/dist/css/bootstrap.min.css';

// react router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// context
import MyContext from "./my-context";

// hooks
import { useState, useEffect } from "react";

// components
import MyNavbar from './components/Navbar';

// views
import Home from "./views/Home";
import Carrito from './views/Carrito';

function App() {

  return (
    <>
      <MyContext.Provider value={{}}>
        <BrowserRouter>
          <MyNavbar />

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/carrito' element={<Carrito />} />
          </Routes>

        </BrowserRouter>
      </MyContext.Provider>
    </>
  );
}

export default App;
