import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBarTratamientos from './NavBarTratamientos';
import Footer from './Footer';
import Depilacion from './Depilacion';
import Faciales from './Faciales';
import Combos from './Combos';

function Tratamientos() {
  return (
    <div>
        <NavBarTratamientos />
        <Routes exact element={<Tratamientos />} >
            <Route path="/depilacion" element={<Depilacion /> } exact />
            <Route path="/combos" exact element={<Combos />} />
            <Route path="/faciales" exact element={<Faciales />} />
          </Routes>
        <Footer />
    </div>
  )
}

export default Tratamientos