import React from 'react';
import { motion } from 'framer-motion';

const projects = [
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
];

const ProjectCard = ({ project, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        viewport={{ once: true }}
        style={{ position: 'relative', cursor: 'pointer' }}
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
                className="project-image"
            />
            {/* Noise overlay for image */}
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
);

const Projects = () => {
    return (
        <section id="projects" style={{ padding: '6rem 4rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem' }}>
                <h2 style={{ fontSize: '3rem' }}>Selected Works</h2>
                <a href="/projects" style={{ fontSize: '1rem', borderBottom: '1px solid #fff', paddingBottom: '2px' }}>View All Projects</a>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem'
            }}>
                {projects.map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
