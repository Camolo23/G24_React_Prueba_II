import { useContext, useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import MyContext from "../my-context";
import Loading from "./Loading";

function DetailCard() {

    const { id } = useParams();

    const { pizzasInfo, addToCart } = useContext(MyContext);

    function aplicarMayuscula(str) {
        const palabras = str.split(" ").map(palabra => {
            return palabra[0].toUpperCase() + palabra.slice(1);
        });
        return palabras.join(" ");
    };

    const [selectedPizza, setSelectedPizza] = useState({});

    useEffect(() => {
        setSelectedPizza(pizzasInfo.find(pizza => pizza.id === id));
    }, []);

    return (
        <div>
            {selectedPizza.ingredients === undefined ?
                <Loading />
                :
                <Row xs={1} md={2} className="m-5">
                    <Col>
                        <img
                            src={`${selectedPizza.img}`}
                            className="card-img-top m-2" alt={selectedPizza.name}
                        />
                    </Col>
                    <Col>
                        <div className="card-body">
                            <h4 className="card-title border-bottom pb-2">
                                {aplicarMayuscula(`${selectedPizza.name}`)}
                            </h4>
                            <p
                                className="fs-6 fw-lighter lh-1 pt-1 mb-1"
                                style={{ listStyle: 'none' }}>
                                {selectedPizza.desc}
                            </p>
                            <p className="m-0">
                                <strong>Ingredientes</strong>
                            </p>
                            <ul>
                                {selectedPizza.ingredients.map(ingrediente => (
                                    <li
                                        style={{ listStyle: 'none' }}
                                        key={ingrediente}>
                                        🍕 {aplicarMayuscula(`${ingrediente}`)}
                                    </li>
                                ))}
                            </ul>
                            <Row >
                                <Col>
                                    <p className="p-0 fs-4">
                                        <strong>Precio: $
                                            {Intl.NumberFormat('es-CL').format(`${selectedPizza.price}`)}
                                        </strong>
                                    </p>
                                </Col>
                                <Col className="p-0">
                                    <Button
                                        className="ms-5"
                                        variant="secondary"
                                        onClick={() => addToCart( selectedPizza.id )}
                                    >Agregar al carrito
                                    </Button>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            }
        </div>
    )
};

export default DetailCard