import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [cursorVariant, setCursorVariant] = useState("default");

    useEffect(() => {
        const mouseMove = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });

            const target = e.target;
            // Check if hovering over interactive elements
            const isHoverable = target.closest('a') || target.closest('button') || target.closest('.project-image');
            setCursorVariant(isHoverable ? "hover" : "default");
        };

        window.addEventListener("mousemove", mouseMove);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
        };
    }, []);

    const variants = {
        default: {
            x: mousePosition.x - 10,
            y: mousePosition.y - 10,
            height: 20,
            width: 20,
            backgroundColor: "white",
            mixBlendMode: "difference",
            transition: {
                type: "spring",
                stiffness: 500,
                damping: 28,
                mass: 0.5
            }
        },
        hover: {
            height: 64,
            width: 64,
            x: mousePosition.x - 32,
            y: mousePosition.y - 32,
            backgroundColor: "white",
            mixBlendMode: "difference",
            transition: {
                type: "spring",
                stiffness: 500,
                damping: 28,
                mass: 0.5
            }
        }
    };

    return (
        <motion.div
            className="cursor"
            variants={variants}
            animate={cursorVariant}
            style={{
                borderRadius: "50%",
                position: "fixed",
                top: 0,
                left: 0,
                pointerEvents: "none",
                zIndex: 9999,
            }}
        />
    );
};

export default CustomCursor;
