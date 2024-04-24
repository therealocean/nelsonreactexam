import React from 'react';
import './App.css';
// import { RouteComponent } from './route';
import Home from './Home';
import Project1 from './Project1';
import { Routes, Route } from 'react-router';
import Project3 from './Project3';
import Project2 from './Project2';
import Project4 from './Project4';
import Project5 from './Project5';
import Project6 from './Project6';
import { Page404 } from './Page404';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/project1' element={<Project1 />} />
      <Route path='/project2' element={<Project2 />} />
      <Route path='/project3' element={<Project3 />} />
      <Route path='/project4' element={<Project4 />} />
      <Route path='/project5' element={<Project5 />} />
      <Route path='/project6' element={<Project6 />} />

      {/* 404 Page to handle error boundary for pages that do not exist */}
      <Route path='*' element={<Page404/>} />
    </Routes>
  )
}

export default App;