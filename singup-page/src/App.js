import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from './components/Details';
import Error from './components/Error';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';

function App() {
  return (
    <>
       
      <BrowserRouter>    
      <Header/>  
      <Routes>
             <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/details" element={<Details />} />
        <Route path="*" element={<Error />} />
      </Routes>
      </BrowserRouter>
     

    </>
  );
}

export default App;
