// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import QuizDetailPage from './pages/QuizDetailPage';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quiz/:id" element={<QuizDetailPage />} />
      </Routes>
    </Router>
  );
};

export default App;
