import {  BrowserRouter as Router, Routes,  Route} from "react-router-dom";
import Contact from './components/Contact';
import Home from './components/Home';
import About from './components/About.js';
import Destination from './components/Destination.js';

function App() {
  return (
    <Router>

      <Routes>

        < Route exact path='/' element={<Home />}  />
        
        < Route path='/media' element={<Home />}  />

        < Route path='/home' element={<Home />}  />
        
        <Route path = '/contact' element={<Contact/>} />

        <Route path = '/about' element={<About/>} />

        <Route path = '/destination' element={<Destination/>} />

      </Routes>


    </Router>
  );
}

export default App;
