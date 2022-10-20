import './css/styles.css';
import { Route, Routes, BrowserRouter} from 'react-router-dom';
import Home from './components/Home';
import Tratamientos from './components/Tratamientos';

function App() {
  return (
    <div className="App" >
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home /> } />
      <Route path="/tratamientos/*" element={<Tratamientos /> } />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
