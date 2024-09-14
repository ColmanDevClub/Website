import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from 'src/ui/Navbar';
import HomePage from './pages/HomePage';
import TeamPage from './pages/TeamPage';
import SyllabusPage from './pages/SyllabusPage/SyllabusPage';
import { Footer } from './components';

const LandingRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/syllabus" element={<SyllabusPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default LandingRouter;
