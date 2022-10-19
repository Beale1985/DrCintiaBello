import React from "react";
import Jump from 'react-reveal/Jump';
import Fade from 'react-reveal/Fade';

function Header (){
    return (
        <header className="masthead">
            <div className="container">
                <Fade>
                <div>
                <img className="logo-img" fill="red" src="https://i.postimg.cc/1XTG4MDh/Logo-CB-blanco.png"></img>
                </div>
                </Fade>
                <Jump>
                    <a className="btn btn-primary btn-xl text-uppercase" href="#about">Conocenos</a>
                </Jump>
            </div>
        </header>
    )
}
        
export default Header;       