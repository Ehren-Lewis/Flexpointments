import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
    return(
    <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
            <div className="navbar-nav nav w-100 d-flex justify-content-around">
                {/* <a className="nav-item nav-link" href="">Barbers</a>
                <a className="nav-item nav-link" href="">Tattoos</a>
                <a className="nav-item nav-link" href="">Sign In</a> */}
                <Link className='nav-item nav-link' to="/login">Login</Link>
            </div>
        </nav>
    </header>
    )
}

export default Header;