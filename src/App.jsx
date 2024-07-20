import React, { Component, useState } from 'react'

import Home from './Components/home';
import About from './Components/about';
import Departments from './Components/departments';
import Events from './Components/events';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import './App.css';

function App() {
    return (
      <React.Fragment>
      <BrowserRouter>
          <div className='header'>
            <Link to={'/'} className='link'>Home</Link>
            <Link to={'/about'} className='link'>About</Link>
            <Link to={'/department'} className='link'>Departments</Link>
            <Link to={'/events'} className='link'>Events</Link>
          </div>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/department' element={<Departments />}></Route>
            <Route path='/events' element={<Events />}></Route>
          </Routes>
        </BrowserRouter>
        <center className='footer'>
          <p className='footer2'>©2024 Saveetha Engineering College. All rights reserved.</p>
        </center>
      </React.Fragment>
    );
}

export default App