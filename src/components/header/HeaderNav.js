import React from 'react'
import './HeaderNav.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import {FaFolderOpen, FaUser} from 'react-icons/fa'

class Header extends React.Component{
 
    render(){
        return (
            <Navbar bg="light" expand="md" style={{height:"100px"}}>
                <Navbar.Brand href="/">
                    <img alt="required alt property" src="images/dc-logo-color.png"></img>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                
                    <Nav className="ml-auto">
                        <ul className="navbar-nav text-center">
                            <li >

                                <NavDropdown title="About" id="basic-navbar-nav">
                                    <NavDropdown.Item href="/">About</NavDropdown.Item>
                                    <NavDropdown.Item href="/">Partners</NavDropdown.Item>
                                </NavDropdown>
                            </li>
                            <li className="nav-item">
                                <Nav.Link  href="/">
                                    <FaFolderOpen/>
                                </Nav.Link>
                            </li>
                            <li className="nav-item">
                                <Nav.Link  href="/">
                                    <FaUser/>
                                </Nav.Link>
                            </li>
                        </ul>
                    </Nav>
                
                   
                </Navbar.Collapse>
            </Navbar>

        )
    }
}

export default Header