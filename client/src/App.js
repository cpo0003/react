import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Usuario from './Usuario';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/usuario1" element={<Usuario nombre="Cristian Plaza" edad={21} ubicacion="Albacete" descripcion="Soy un estudiante de DAW." seguidores={100000} seguidos={433} publicaciones={20} isFollowing/>} />
          <Route path="/usuario2" element={<Usuario nombre="Megamind Cristian" edad={44} ubicacion="Cadiz" descripcion="Soy un extraterrestre" seguidores={3330000} seguidos={3} publicaciones={560} isFollowing/>} />
        </Routes>
        <nav>
          <ul className='lista'>
            <li className='link'>
              <Link to="/usuario1">Perfil de Cristian Plaza</Link>
            </li>
            <li className='link'>
            <Link to="/usuario2">Perfil de Megamind Cristian</Link>
            </li>
          </ul>
        </nav>
      </div>
    </Router>
  );
}

export default App;
