import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/homepage';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
