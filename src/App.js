import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Home';
import About from './About';
import Contactme from './Contactme';


function App() {
  return (
    <div className="App">
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contactme />} />
      </Routes>
    </div>
  );
}

export default App;
