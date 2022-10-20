import React from 'react';
import { Link } from 'react-router-dom';
import Zoom from 'react-reveal/Zoom';

function Portfolio () {
    return(
        <section className="page-section bg-light tratamientos" id="tratamientos">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Tratamientos</h2>
                    <h3 className="section-subheading text-muted">Para más información no dudes en contactarnos.</h3>
                </div>
                <div className="row">
                
                    <div className="col-lg-4 col-sm-6 mb-4">
                        {/* <!-- Portfolio item 1--> */}
                        <Zoom>
                        <div className="portfolio-item shadow">
                            <Link to="/tratamientos/depilacion">
                            <div className="portfolio-link" data-bs-toggle="modal">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src="https://i.postimg.cc/nVw8dTDs/laser-epilation-hair-removal-therapy.jpg" alt="..." />
                                </div>
                                </Link>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Depilación Láser</div>
                                <div className="portfolio-caption-subheading text-muted">Depilación definitiva</div>
                            </div>
                            
                        </div>
                        </Zoom>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4">
                        {/* <!-- Portfolio item 2--> */}
                        <Zoom>
                        <div className="portfolio-item shadow">
                            <Link to="/tratamientos/combos">
                            <div className="portfolio-link" data-bs-toggle="modal">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src="https://i.postimg.cc/mrXx0S56/cosmetologist-cleaning-face-of-woman-in-beauty-salon.jpg" alt="..." />
                                </div>
                            </Link>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Combos</div>
                                <div className="portfolio-caption-subheading text-muted">Armá tus combos</div>
                            </div>
                        </div>
                        </Zoom>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4">
                        {/* <!-- Portfolio item 3--> */}
                        <Zoom>
                        <div className="portfolio-item shadow">
                        <Link to="/tratamientos/faciales">
                            <div className="portfolio-link" data-bs-toggle="modal">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src="https://i.postimg.cc/Ghw0wtXr/beautician-with-brush-applies-white-moisturizing-mask-to-the-face-of-young-girl-client-in-spa-beauty.jpg" alt="..." />
                                </div>
                            </Link>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Tratamientos Faciales</div>
                                <div className="portfolio-caption-subheading text-muted">Tratamientos combinados faciales</div>
                            </div>
                        </div>
                        </Zoom>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio;