import './App.css';
import Home from './components/home/Home';
import Biography from './components/biography/Biography';
import Proyects from './components/proyects/Proyects';

function App() {
  return (
    <div>
      <Home />
      <Biography />
      <Proyects />
      <div className='contacts-section'>
        <hr />
      </div>
    </div>
  );
}

export default App;
