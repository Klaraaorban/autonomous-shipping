import { motion } from "framer-motion";
import { Waves } from "lucide-react";

export default function LandingPage() {
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
            <li>Work with underwater drones and sensors</li>
            <li>Hands-on experience in 3D mapping & ML</li>
            <li>Collaboration with international teams</li>
            <li>Flexible hybrid work setup</li>
            <li>Shape the future of polar navigation</li>
          </ul>
        </div>

      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{ marginTop: "80px", marginBottom: "80px", textAlign: "center" }}
      >
        <h3 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "16px" }}>Ready to dive in?</h3>
        <button
          style={buttonStyle}
          onMouseOver={e => e.currentTarget.style.backgroundColor = "#0ea5e9"}
          onMouseOut={e => e.currentTarget.style.backgroundColor = "#06b6d4"}
        >
          Apply Now
        </button>
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
