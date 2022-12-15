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

  // armando el contexto 

  const endpoint = "/pizzas.json";

  const [ pizzasInfo, setPizzasInfo ] = useState([]);

  const getPizzas = () => {
    fetch(endpoint).then(resp => resp.json())
      .then(data => (
        setPizzasInfo(data)
      ));
  };

  useEffect(() => {
    getPizzas();
  }, []);

  // seteando el contexto

  const estadoGlobal = { pizzasInfo }

  return (
    <>
      <MyContext.Provider value={estadoGlobal}>
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
