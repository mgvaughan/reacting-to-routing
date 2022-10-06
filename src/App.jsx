import { BrowserRouter, Routes, Route } from 'react-router-dom';

import React from 'react'
import Navbar from './components/navbar';
import Home from './pages/Home';
import Films from './pages/Films';
import FilmDetails from './pages/FilmDetails'
import People from './pages/People';
import PersonDetails from './pages/PersonDetails';

const App = () => {

    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/films" element={<Films />} />
                <Route path="/films/:filmid" element={<FilmDetails />} />
                <Route path="/people" element={<People />} />
                <Route path="/people/:personid" element={<PersonDetails />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;

