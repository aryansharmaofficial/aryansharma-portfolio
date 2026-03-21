import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Home from './pages/Home';
import ProjectsPage from './pages/ProjectsPage';

function App() {
    return (
        <Router>
            <CustomCursor />
            <Navbar />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<ProjectsPage />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
}

export default App;
