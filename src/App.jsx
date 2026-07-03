import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Corporate from './pages/Corporate';
import ArmaTuEvento from './pages/ArmaTuEvento';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-black text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/corporativo" element={<Corporate />} />
          <Route path="/armatuevento" element={<ArmaTuEvento />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
