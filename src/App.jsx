import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Apply from './pages/Apply';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
};

export default App;