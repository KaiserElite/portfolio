import { Routes, Route } from 'react-router-dom';

import Navbar from './layouts/navbar/Navbar.jsx'
import Home from './pages/Home.jsx';
import Draw3Info from './pages/Draw3Info.jsx';

import './App.css'

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <div className='routes'>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/draw3info" element={<Draw3Info />}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App