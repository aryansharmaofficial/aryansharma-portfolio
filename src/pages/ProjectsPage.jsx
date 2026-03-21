import React from 'react';
import { motion } from 'framer-motion';

const allProjects = [
    {
        id: 1,
        title: "E-Commerce Redesign",
        category: "UX/UI Design",
        image: "https://via.placeholder.com/600x400/333333/ffffff?text=Project+1",
    },
    {
        id: 2,
        title: "Finance App",
        category: "Mobile Design",
        image: "https://via.placeholder.com/600x400/444444/ffffff?text=Project+2",
    },
    {
        id: 3,
        title: "Travel Dashboard",
        category: "Web Application",
        image: "https://via.placeholder.com/600x400/555555/ffffff?text=Project+3",
    },
    {
        id: 4,
        title: "Health Tracker",
        category: "Mobile App",
        image: "https://via.placeholder.com/600x400/222222/ffffff?text=Project+4",
    },
    {
        id: 5,
        title: "SaaS Platform",
        category: "Web Design",
        image: "https://via.placeholder.com/600x400/333333/ffffff?text=Project+5",
    },
];

const ProjectsPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{ paddingTop: '8rem', paddingBottom: '4rem', paddingLeft: '4rem', paddingRight: '4rem' }}
        >
            <h1 style={{ fontSize: '4rem', marginBottom: '4rem' }}>All Projects</h1>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '4rem'
            }}>
                {allProjects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        style={{ cursor: 'pointer' }}
                    >
                        <div style={{
                            width: '100%',
                            aspectRatio: '16/9',
                            backgroundColor: '#1a1a1a',
                            marginBottom: '1.5rem',
                            overflow: 'hidden',
                            position: 'relative'
                        }}>
                            <div
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    backgroundImage: `url(${project.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    transition: 'transform 0.5s ease',
                                }}
                                className="project-image-hover"
                            />
                            {/* Simplified noise for list view */}
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' opacity=\'0.15\'/%3E%3C/svg%3E")',
                                opacity: 0.3,
                                pointerEvents: 'none'
                            }} />
                        </div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{project.title}</h3>
                        <p style={{ color: '#888', fontSize: '1rem' }}>{project.category}</p>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default ProjectsPage;
