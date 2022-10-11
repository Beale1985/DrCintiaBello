import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

function NavBar () {
    return (
        <Fade top>
        <nav className="navbar navbar-expand-lg fixed-top" id="mainNav">
            <div className="container">
                <a className="navbar-brand" href="#Home" style={{fontFamily:"cursive"}}>Dr. Cintia Bello</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars ms-1"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                        <li className="nav-item"><a className="nav-link" href="#services">Turnos</a></li>
                        <li className="nav-item"><a className="nav-link" href="#portfolio">Tratamientos</a></li>
                        <li className="nav-item"><a className="nav-link" href="#about">Nosotros</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        </Fade>
    )
}

export default NavBar;