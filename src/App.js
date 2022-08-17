import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Biography from './components/biography/Biography';
import Projects from './components/proyects/Proyects';
import Contacts from './components/contacts/Contacts';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Biography />
      <Projects />
      <Contacts />
    </div>
  );
}

export default App;
