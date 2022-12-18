import React from 'react'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';

import MyContext from "../my-context";

function Cards() {

    const { pizzasInfo, addToCart } = useContext(MyContext);

    function aplicarMayuscula(str) {
        const palabras = str.split(" ").map(palabra => {
            return palabra[0].toUpperCase() + palabra.slice(1);
        });
        return palabras.join(" ");
    };

    const navigate = useNavigate();

    return (
        <div>
            <Row md={2} lg={3} className='g-2 m-3'>
                {pizzasInfo.map(pizza => (
                    <Col className='d-flex justify-content-center' key={pizza.id}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img src={pizza.img} />
                            <Card.Body>
                                <Card.Title>{aplicarMayuscula(`${pizza.name}`)}</Card.Title>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>
                                    <p><strong>Ingredientes</strong></p>
                                    <ul>
                                        {pizza.ingredients.map(ingrediente => (
                                            <li
                                                style={{ listStyle: 'none' }}
                                                key={ingrediente}>
                                                🍕 {aplicarMayuscula(`${ingrediente}`)}
                                            </li>
                                        ))}
                                    </ul>
                                </ListGroup.Item>
                            </ListGroup>
                            <Card.Body>
                                <h3 className='text-center mb-3'>$ {Intl.NumberFormat('es-CL').format(`${pizza.price}`)}</h3>
                                <Row>
                                    <Col>
                                        <Button
                                            variant="secondary"
                                            onClick={() => navigate(`/pizza/${pizza.id}`)}
                                        >👀 Ver más</Button>
                                    </Col>
                                    <Col>
                                        <Button
                                            onClick={() => addToCart(pizza.id, pizza.name, pizza.price, pizza.img)}
                                            variant="danger">
                                            <span className='bg-light rounded-pill p-1 me-1'>🛒</span>
                                            Añadir
                                        </Button>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default Cards