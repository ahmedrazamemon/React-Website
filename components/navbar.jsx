import React from "react";
import  style from "./style.css"
import { Link } from "react-router-dom";
import { AiFillHome } from 'react-icons/ai';
import {FaBuysellads} from 'react-icons/fa';
import {TfiGallery} from 'react-icons/tfi';
import {FaServicestack} from 'react-icons/fa';
import {BsFillTelephoneFill} from 'react-icons/bs'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function sidebar(){

return(
        <>
    
       <Navbar className="container"  expand="md">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home"><Link to={"./"} className="a" ><AiFillHome/>Home </Link></Nav.Link>
            <Nav.Link href="#link"><Link to={"./about"} className="a" > <FaBuysellads/> About</Link></Nav.Link>
            <Nav.Link href="#link"><Link to={"./services"} className="a"> <FaServicestack/> Services</Link></Nav.Link>
            <Nav.Link href="#link"><Link to={"./gallery"} className="a"> <TfiGallery/> Gallery</Link></Nav.Link>
            <Nav.Link href="#link"><Link to={"./contact"} className="a"> <BsFillTelephoneFill/> Contact</Link></Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

        </>


)



}export default sidebar;