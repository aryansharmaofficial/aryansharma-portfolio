import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import ProjectsSection from '../components/ProjectsSection';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Hero />
            <About />
            <ProjectsSection />
        </motion.div>
    );
};

export default Home;
