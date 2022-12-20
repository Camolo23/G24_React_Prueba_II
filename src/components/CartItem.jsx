import React, { useContext, useState, useEffect } from 'react';
import MyContext from '../my-context';
import { useNavigate } from 'react-router-dom';

import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const CartItem = () => {

    const { carrito, aumentar, total } = useContext(MyContext);

    const navigate = useNavigate();

    function aplicarMayuscula(str) {
        const palabras = str.split(" ").map(palabra => {
            return palabra[0].toUpperCase() + palabra.slice(1);
        });
        return palabras.join(" ");
    };

    return (
        <div className='m-5 p-5 pt-2 border border-3 rounded-4 shadow-sm'>
            <p className='mb-4 text-md-start text-center fs-4'>Detalles del pedido:</p>
            {carrito[0]
                ? <ListGroup className='shadow-lg'>
                    {carrito.map(producto => (
                        <ListGroup.Item
                            key={producto.id}
                            className="p-3"
                        >
                            <Row xs={1} md={2}>
                                <Col className='m-auto container-fluid'>
                                    <img
                                        className='w-25 me-2'
                                        src={`${producto.img}`}
                                    />
                                    {aplicarMayuscula(`${producto.name}`)}
                                </Col>
                                <Col className='d-flex flex-wrap justify-content-end align-items-center'>
                                    <div className='me-3'>
                                        Cantidad: {producto.quantity}
                                    </div>
                                    <div>
                                        $ {Intl.NumberFormat('es-CL').format(`${producto.price * producto.quantity}`)}
                                    </div>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                    ))}
                    <ListGroup className='p-3'>
                        <Row>
                            <Col>
                                <div className='container-fluid m-auto'>
                                    <h4>Total a pagar: $ {Intl.NumberFormat('es-CL').format(`${total}`)} </h4>
                                </div>
                            </Col>
                            <Col className='d-flex'>
                                <div className='ms-auto'>
                                    <Button variant="outline-dark" onClick={() => navigate(`/checkOut`)}>Ir a pagar</Button>
                                </div>
                            </Col>
                        </Row>
                    </ListGroup>
                </ListGroup>
                : <div>
                    <h2 className='text-center text-danger mb-4'>¡No has agregado pizzas a tu pedido!</h2>
                    <Button
                        className='container shadow'
                        variant="outline-dark"
                        onClick={() => navigate(`/`)}
                    >
                        Volver a la selección
                    </Button>
                </div>
            }
        </div>
    )
}

export default CartItem