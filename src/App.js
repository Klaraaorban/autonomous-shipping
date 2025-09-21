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
          Autonomous Shipping
        </h1>
        <p style={{ fontSize: "1.125rem", color: "#cbd5e1" }}>
          Join us in designing autonomous underwater drones that can operate in arctic environments and map the hidden world below. By exploring places humans can’t reach, our purpose is to reveal the shape and movement of the ice, creating a new way of understanding the viability of polar routes in the context of autonomous shipping.
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
          <p style={{ color: "#cbd5e1", marginTop: "16px" }}>Experience with the following is a plus:</p>
          <ul style={{ color: "#cbd5e1", marginTop: "12px", listStyle: "disc inside", lineHeight: "1.6" }}>
            <li>Unity or other simulation tools</li>
            <li>Machine learning</li>
            <li>Working with sensors</li>
            <li>Robotics and control systems</li>
          </ul>
        </div>

        <div style={cardStyle}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "600", color: "#06b6d4", marginBottom: "16px" }}>What We Offer:</h2>
          <p style={{ color: "#cbd5e1" }}>By joining our team, you’ll benefit from:</p>
          <ul style={{ color: "#cbd5e1", marginTop: "12px", listStyle: "disc inside", lineHeight: "1.6" }}>
            <li>Hands-on experience with marine robotics</li>
            <li>Opportunities to contribute to a less explored research area</li>
            <li>A collaborative, innovation-driven environment</li>
            <li>Access to simulation tools, hardware, and resources</li>
            <li>Opportunities for long-term involvement as the project grows</li>
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
