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
import DetallePizza from './views/DetallePizza';
import NotFound from './views/NotFound';

function App() {

  // armando el contexto 

    // obtener pizzas

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

    // gestionar carrito

  const [carrito, setCarrito] = useState([]);

  const addToCart = ( id, name, price, img, q = 1 ) => {
    const productoPorAgregar = { id, name, price, img, q };
    console.log('productoPorAgregar', productoPorAgregar)
    
    setCarrito([...carrito, productoPorAgregar]);
    console.log('carrito :>> ', carrito);
  };

  // seteando el contexto

  const estadoGlobal = { pizzasInfo, carrito, setCarrito, addToCart }

  return (
    <>
      <MyContext.Provider value={estadoGlobal}>
        <BrowserRouter>
          <MyNavbar />

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/carrito' element={<Carrito />} />
            <Route path='/pizza/:id' element={<DetallePizza />} />
            <Route path="*" element={ <NotFound /> } />
          </Routes>

        </BrowserRouter>
      </MyContext.Provider>
    </>
  );
}

export default App;
