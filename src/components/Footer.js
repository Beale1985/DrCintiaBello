import React from 'react'

function Footer() {
  return (
    <footer className="footer py-4">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 text-lg-start">Copyright &copy; Dr. Cintia Bello 2022</div>
                    <div className="col-lg-4 my-3 my-lg-0">
                        <a className="btn btn-dark btn-social mx-2" target="_blank" href="https://www.youtube.com/user/titazzz140583?app=desktop" aria-label="Youtube"><i className="fab fa-youtube"></i></a>
                        <a className="btn btn-dark btn-social mx-2" target="_blank" href="https://es-la.facebook.com/dracintiabello/" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-dark btn-social mx-2" target="_blank" href="https://www.instagram.com/dracintiabello/?hl=es" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                    </div>
                    <div className="col-lg-4 text-lg-end">
                        <a className="link-dark text-decoration-none me-3" href="#!">Políticas de reserva</a>
                    </div>
                </div>
            </div>
        </footer>
  )
}

export default Footer;
