import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Apply from './pages/Apply';
import Dashboard from './pages/Dashboard';
import JobDetail from './pages/JobDetail';
import LoginModal from './components/LoginModal';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<LoginModal isOpen={true} onClose={() => { }} />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/jobs/:id" element={<JobDetail />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;