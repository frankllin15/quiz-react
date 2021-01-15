import React from 'react'
import {  Link } from 'react-router-dom'
import "./Header.css"
import { Button, Navbar, Nav, Image } from 'react-bootstrap'
import Logo from '../../assets/logo_semfundo.png'


function Header() {
    return (
        <Navbar bg="dark" variant="dark">
        <Link to='/' className="p-0">
          <Image className="logo" rounded src={Logo} />
        </Link>
        <Link to='/'>
        <Navbar.Brand>Início</Navbar.Brand>
        </Link>
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