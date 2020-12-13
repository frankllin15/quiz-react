import './App.css';
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Routes from './Routes'
import Header from './components/header/Header'
import Card from './components/template/Card'
import Quiz from './components/quiz/Quiz'
import Home from './components/home/Home'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes />
      </div>
    </BrowserRouter>
  );
}

export default App;
