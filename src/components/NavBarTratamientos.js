import React from 'react';
import Fade from 'react-reveal/Fade';

function NavBar () {
    return (
        <Fade top>
        <nav className="navbar navbar-expand-lg fixed-top" id="mainNav">
            <div className="container">
                <a className="navbar-brand" href="/">
                    <img className='img-logo-header' src="https://i.postimg.cc/3WQGMMnb/LogoCB.png" alt='Logo'></img> Dra. Cintia Bello
                </a>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto py-4 py-lg-0">
                    <li className="nav-item animated-line"><a className="nav-link" href="/#tratamientos">Tratamientos</a></li>
                    </ul>
                </div>
            </div>
            
        </nav>
        </Fade>
    )
}

export default NavBar;