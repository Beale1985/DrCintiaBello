import React from 'react';
import NavBarPoliticasDeReserva from './NavBarPoliticasDeReserva.js';
import Footer from './Footer.js';

function PoliticasDeReserva() {
  return (
    <div>
        <NavBarPoliticasDeReserva />
        <div className='container'>
            <h3>
                Condiciones de Reserva Faciales:
            </h3>
            <h4>
                Los turnos para Consulta o Tratamiento facial se solicitan a través de WhatsApp al +54 9 116148971.

                Para reservar turno se solicita una seña fija de  $3.000.- que se abona en efectivo en el consultorio o por transferencia bancaria (solicitar datos por WhatsApp)

                La seña será reintegrada el día que concurra al turno, descontándola de lo que deberá abonar por el Tratamiento o Consulta.

                En caso de necesitar cancelar el turno, debe hacerlo con 48 Hs. de anticipación. Si se cancela con menos tiempo o concurre más de 30 minutos tarde al turno pautado, la seña se pierde sin EXCEPCION.

                Si cancela con más de 48 Hs. de anticipación, el turno puede reprogramarse dentro de los 30 días de abonada la seña y la misma será reintegrada el día que concurra a la sesión.

                Si no concurre a un nuevo turno dentro de los 30 días de abonada la seña o solicita un nuevo turno y vuelve a cancelarlo la seña se pierde SIN EXCEPCION.  
            </h4>
            <h3>CONSULTORIO DRA. CINTIA BELLO</h3>
        </div>
        <Footer />
    </div>
  )
}

export default PoliticasDeReserva