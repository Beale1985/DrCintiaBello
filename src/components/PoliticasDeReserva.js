import React from 'react';
import NavBarPoliticasDeReserva from './NavBarPoliticasDeReserva.js';
import Footer from './Footer.js';

function PoliticasDeReserva() {
  return (
    <div>
        <NavBarPoliticasDeReserva />
        <div className='container politicasDeReserva'>
        <br/>
            <h3 className='text-center tituloPoliticasDeReserva'>
                Condiciones de Reserva Faciales
            </h3>
            <br/>
              <div className='row'>
                <div className='col'>
                  <h4 className='textoPoliticasDeReserva'>
                    Los turnos para Consulta o Tratamiento facial se solicitan a través de WhatsApp al +54 9 116148971.

                    Para reservar turno se solicita una seña fija de  $3.000.- que se abona en efectivo en el consultorio o por transferencia bancaria (solicitar datos por WhatsApp)

                    La seña será reintegrada el día que concurra al turno, descontándola de lo que deberá abonar por el Tratamiento o Consulta.

                    En caso de necesitar cancelar el turno, debe hacerlo con 48 Hs. de anticipación. Si se cancela con menos tiempo o concurre más de 30 minutos tarde al turno pautado, la seña se pierde sin EXCEPCION.

                    Si cancela con más de 48 Hs. de anticipación, el turno puede reprogramarse dentro de los 30 días de abonada la seña y la misma será reintegrada el día que concurra a la sesión.

                    Si no concurre a un nuevo turno dentro de los 30 días de abonada la seña o solicita un nuevo turno y vuelve a cancelarlo la seña se pierde SIN EXCEPCION.  
                  </h4>
                </div>
                <div className='col'>
                  <img src='https://i.postimg.cc/3J9sBC09/1.jpg' alt='Imagen Tratamiento Facial' style={{width:"90%"}}></img>
                </div>
              </div>
              <br/>
            <h3 className='text-center tituloPoliticasDeReserva'>
                Condiciones de Reserva Depilación
            </h3>
            <br/>
            <div className='row'>
                <div className='col'>
                  <h4 className='textoPoliticasDeReserva'>
                    Para reservar turno de depilación láser no se solicita seña, EXCEPTO EN LAS SIGUIENTES SITUACIONES:

                    Pacientes que solicitaron más de DOS turnos y los cancelaron o no concurrieron deberán abonar una seña para poder tomar un nuevo turno.

                    La seña será reintegrada el día que concurran a la sesión.

                    En caso de necesitar volver a cancelar el turno debe hacerlo con 48 Hs. de anticipación. Si se cancela con menos tiempo o concurre más de 30 minutos tarde al turno pautado la seña se pierde SIN EXCEPCION.

                    Si cancela con mas de 48 Hs. de anticipación el turno puede reprogramarse dentro de los 30 días de abonada la seña y la misma será reintegrada el día que concurra a la sesión.

                    Si no concurre a un nuevo turno dentro de los 30 días o solicita un nuevo turno y vuelve a cancelarlo, la seña se pierde SIN EXCEPCION (haya o no avisado con anticipación de 48 Hs.)
                  </h4>
                </div>
                  <div className='col'>
                  <img src='https://i.postimg.cc/YC4NhM6k/2.jpg' alt='Imagen Tratamiento Facial' style={{width:"90%"}}></img>
                </div>
                </div>
                <br/>
            <h3 className='text-center'>CONSULTORIO DRA. CINTIA BELLO</h3>
        </div>
        <Footer />
    </div>
  )
}

export default PoliticasDeReserva