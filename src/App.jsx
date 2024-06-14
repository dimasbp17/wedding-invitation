import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Navbar from './components/Navbar';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={<Home />}
                    />
                    <Route
                        path="/navbar"
                        element={<Navbar />}
                    />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
