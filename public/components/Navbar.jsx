import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
    return (
        <nav style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '2rem 4rem',
            position: 'fixed',
            width: '100%',
            top: 0,
            zIndex: 100,
            mixBlendMode: 'difference',
            color: '#fff'
        }}>
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Link to="/" style={{ fontSize: '1.2rem', fontWeight: 'bold', letterSpacing: '1px' }}>
                    ARYAN SHARMA
                </Link>
            </motion.div>

            <ul style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                {['Home', 'About', 'Projects'].map((item, index) => (
                    <motion.li
                        key={item}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} style={{ fontSize: '0.9rem', textTransform: 'uppercase' }}>
                            {item}
                        </Link>
                    </motion.li>
                ))}
            </ul>

            <div style={{ display: 'flex', gap: '1.5rem' }}>
                <motion.a
                    href="/resume.pdf"
                    target="_blank"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    style={{ fontSize: '0.9rem', borderBottom: '1px solid white' }}
                >
                    View Resume
                </motion.a>
                <motion.a
                    href="mailto:contact@aryansharma.com"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    style={{
                        fontSize: '0.9rem',
                        background: '#fff',
                        color: '#000',
                        padding: '0.5rem 1rem',
                        borderRadius: '20px',
                        fontWeight: '600'
                    }}
                >
                    Get in Touch
                </motion.a>
            </div>
        </nav>
    );
};

export default Navbar;
