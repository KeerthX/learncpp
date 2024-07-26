// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home'; // Import the Home component
import About from './pages/About';
import Contact from './pages/Contact';
import Donate from './pages/Donate';
import LessonsList from './components/LessonsList';
import Lesson from './components/Lesson';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/lessons" element={<LessonsList />} />
          <Route path="/lesson/:topicName/:lessonName" element={<Lesson />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
