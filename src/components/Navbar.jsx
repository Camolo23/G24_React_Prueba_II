import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom';
import MyContext from '../my-context';
import { useContext } from 'react';

function MyNavbar() {

    const { total } = useContext(MyContext);

    return (
        <Navbar sticky="top" bg="secondary" variant='dark' expand="lg">
            <Container>
                <Link
                    to="/"
                    style={{ textDecoration: "none" }}
                    className='text-white'>
                    🍕 <strong>Pizzería Mamma Mia!</strong>
                </Link>
                <Nav className="ms-auto">
                    <Link
                        to="/carrito"
                        style={{ textDecoration: "none" }}
                        className='rounded text-black-50 bg-light p-2'>
                        🛒 $ {Intl.NumberFormat('es-CL').format(`${total}`)}
                    </Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default MyNavbar;