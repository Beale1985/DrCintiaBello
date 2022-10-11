import React from "react";
import Jump from 'react-reveal/Jump';
import Fade from 'react-reveal/Fade';

function Header (){
    return (
        <header className="masthead">
            <div className="container">
                <Fade>
                <div className="masthead-subheading">Bienvenido!</div>
                <div className="masthead-heading text-uppercase">Dr. Cintia Bello</div>
                </Fade>
                <Jump>
                    <a className="btn btn-primary btn-xl text-uppercase" href="#about">Conocenos</a>
                </Jump>
            </div>
        </header>
    )
}
        
export default Header;       