import './App.css';
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Routes from './Routes'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
