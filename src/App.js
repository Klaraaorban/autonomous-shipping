import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
import { Waves } from "lucide-react";
import ProgressPage from './progress';

function LandingContent() {
    const [showProgress, setShowProgress] = useState(false);

    const buttonStyle = {
        backgroundColor: "#06b6d4", color: "#1e293b", fontWeight: "bold", padding: "12px 24px", borderRadius: "24px", fontSize: "1.125rem", cursor: "pointer", border: "none", boxShadow: "0 5px 15px rgba(0,0,0,0.3)", transition: "background-color 0.3s",
    };

    return (
        <div style={{ minHeight: "100vh", background: "linear-gradient(#0f172a, #1e293b, #0f172a)", color: "white", display: "flex", flexDirection: "column", alignItems: "center", padding: "0 20px" }}>
            
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} style={{ textAlign: "center", marginTop: "40px", maxWidth: "800px" }}>
                <h1 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "8px", display: "flex", justifyContent: "center", alignItems: "center", gap: "12px" }}>
                    <Waves size={48} color="#06b6d4" /> ArctiCODE
                </h1>
                <div style={{ margin: "20px auto", maxWidth: "800px", padding: "16px 0", borderTop: "1px solid rgba(6, 182, 212, 0.2)", borderBottom: "1px solid rgba(6, 182, 212, 0.2)", textAlign: "center" }}>
                    <p style={{ fontSize: "1.25rem", color: "#e2e8f0", margin: 0, lineHeight: "1.6", fontStyle: "italic", fontWeight: "300", letterSpacing: "0.02em" }}>
                        "Making the invisible visible: Advancing safety and precision in polar environments through accurate 3D mapping of submerged ice."
                    </p>
                </div>
            </motion.div>

            <div style={{ width: "100%", maxWidth: "900px", margin: "20px 0", overflow: "hidden", borderRadius: "24px", boxShadow: "0 10px 30px rgba(0,0,0,0.4)" }}>
                <img src={process.env.PUBLIC_URL + "/drone.png"} alt="Drone" style={{ width: "100%", height: "auto", display: "block" }} />
            </div>

            <div style={{ maxWidth: "900px", width: "100%", textAlign: "left" }}>
                <h2 style={{ fontSize: "2rem", color: "#06b6d4", marginBottom: "12px" }}>3D Mapping of Submerged Arctic Ice</h2>
                <p style={{ fontSize: "1.125rem", color: "#cbd5e1", lineHeight: "1.7", marginBottom: "24px" }}>
                    Polar environments are changing rapidly, increasing uncertainty for vessels, researchers, and infrastructure operating in icy waters. While surface ice can often be observed from above, submerged ice formations remain difficult to detect and poorly mapped, despite posing significant safety risks. ArctiCODE is a student-led research project focused on making these hidden structures visible through reliable 3D reconstruction techniques.
                </p>

                <h2 style={{ fontSize: "2rem", color: "#06b6d4", marginBottom: "12px" }}>The Challenge</h2>
                <p style={{ fontSize: "1.125rem", color: "#cbd5e1", lineHeight: "1.7", marginBottom: "24px" }}>
                    Submerged ice is one of the most challenging hazards in polar waters. Ice blocks beneath the surface are difficult to observe, constantly changing, and largely invisible to conventional monitoring systems. Accurate knowledge of underwater ice geometry is essential for improving safety, supporting scientific research, and enabling more reliable polar operations.
                </p>

                <h2 style={{ fontSize: "2rem", color: "#06b6d4", marginBottom: "12px" }}>Our Approach</h2>
                <p style={{ fontSize: "1.125rem", marginBottom: "12px" }}>ArctiCODE addresses this challenge by focusing on the mapping problem: reconstructing detailed 3D models of submerged ice using real-world sensor data. We use information collected by autonomous underwater vehicles equipped with:</p>
                <ul style={{ fontSize: "1.125rem", paddingLeft: "20px", marginBottom: "24px" }}>
                    <li>Multibeam sonar for precise distance and shape measurements</li>
                    <li>Visual sensors to complement acoustic data</li>
                    <li>Onboard navigation systems for spatial alignment</li>
                </ul>

                <h2 style={{ fontSize: "2rem", color: "#06b6d4", marginBottom: "12px" }}>Current Status & Focus</h2>
                <p style={{ fontSize: "1.125rem", marginBottom: "24px" }}>This project phase concentrates exclusively on mapping and reconstruction. Our current work investigates: methods for fusing sonar and visual data, robust 3D reconstruction techniques in low-visibility environments, and validation of reconstructed ice geometry.</p>

                <h2 style={{ fontSize: "2rem", color: "#06b6d4", marginBottom: "12px" }}>Future Work</h2>
                <p style={{ fontSize: "1.125rem", marginBottom: "40px" }}>Building on reliable 3D ice maps, future research directions include: real-time integration with autonomous systems, predictive modeling of ice movement, and decision-support tools for safer polar navigation.</p>
            </div>

            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} style={{ marginBottom: "80px", textAlign: "center", width: "100%", maxWidth: "900px" }}>
                <button style={buttonStyle} onMouseOver={e => e.currentTarget.style.backgroundColor = "#0ea5e9"} onMouseOut={e => e.currentTarget.style.backgroundColor = "#06b6d4"} onClick={() => setShowProgress(!showProgress)}>
                    {showProgress ? "CLOSE" : "VIEW DETAILED PROGRESS"}
                </button>
                <AnimatePresence>
                    {showProgress && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.5 }} style={{ overflow: "hidden", marginTop: "24px", borderRadius: "16px", backgroundColor: "#1e293b", padding: "24px", textAlign: "left" }}>
                            <ProgressPage />
                        </motion.div>
                    )}
                </AnimatePresence>
                <p style={{ marginTop: "40px", color: "#94a3b8", fontSize: "0.95rem", fontStyle: "italic" }}>
                    For more information, contact: <a href="mailto:klara.orban@stud.ubbcluj.ro" style={{ color: "#06b6d4", textDecoration: "underline" }}>Orban Klara</a>
                </p>
            </motion.div>

            <div style={{ position: "fixed", inset: 0, zIndex: -10, background: "radial-gradient(circle at center, rgba(34,211,238,0.1), transparent)" }} />
        </div>
    );
}

function App() {
  return (
    <Router basename="/autonomous-shipping"> 
      <Routes>
        <Route path="/" element={<LandingContent />} />
        <Route path="/progress" element={<ProgressPage />} />
      </Routes>
    </Router>
  );
}

export default App;