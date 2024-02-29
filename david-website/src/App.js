import Navbar from './components/Navbar';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import Home from './pages/Home';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';


function App() {
  return (
    <>
      <Router>
      <Navbar/>
            <Route path='/' element={<Home/>}/>
            <Route path='/experience' element={<Experience/>}/>
            <Route path='/contact' element={<Contact/>}/>
      </Router>
    
    </>
  );
}

export default App;
