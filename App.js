import React, { useEffect } from 'react';
import { Carousel } from "react-bootstrap";
import { Col, Container, Row } from "react-bootstrap";
import { Nav, NavItem, NavDropdown } from "react-bootstrap";
import { StyleSheet } from "react-native";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";

export default function App() {

    // useEffect -> document onload page

    useEffect(() => {
        document.querySelectorAll(".sr-only").forEach((item) => { 
            item.remove();
        });

        document.querySelectorAll(".carousel-control-prev").forEach((item) => { 
            item.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        });

        document.querySelectorAll(".carousel-control-next").forEach((item) => { 
            item.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        });
    }, []);

    // página -> JSX

    return (
        <><><><Nav className="navbar navbar-dark bg-dark justify-content-center" defaultActiveKey="#">
            <Nav.Item>
                <Nav.Link className="link-nav" href="#series">Séries</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className="link-nav" href="#filmes">Filmes</Nav.Link>
            </Nav.Item>
            <NavDropdown id="opCategorias" title={"Categorias" + " "} menuVariant="dark">
                <NavDropdown.Item>Drama</NavDropdown.Item>
                <NavDropdown.Item>Ação</NavDropdown.Item>
                <NavDropdown.Item>Romance</NavDropdown.Item>
            </NavDropdown>
        </Nav><br/>

        <h3 className="">Filmes de ação</h3>

        <Carousel variant="dark">
            <Carousel.Item>
                <img className="d-block" src="https://via.placeholder.com/100x200.png?text=Filme 1" />
                <Carousel.Caption class="text-dark">
                    <p>Filme 1</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block" src="https://via.placeholder.com/100x200.png?text=Filme 2" />
                <Carousel.Caption class="text-dark">
                    <p>Filme 2</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block" src="https://via.placeholder.com/100x200.png?text=Filme 3" />
                <Carousel.Caption class="text-dark">
                    <p>Filme 3</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel></><br/>
            
        <h3 className="">Lançamentos</h3>
        
        <Carousel variant="dark">
            <Carousel.Item>
                <img className="d-block" src="https://via.placeholder.com/100x200.png?text=Filme 1" />
                <Carousel.Caption class="text-dark">
                    <p>Filme 1</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block" src="https://via.placeholder.com/100x200.png?text=Filme 2" />
                <Carousel.Caption class="text-dark">
                    <p>Filme 2</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block" src="https://via.placeholder.com/100x200.png?text=Filme 3" />
                <Carousel.Caption class="text-dark">
                    <p>Filme 3</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel></><br/>
        
        <h3 className="">Destaques</h3>
        
        <Carousel variant="dark">
            <Carousel.Item>
                <img className="d-block" src="https://via.placeholder.com/100x200.png?text=Filme 1" />
                <Carousel.Caption class="text-dark">
                    <p>Filme 1</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block" src="https://via.placeholder.com/100x200.png?text=Filme 2" />
                <Carousel.Caption class="text-dark">
                    <p>Filme 2</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block" src="https://via.placeholder.com/100x200.png?text=Filme 3" />
                <Carousel.Caption class="text-dark">
                    <p>Filme 3</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel></>

    );
}