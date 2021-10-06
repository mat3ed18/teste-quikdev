import React, { useEffect, useState } from 'react';
import { Carousel } from "react-bootstrap";
import { Col, Container, Row } from "react-bootstrap";
import { Modal, Nav, NavItem, NavDropdown } from "react-bootstrap";
import axios, { AxiosInstance, AxiosPromise } from 'axios';
import { StyleSheet } from "react-native";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";

export default function App() {

    // useEffect -> document onload page
    const [show, setShow] = useState(false);

    const [categorias] = useState([]);
    const [categoriasFilm] = useState([]);
    const [lancamentos] = useState([]);
    const [modalMovie, setModalMovie] = useState([]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Modal do filme

    function openMovie(id) {
        handleShow();

        // Dados do filme

        axios.get("https://api.themoviedb.org/3/movie/" + id + "?api_key=4ec327e462149c3710d63be84b81cf4f&language=pt-BR").then(function (response) {
            const filme = response.data;
            const dt_lancamento = new Date(filme["release_date"]);
            const categoriasFilm = [];

            filme.genres.forEach((categoria) => {
                categoriasFilm.push([
                    <button className="btn btn-sm btn-dark">{categoria.name}</button>
                ]);
            })
        
            setModalMovie([
                <><img className="img_modal" src={"https://image.tmdb.org/t/p/original/" + filme["poster_path"]}/>
                <hr/>
                <h3>{filme["original_title"]}</h3>
                <h6><sup>Duração: {filme["runtime"]} minutos</sup></h6>
                <h6>{filme["popularity"]} visualizações</h6>
                <h4>{filme["vote_average"]} estrelas</h4>
                <hr/>
                <h6 className="descricao"><i>{filme["overview"]}</i></h6>
                <hr/>
                <h6>{filme.production_companies[0].name}</h6>
                <h6>{filme.production_countries[0].name}</h6>
                <h6>lançado em {dt_lancamento.getDay()}/{dt_lancamento.getMonth()+1}/{dt_lancamento.getFullYear()}</h6>
                <h6>idioma: {filme.spoken_languages[0].name}</h6>
                <hr/>
                <div>
                    {categoriasFilm}
                </div></>
            ]);
        }).catch(function (err) {
            setModalMovie([
                <i>Erro: Parece que houve uma falha interna em nosso servidor. Tente novamente mais tarde</i>
            ]);
        });
        alert(id);
    }

    useEffect(() => {

        const axios = require('axios');

        // Dropdown categorias

        axios.get("https://api.themoviedb.org/3/genre/movie/list?api_key=4ec327e462149c3710d63be84b81cf4f&language=pt-BR").then(function (response) {
            response.data.genres.forEach((categoria) => {
                categorias.push(<NavDropdown.Item>{categoria.name}</NavDropdown.Item>);
            });
        }).catch(function (err) {
            document.body.innerHTML = "<i style=\"color: white\">Erro: " + JSON.stringify(err) + "</i>";
        });

        // Carousel 1

        axios.get("https://api.themoviedb.org/3/discover/movie?api_key=4ec327e462149c3710d63be84b81cf4f&language=pt-BR&page=1").then(function (response) {
            response.data.results.forEach((filme) => {
                lancamentos.push(
                    <Carousel.Item onClick={() => openMovie(filme["id"])} style={{backgroundImage: "url('https://image.tmdb.org/t/p/original/" + filme["backdrop_path"] + "')", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "100%"}} >
                        <img className="d-block" src={"https://image.tmdb.org/t/p/original/" + filme["poster_path"]} />
                        <Carousel.Caption>
                            <button className="btn btn-dark openMovie">{filme["original_title"]}</button>
                        </Carousel.Caption>
                    </Carousel.Item>
                );
            });
        }).catch(function (err) {
            document.body.innerHTML = "<i style=\"color: white\">Erro: " + JSON.stringify(err) + "</i>";
        });

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

            
        <><Modal show={show} onHide={handleClose} size="md">
            <Modal.Header>
                <Modal.Title>Detalhes do filme</Modal.Title>
            </Modal.Header>
            <Modal.Body className="main_movie">
                {modalMovie}
            </Modal.Body>
            <Modal.Footer className="justify-content-center">
                <button className="btn btn-secondary" onClick={handleClose}>Fechar</button>
            </Modal.Footer>
        </Modal>
            
        <><><><Nav className="navbar navbar-dark bgDark justify-content-center">
            <Nav.Item>
                <Nav.Link className="link-nav" href="#series">Séries</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className="link-nav" href="#filmes">Filmes</Nav.Link>
            </Nav.Item>
            <NavDropdown id="opCategorias" title={"Categorias" + " "} menuVariant="dark">
                {categorias}
            </NavDropdown>
        </Nav><br/>

        <button className="btn btn-success openModal">Abrir</button>

        <h3 className="bgDark text-white p-3">Lançamentos</h3>

        <Carousel variant="dark">
            {lancamentos}
        </Carousel></><br />

        <h3 className="bgDark text-white p-3">Novidades</h3>

        <Carousel variant="dark">
            <Carousel.Item>
                <img className="d-block" src="https://via.placeholder.com/100x200.png?text=Filme 1" />
                <Carousel.Caption class="text-white">
                    <p>Filme 1</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block" src="https://via.placeholder.com/100x200.png?text=Filme 2" />
                <Carousel.Caption class="text-white">
                    <p>Filme 2</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block" src="https://via.placeholder.com/100x200.png?text=Filme 3" />
                <Carousel.Caption class="text-white">
                    <p>Filme 3</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel></><br />

        <h3 className="bgDark text-white p-3">Destaques</h3>

        <Carousel variant="dark">
            <Carousel.Item>
                <img className="d-block" src="https://via.placeholder.com/100x200.png?text=Filme 1" />
                <Carousel.Caption class="text-white">
                    <p>Filme 1</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block" src="https://via.placeholder.com/100x200.png?text=Filme 2" />
                <Carousel.Caption class="text-white">
                    <p>Filme 2</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block" src="https://via.placeholder.com/100x200.png?text=Filme 3" />
                <Carousel.Caption class="text-white">
                    <p>Filme 3</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel></></>
    );
}