import React, { Component } from 'react';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import AnimeList from './pages/AnimeList';
import ContactUs from './pages/ContactUs';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Movies from './pages/Movies';
import NewSeason from './pages/NewSeason';
import Error from './pages/Error';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header'

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    return (
        <Router>
            <Navbar />
            <div className='rowC'>
                <Header />
            </div>
            <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<AboutUs />} />
        <Route path='animeList' element={<AnimeList />} />
        <Route path='contactUs' element={<ContactUs />} />
        <Route path='login' element={<Login />} />
        <Route path='signUp' element={<SignUp />} />
        <Route path='movies' element={<Movies />} />
        <Route path='newSeason' element={<NewSeason />} />
        <Route path='*' element={<Error />} />
    
      </Routes>
    </Router>
    );
}

export default App;