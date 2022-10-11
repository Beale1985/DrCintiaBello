import './css/styles.css';
import Home from "./components/NavBar.js";
import Header from './components/Header.js';
import Services from './components/Services.js';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App" >
      <Home />
      <Header />
      <Services />
      <Portfolio />
      <About />
      <Footer />
    </div>
  );
}

export default App;
