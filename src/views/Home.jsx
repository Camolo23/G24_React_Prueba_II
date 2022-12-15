import React from 'react';
import { useState, useEffect } from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';



function Home() {

    const endpoint = "/pizzas.json";

    const [pizzasInfo, setPizzasInfo] = useState([]);

    useEffect(() => {
        fetch(endpoint).then(resp => resp.json())
            .then(data => (
                setPizzasInfo(data)
            ));
    }, []);

    function aplicarMayuscula(str) {
        const palabras = str.split(" ").map(palabra => {
            return palabra[0].toUpperCase() + palabra.slice(1);
        });
        return palabras.join(" ");
    };

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
                                        <Button variant="secondary">👀 Ver más</Button>
                                    </Col>
                                    <Col>
                                        <Button variant="danger"><span className='bg-light rounded-pill p-1'>🛒</span> Añadir</Button>
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

export default Home