import React from 'react';
import { Nav, NavItem, NavDropdown } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";

export default function App() {
    return (
        <Nav className="navbar navbar-dark bg-dark justify-content-center" defaultActiveKey="#">
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
        </Nav>
    );
}
