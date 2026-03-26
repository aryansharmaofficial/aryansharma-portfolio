import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" style={{ padding: '6rem 4rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            {/* Placeholder Image */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div style={{
                    width: '100%',
                    height: '500px',
                    backgroundColor: '#222',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    <div style={{
                        width: '100%',
                        height: '100%',
                        backgroundImage: 'url("https://via.placeholder.com/600x800")', // Placeholder
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        filter: 'grayscale(100%) brightness(0.8)'
                    }} />
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <span style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px', color: '#888', display: 'block', marginBottom: '1rem' }}>About Me</span>
                <h2 style={{ fontSize: '3rem', marginBottom: '2rem', lineHeight: '1.1' }}>
                    UX Designer based in the <br /> digital world.
                </h2>
                <p style={{ color: '#aaa', lineHeight: '1.8', marginBottom: '3rem' }}>
                    I specialize in building digital products that are simple, beautiful, and easy to use. I believe in the power of design to solve problems and create meaningful connections between people and technology.
                </p>

                <div>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', borderBottom: '1px solid #333', paddingBottom: '0.5rem' }}>Experience</h3>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                        <span style={{ fontWeight: '600' }}>UX Designer</span>
                        <span style={{ color: '#888' }}>Onething Design</span>
                    </div>
                    <div style={{ fontSize: '0.9rem', color: '#666' }}>
                        5th May, 2025 - Present
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
