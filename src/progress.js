// src/progress.js

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"; 

export default function ProgressPage() {
    const buttonStyle = {
        backgroundColor: "#06b6d4",
        color: "#1e293b",
        fontWeight: "bold",
        padding: "12px 24px",
        borderRadius: "24px",
        fontSize: "1.125rem",
        cursor: "pointer",
        border: "none",
        boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
        transition: "background-color 0.3s",
    };
    
    const linkTextStyle = {
        color: "#06b6d4", 
        fontWeight: "500", 
        textDecoration: "underline",
        display: "block",
        marginBottom: "8px"
    };

    return (
        <div style={{ minHeight: "100vh", background: "#0f172a", color: "white", padding: "40px", lineHeight: "1.7" }}>
            <h1 style={{ color: "#06b6d4", marginBottom: "20px", fontSize: "2.5rem" }}>
                ArctiCODE Project Details
            </h1>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                style={{ maxWidth: "900px", marginTop: "48px", padding: "16px", color: "#cbd5e1", lineHeight: "1.7" }}
            >
                <h3 style={{ fontSize: "1.75rem", fontWeight: "600", color: "#06b6d4", marginBottom: "16px" }}>
                    Presentations and Descriptions
                </h3>
                <p style={{ marginBottom: "16px" }}>
                    Here are links to our public documents and presentations outlining the project's scope, technology, and goals:
                </p>
                
                <ul style={{ listStyle: "none", padding: 0 }}>
                    <li>
                        <a href="https://docs.google.com/presentation/d/1MDdGaZeodeDjGZvdQdsFH25OKKHdTL9Y/edit?usp=sharing&ouid=110491990081584974378&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer" style={linkTextStyle}>
                            Romania Intensve Week Review
                        </a>
                    </li>
                    <li>
                        <a href="https://docs.google.com/presentation/d/1tHukvB91ETcqQXU-ffHa22ijADmMKJKm/edit?usp=sharing&ouid=110491990081584974378&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer" style={linkTextStyle}>
                            Progress Review Group  #1
                        </a>
                    </li>
                    <li>
                        <a href="https://docs.google.com/presentation/d/1bHMmGXpZwWe5ytOQM3WqIZbtoeWfzCQq/edit?usp=sharing&ouid=110491990081584974378&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer" style={linkTextStyle}>
                            Progress Review Group #2
                        </a>
                    </li>
                    <li>
                        <a href="https://docs.google.com/presentation/d/14ZVo1S4Yjc6hLcA33viAIsW0BKRhE8b0tew96WCGNiI/edit?usp=sharing" target="_blank" rel="noopener noreferrer" style={linkTextStyle}>
                            ArctiCode Kickoff
                        </a>
                    </li>
                </ul>
            </motion.div>
            
            <h2 style={{ color: "#06b6d4", marginTop: "30px", marginBottom: "15px", fontSize: "1.75rem" }}>
                Collaboration and Location
            </h2>
            <p style={{ color: "#cbd5e1" }}>
                The project is a collaboration between the **University of Rostock in Germany** and **Babeș-Bolyai University in Romania**. We offer students a flexible hybrid work environment with opportunities to contribute from both Rostock and Cluj-Napoca.
            </p>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                style={{ marginTop: "60px", textAlign: "center" }}
            >
                <Link to="/" style={{ textDecoration: 'none' }}> 
                    <button
                        style={buttonStyle}
                        onMouseOver={e => e.currentTarget.style.backgroundColor = "#0ea5e9"}
                        onMouseOut={e => e.currentTarget.style.backgroundColor = "#06b6d4"}
                    >
                        ← GO BACK
                    </button>
                </Link>
            </motion.div>

        </div>
    );
}