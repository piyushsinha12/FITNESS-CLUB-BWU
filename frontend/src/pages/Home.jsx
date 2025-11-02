import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section style={styles.hero}>
      <div style={styles.overlay}>
        <h1 style={styles.title}>Transform Your Fitness Journey</h1>
        <p style={styles.subtitle}>
          Join our community and get access to professional trainers, modern
          plans, and personalized progress tracking!
        </p>
        <div style={styles.actions}>
          <Link to="/memberships" style={styles.buttonPrimary}>Explore Plans</Link>
          <Link to="/login" style={styles.buttonSecondary}>Login</Link>
        </div>
      </div>
    </section>
  );
};

const styles = {
  hero: {
    backgroundImage:
      "url('https://images.unsplash.com/photo-1594737625785-c598f0f2b14a')",
    backgroundSize: "cover",
    height: "100vh",
    color: "#fff",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.6)",
    padding: "40px",
    borderRadius: "10px",
    maxWidth: "700px",
  },
  title: {
    fontSize: "3rem",
    fontWeight: "bold",
    marginBottom: "1rem",
  },
  subtitle: {
    fontSize: "1.2rem",
    marginBottom: "2rem",
  },
  actions: {
    display: "flex",
    gap: "15px",
    justifyContent: "center",
  },
  buttonPrimary: {
    backgroundColor: "#00b894",
    color: "#fff",
    padding: "0.75rem 1.5rem",
    border: "none",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "bold",
  },
  buttonSecondary: {
    backgroundColor: "#0984e3",
    color: "#fff",
    padding: "0.75rem 1.5rem",
    border: "none",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "bold",
  },
};
export default Home;
