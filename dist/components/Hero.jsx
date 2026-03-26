import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center', // Center vertically
            padding: '0 4rem', // Aligned with Navbar padding
            position: 'relative'
        }}>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h1 style={{
                    fontSize: 'clamp(3rem, 8vw, 8rem)',
                    lineHeight: '0.9',
                    fontWeight: '300', // Use a lighter weight for a cleaner look
                    marginBottom: '2rem',
                    letterSpacing: '-0.02em'
                }}>
                    Hi, I am <br />
                    <span style={{ fontWeight: '600' }}>Aryan Sharma</span>
                </h1>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                style={{ maxWidth: '600px' }}
            >
                <p style={{
                    fontSize: '1.2rem',
                    lineHeight: '1.6',
                    color: '#aaa',
                    marginBottom: '3rem'
                }}>
                    A <span style={{ color: '#fff' }}>UX Designer</span> crafting digital experiences that are minimal, intuitive, and visually compelling. Based in the digital realm.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
            >
                {/* Scroll indicator or additional content could go here */}
                <div style={{ position: 'absolute', bottom: '2rem', left: '4rem', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px', opacity: 0.6 }}>
                    Scroll to explore
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
