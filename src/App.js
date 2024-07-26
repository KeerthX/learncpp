// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LessonsList from './components/LessonsList';
import Lesson from './components/Lesson';
import './styles/markdown.css';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LessonsList />} />
      <Route path="/lesson/:topicName/:lessonName" element={<Lesson />} />
    </Routes>
  </Router>
);

export default App;
