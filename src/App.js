import './css/styles.css';
import { Route, Routes, BrowserRouter} from 'react-router-dom';
import Home from './components/Home.js';
import Tratamientos from './components/Tratamientos.js';
import PoliticasDeReserva from './components/PoliticasDeReserva.js'

function App() {
  return (
    <div className="App" >
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home /> } />
      <Route path="/tratamientos/*" element={<Tratamientos /> } />
      <Route path="/politicasdereserva/" element={<PoliticasDeReserva /> } />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
