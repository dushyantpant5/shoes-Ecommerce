import React from 'react';
import Navbar from './Components/Navbar';
import MainPage from './Pages/MainPage';
import { Route,Routes } from 'react-router-dom';
import Men from './Pages/Men';
import Women from './Pages/Women';
import Cart from './Pages/Cart';
import Kids from './Pages/Kids';
import Success from './Pages/Success';

function App() {
  return (
    <div className="App container mx-auto h-screen">
      <Navbar />
      <Routes>
        <Route path='/' element={ <MainPage/> } />
        <Route path='/men' element={ <Men/> } />
        <Route path='/women' element={<Women/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/kids' element={<Kids/>}/>
        <Route path='/success' element={<Success/>} />
      </Routes>
      <div className='h-20' ></div>
    </div>
  );
}

export default App;
