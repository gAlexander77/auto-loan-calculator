import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AutoLoanCalulator from './pages/AutoLoanCalculator';
import Error404 from './pages/Error404';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AutoLoanCalulator/>}/>
        <Route path="*" element={<Error404/>}/>
      </Routes>
    </Router>
  );
}

export default App;
