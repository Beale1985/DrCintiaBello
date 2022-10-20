import React from "react";
import Jump from 'react-reveal/Jump';
import Fade from 'react-reveal/Fade';

function Header (){
    return (
        <header className="masthead">
            <div className="container">
                <Fade>
                <div>
                <img className="logo-img" src="https://i.postimg.cc/3WQGMMnb/LogoCB.png" alt="Logo"></img>
                </div>
                </Fade>
                <Jump>
                    <a className="btn btn-primary btn-xl text-uppercase" href="#nosotros">Conocenos</a>
                </Jump>
            </div>
        </header>
    )
}
        
export default Header;       