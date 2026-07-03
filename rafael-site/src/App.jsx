import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RafaelPortfolio from './pages/RafaelPortfolio';
import MasteringLanding from './pages/MasteringLanding';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-black text-white">
        <Routes>
          <Route path="/" element={<RafaelPortfolio />} />
          <Route path="/master" element={<MasteringLanding />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
