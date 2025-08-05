import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Import global CSS styles for the app
import App from './App';  // Main App component
import reportWebVitals from './reportWebVitals';  // Optional performance monitoring
import 'bootstrap/dist/js/bootstrap.bundle.min.js';  // Bootstrap JS for components like modals, tooltips, etc.
import { BrowserRouter } from 'react-router-dom';  // React Router for routing

// Get the root element from the DOM where the React app will be mounted
const root = ReactDOM.createRoot(document.getElementById('root'));

// Check if the environment is production or development
if (process.env.NODE_ENV === 'development') {
  // If in development mode, enable React.StrictMode to highlight potential problems in the app
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
} else {
  // In production, render the app without React.StrictMode for better performance
  root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

// Optional: Report web vitals for performance monitoring (this is useful for tracking performance metrics in production)
reportWebVitals();  // You can remove this if you're not actively using it
