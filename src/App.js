import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Biography from './components/biography/Biography';
import Proyects from './components/proyects/Proyects';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Biography />
      <Proyects />
      <div className='contacts-section'>
        <hr />
        <a href="https://www.linkedin.com/in/alansilva04/"><i class="bi bi-linkedin"></i></a>
        <a href="https://github.com/alanSilva04"><i class="bi bi-github"></i></a>
        <p>ALANSILVANFUERZA@GMAIL.COM</p>
        <p><i class="bi bi-c-circle"></i>2022 ALAN SILVA ALL RIGHTS RESERVED</p>
      </div>
    </div>
  );
}

export default App;
