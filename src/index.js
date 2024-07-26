// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import './styles/markdown.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);