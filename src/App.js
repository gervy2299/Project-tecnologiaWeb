import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Inicio from './components/Inicio';
import Personaje from './components/Personaje';
import Login from './components/Login';
import Registro from './components/Registro';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Inicio></Inicio>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/registro' element={<Registro></Registro>}></Route>
        <Route path='/personaje/:id' element={<Personaje></Personaje>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
