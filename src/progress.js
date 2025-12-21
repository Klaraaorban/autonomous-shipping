// src/progress.js

import React from 'react';
import { motion } from "framer-motion";

export default function ProgressPage() {
    const cardStyle = {
        backgroundColor: "#1e293b",
        borderRadius: "16px",
        padding: "20px 24px",
        marginBottom: "16px",
        boxShadow: "0 5px 20px rgba(0,0,0,0.3)",
        transition: "transform 0.2s, box-shadow 0.2s",
    };

    const linkStyle = {
        color: "#06b6d4",
        fontWeight: "500",
        textDecoration: "none",
    };

    const cardHover = {
        whileHover: { scale: 1.03, boxShadow: "0 10px 25px rgba(0,0,0,0.5)" }
    };

    return (
        <div style={{ minHeight: "100vh", background: "#0f172a", color: "#cbd5e1", padding: "40px 20px", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                style={{ maxWidth: "900px", width: "100%" }}
            >
                <h2 style={{ fontSize: "2rem", fontWeight: "600", color: "#06b6d4", marginBottom: "24px", textAlign: "center" }}>
                    Project Presentations & Documents
                </h2>

                <motion.div {...cardHover} style={cardStyle}>
                    <a href="https://docs.google.com/presentation/d/1MDdGaZeodeDjGZvdQdsFH25OKKHdTL9Y/edit?usp=sharing&ouid=110491990081584974378&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer" style={linkStyle}>
                        Romania Intensive Week Review
                    </a>
                </motion.div>

                <motion.div {...cardHover} style={cardStyle}>
                    <a href="https://docs.google.com/presentation/d/1tHukvB91ETcqQXU-ffHa22ijADmMKJKm/edit?usp=sharing&ouid=110491990081584974378&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer" style={linkStyle}>
                        Progress Review Group #1
                    </a>
                </motion.div>

                <motion.div {...cardHover} style={cardStyle}>
                    <a href="https://docs.google.com/presentation/d/1bHMmGXpZwWe5ytOQM3WqIZbtoeWfzCQq/edit?usp=sharing&ouid=110491990081584974378&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer" style={linkStyle}>
                        Progress Review Group #2
                    </a>
                </motion.div>

                <motion.div {...cardHover} style={cardStyle}>
                    <a href="https://docs.google.com/presentation/d/14ZVo1S4Yjc6hLcA33viAIsW0BKRhE8b0tew96WCGNiI/edit?usp=sharing" target="_blank" rel="noopener noreferrer" style={linkStyle}>
                        ArctiCODE Kickoff
                    </a>
                </motion.div>

                <h2 style={{ fontSize: "1.75rem", fontWeight: "600", color: "#06b6d4", margin: "40px 0 8px" }}>
                    Collaboration & Location
                </h2>
                <p style={{ lineHeight: 1.8, marginBottom: "20px" }}>
                    This project is a collaboration between the <strong>University of Rostock in Germany</strong> and <strong>Babeș-Bolyai University in Romania</strong>. Students have a flexible hybrid environment, contributing from both Rostock and Cluj-Napoca.
                </p>
            </motion.div>
        </div>
    );
}
