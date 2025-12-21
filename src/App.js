// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { motion } from "framer-motion";
import { Waves } from "lucide-react";
// import { HashRouter as Router, Route, Routes } from 'react-router-dom';

// The imported ProgressPage is what the button will link to
import ProgressPage from './progress'; // Assuming your details file is named 'src/progress.js'

// --- START: Your Landing Page Content ---
function LandingContent() {
    const cardStyle = {
        backgroundColor: "#1e293b",
        border: "1px solid rgba(6, 182, 212, 0.3)",
        borderRadius: "16px",
        padding: "24px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.4)",
    };

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

    return (
        <div style={{ minHeight: "100vh", background: "linear-gradient(#0f172a, #1e293b, #0f172a)", color: "white", display: "flex", flexDirection: "column", alignItems: "center" }}>
            
            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                style={{ textAlign: "center", marginTop: "80px", maxWidth: "700px" }}
            >
                <h1 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "16px", display: "flex", justifyContent: "center", alignItems: "center", gap: "12px" }}>
                    <Waves size={48} color="#06b6d4" />
                    ArctiCODE
                </h1>
                <h2
                    style={{
                        fontSize: "1.5rem",
                        fontWeight: "500",
                        color: "#06b6d4",
                        marginBottom: "16px",
                        textAlign: "center",
                    }}
                >
                    Underwater Ice Mapping for Safe Polar Navigation
                </h2>
                <p style={{ fontSize: "1.125rem", color: "#cbd5e1" }}>
                    Climate change is rapidly reshaping the Arctic, opening new shipping routes but also exposing ships to hidden risks. Ice blocks beneath the surface shift constantly, making navigation unpredictable and dangerous.
                    Our project develops autonomous underwater drones equipped with advanced sensors to map these submerged ice structures in 3D. By turning real-world data into predictive models, we aim to make polar navigation safer, smarter, and more sustainable.
                </p>
            </motion.div>

            {/* Open Position Section */}
            {/*
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                style={{ marginTop: "80px", maxWidth: "1000px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px", padding: "16px" }}
            >
                <div style={cardStyle}>
                    <h2 style={{ fontSize: "1.5rem", fontWeight: "600", color: "#06b6d4", marginBottom: "16px" }}>We’re Looking For:</h2>
                    <p style={{ color: "#cbd5e1" }}>
                        We’re looking for a passionate and motivated <span style={{ color: "#06b6d4", fontWeight: "500" }}>student</span> who is team-oriented, passionate about real-world innovation, and eager to learn.
                    </p>
                    <p style={{ color: "#cbd5e1", marginTop: "16px" }}>Competences awaited:</p>
                    <ul style={{ color: "#cbd5e1", marginTop: "12px", listStyle: "disc inside", lineHeight: "1.6" }}>
                        <li>Strong knowledge in Python</li>
                        <li>Experience in Machine Learning</li>
                        <li>Good communication skills</li>
                        <li>Ability to take initiatives</li>
                        <li>Adaptability in group projects</li>
                        <li>Fluency in both German and English</li>
                    </ul>
                </div>

                <div style={cardStyle}>
                    <h2 style={{ fontSize: "1.5rem", fontWeight: "600", color: "#06b6d4", marginBottom: "16px" }}>What We Offer:</h2>
                    <p style={{ color: "#cbd5e1" }}>
                        By joining our team, you’ll gain hands-on experience and contribute to real-world polar research:
                    </p>
                    <p style={{ color: "#cbd5e1", marginTop: "16px" }}>Opportunities offered:</p>
                    <ul style={{ color: "#cbd5e1", marginTop: "12px", listStyle: "disc inside", lineHeight: "1.6" }}>
                        <li>Work with autonomous underwater drones and sensors </li>
                        <li>Hands-on experience in 3D mapping & ML</li>
                        <li>Collaboration with international teams</li>
                        <li>Flexible hybrid work setup</li>
                        <li>Shape the future of polar navigation</li>
                    </ul>
                </div>

          </motion.div> */}

            {/* Project Image */}
            <div style={{ 
                width: "100%", 
                maxWidth: "900px", 
                margin: "40px 0", 
                overflow: "hidden", 
                borderRadius: "24px", 
                boxShadow: "0 10px 30px rgba(0,0,0,0.4)"
            }}>
                <img 
                    // FIX 1: Use PUBLIC_URL for correct path in subdirectory
                    src={process.env.PUBLIC_URL + "/drone.png"} 
                    alt="Underwater Ice Mapping Drone" 
                    style={{ 
                        width: "100%", 
                        height: "auto", 
                        display: "block",
                        borderRadius: "24px"
                    }} 
                />
            </div>


            {/* Additional Project Details */}
            <div style={{ maxWidth: "900px", marginTop: "48px", padding: "16px", color: "#cbd5e1", lineHeight: "1.7" }}>
                <h3 style={{ fontSize: "1.75rem", fontWeight: "600", color: "#06b6d4", marginBottom: "16px" }}>
                    About the Project
                </h3>
                <p>
                    Maritime technology has advanced rapidly, making progress in polar navigation both urgent and important. Global warming is opening routes previously blocked by ice, offering the potential to reduce travel time, costs, and fuel consumption by up to 40%. 
                </p>
                <p>
                    Navigating polar seas is challenging due to numerous ice blocks and constantly shifting conditions, which can damage ship hulls and make routes unpredictable. Our solution uses autonomous underwater drones equipped with multibeam sonar and other sensors to map submerged ice structures in 3D.
                </p>
                <p>
                    The data collected will generate high-resolution maps and predictive models to improve real-time navigation safety, enhance efficiency, and provide a foundation for future research in autonomous polar navigation.
                </p>
                <p>
                    The project is a collaboration between the University of Rostock in Germany and Babeș-Bolyai University in Romania, offering students a hybrid work environment with opportunities in both Rostock and Cluj-Napoca.
                </p>
            </div>


            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                style={{ marginTop: "80px", marginBottom: "80px", textAlign: "center" }}
            >
                <h3 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "16px" }}>Ready to find out more?</h3>
                <button
                    style={buttonStyle}
                    onMouseOver={e => e.currentTarget.style.backgroundColor = "#0ea5e9"}
                    onMouseOut={e => e.currentTarget.style.backgroundColor = "#06b6d4"}
                    // FIX 2: Correct the path to include the subdirectory and correct file name
                    onClick={() => window.location.href = "/autonomous-shipping/progress"}
                >
                    YES
                </button>

                {/* For More Information */}
                <p style={{ marginTop: "24px", color: "#94a3b8", fontSize: "0.95rem", fontStyle: "italic" }}>
                    For more information, contact:{" "}
                    <a 
                        href="mailto:klara.orban@stud.ubbcluj.ro" 
                        style={{ color: "#06b6d4", fontWeight: "500", textDecoration: "underline" }}
                    >
                        Orban Klara
                    </a>
                </p>
            </motion.div>


            {/* Subtle Animated Background */}
            <motion.div
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                style={{
                    position: "fixed",
                    inset: 0,
                    zIndex: -10,
                    background: "radial-gradient(circle at center, rgba(34,211,238,0.15), transparent)",
                }}
            />
        </div>
    );
}
// --- END: Your Landing Page Content ---

function App() {
  return (
    <Router basename="/autonomous-shipping"> 
      <Routes>
        {/* If the URL is just /autonomous-shipping, show the landing content */}
        <Route path="/" element={<LandingContent />} />
        
        {/* If the URL is /autonomous-shipping/progress, show the details page */}
        <Route path="/progress" element={<ProgressPage />} />
      </Routes>
    </Router>
  );
}

export default App;