import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"
import { Button, Navbar, Nav } from 'react-bootstrap'



function Header() {
    return (
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Início</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Categoria</Nav.Link>
          <Nav.Link href="#features">Explorar</Nav.Link>
        </Nav>
        <Button variant="info">Cadastrar</Button>
        <Button className="ml-2" variant="success">Entrar</Button>

      </Navbar>
        
    )
}

export default Header;