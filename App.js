import React from 'react';
import { StyleSheet } from 'react-native';
import { Nav, NavDropdown } from "react-bootstrap";

import "css/style.css";

export default function App() {
    return (

        // Header

        <><script type="text/javascript" src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" /><>
            
                <Nav className="navbar navbar-dark bg-dark justify-content-center" defaultActiveKey="#">
                    <Nav.Item>
                        <Nav.Link className="link-nav" href="#series">Séries</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="link-nav" href="#filmes">Filmes</Nav.Link>
                    </Nav.Item>
                    <NavDropdown id="opCategorias" title="Categorias" menuVariant="dark">
                        <NavDropdown.Item>Drama</NavDropdown.Item>
                        <NavDropdown.Item>Ação</NavDropdown.Item>
                        <NavDropdown.Item>Romance</NavDropdown.Item>
                        <NavDropdown.Divider />
                    </NavDropdown>
                </Nav>

                {/* Carousel #1 */}

                <div className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://via.placeholder.com/100x100.png?text=Filme 1" className="d-block" />
                        </div>
                        <div className="carousel-item">
                            <img src="https://via.placeholder.com/100x100.png?text=Filme 2" className="d-block" />
                        </div>
                        <div className="carousel-item">
                            <img src="https://via.placeholder.com/100x100.png?text=Filme 3" className="d-block" />
                        </div>
                    </div>
                </div></></>


    );
}

const styles = StyleSheet.create({

});
