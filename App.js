import { Route, Routes } from 'react-router-dom'
import Background from '../src/images/background.png';
import './App.css';

import Random from './pages/Random';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Navbar2 from './components/Navbar2/Navbar2';
import BotNavbar from './components/BotNavbar/BotNavbar';

function App() {
  return (
    <div style={
      { 
        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url("${Background}")`,
        backgroundSize: 'cover',
        width: '100vw',
        height: '100vh'
      }
    }>
      <Navbar2 />
      <BotNavbar />
      <Routes>
        <Route path="/" exact element={ <Home/> } />
        <Route path="random" element={ <Random/> } />
        <Route path="contact" element={ <Contact/> } />
      </Routes> 
    </div>
  );
}

export default App;
