import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            padding: '4rem 4rem',
            borderTop: '1px solid #222',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '4rem'
        }}>
            <div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Aryan Sharma</h3>
                <p style={{ color: '#666', fontSize: '0.9rem' }}>&copy; 2026</p>
            </div>

            <div style={{ display: 'flex', gap: '2rem' }}>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: '#aaa', transition: 'color 0.3s' }}>Instagram</a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: '#aaa', transition: 'color 0.3s' }}>LinkedIn</a>
                <a href="mailto:contact@aryansharma.com" style={{ color: '#aaa', transition: 'color 0.3s' }}>Mail</a>
            </div>
        </footer>
    );
};

export default Footer;
