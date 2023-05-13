import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import Home from './components/Home';
import App from './App';
import Footer from './components/footer';
// import Services from './components/Services';
// import Contact from './components/Contact';
// import Home from './components/Home';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/navbar';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<BrowserRouter>
<App />
{/* <Home/> */}
{/* <footer/> */}
</BrowserRouter>
  
  </React.StrictMode>
);

