import React from "react";
import Zoom from 'react-reveal/Zoom';

function About() {
  return (
    <section className="page-section" id="nosotros">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Nosotros</h2>
                    <h3 className="section-subheading text-muted">Nuestra historia</h3>
                </div>
                <ul className="timeline">
                    <li>
                        <div className="timeline-image">
                            <Zoom>
                            <img className="rounded-circle img-fluid" src="assets/img/about/1.jpg" alt="..." style={{backgroundColor:"white"}} />
                            </Zoom>
                        </div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>2008</h4>
                                <h4 className="subheading">Inicios</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                        </div>
                    </li>
                    <li className="timeline-inverted">
                        <div className="timeline-image">
                            <Zoom>
                            <img className="rounded-circle img-fluid" src="assets/img/about/2.jpg" alt="..." />
                            </Zoom>
                            </div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>2011</h4>
                                <h4 className="subheading">Nuestro Primer centro</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                        </div>
                    </li>
                    <li>
                        <div className="timeline-image">
                            <Zoom>
                            <img className="rounded-circle img-fluid" src="assets/img/about/3.jpg" alt="..." />
                            </Zoom>
                            </div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>2015</h4>
                                <h4 className="subheading">Crecimos</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                        </div>
                    </li>
                    <li className="timeline-inverted">
                        <div className="timeline-image">
                            <Zoom>
                            <img className="rounded-circle img-fluid" src="assets/img/about/4.jpg" alt="..." />
                            </Zoom>
                            </div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>2020</h4>
                                <h4 className="subheading">Incorporamos nuevos tratamientos</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                        </div>
                    </li>
                    <li className="timeline-inverted">
                        <div className="timeline-image">
                            <Zoom>
                            <h4>
                                Se parte
                                <br />
                                de nuestra
                                <br />
                                HISTORIA!
                            </h4>
                            </Zoom>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
  )
}

export default About;
