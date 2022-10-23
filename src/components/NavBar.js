import Fade from 'react-reveal/Fade';

function NavBar () {
    return (
        <Fade top>
        <nav className="navbar navbar-expand-lg fixed-top shadow" id="mainNav">
            <div className="container">
                <a className="navbar-brand" href="#Home">
                    <img className='img-logo-header' src="https://i.postimg.cc/3WQGMMnb/LogoCB.png" alt='Logo'></img> Dra. Cintia Bello
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars ms-1"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto py-4 py-lg-0">
                        <li className="nav-item animated-line"><a className="nav-link" href="#turnos">Turnos</a></li>
                        <li className="nav-item animated-line"><a className="nav-link" href="#tratamientos">Tratamientos</a></li>
                        <li className="nav-item animated-line"><a className="nav-link" href="#nosotros">Nosotros</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        </Fade>
    )
}

export default NavBar;