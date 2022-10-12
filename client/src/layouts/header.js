import React from 'react'
import { Link } from 'react-router-dom';
import { LinkComponent, LinkContainer } from 'react-router-bootstrap';
// import Nav from 'react-bootstrap';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {

    const navStyle = {
        backgroudColor: "blue !important"
    }
    
    return(
    <header>
        {/* <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
            <div className="navbar-nav nav w-100 d-flex justify-content-around">
                <a className="nav-item nav-link" href="">Barbers</a>
                <a className="nav-item nav-link" href="">Tattoos</a>
                <a className="nav-item nav-link" href="">Sign In</a>
                <Link className='nav-item nav-link' to="/login">Login</Link>
            </div>
        </nav> */}

        <Navbar style={{backgroundColor: "#5881FF"}} variant="dark" expand="md" className="shadow">
        <Nav>

        <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
        </LinkContainer>

        <LinkContainer to="/about">
            <Nav.Link>About Us</Nav.Link>
        </LinkContainer>

        <LinkContainer to="/client/login">
            <Nav.Link>Clients</Nav.Link>
        </LinkContainer>

        <LinkContainer to="/business/login">
            <Nav.Link>Business</Nav.Link>
        </LinkContainer>

        </Nav>
            
        </Navbar>
    </header>
    )
}

export default Header;