import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const location = useLocation();
  const { user } = useContext(AuthContext);

  const isActive = (path) => path === location.pathname;

  return (
    <nav style={styles.navbar}>
      <div style={styles.brand}>FITNESS CLUB</div>
      <div style={styles.links}>
        <Link
          to="/"
          style={{ ...styles.link, ...(isActive("/") ? styles.activeLink : {}) }}
        >
          Home
        </Link>

        <Link
          to="/memberships"
          style={{
            ...styles.link,
            ...(isActive("/memberships") ? styles.activeLink : {}),
          }}
        >
          Memberships
        </Link>

        {/* Show login/signup if not logged in */}
        {!user && (
          <>
            <Link
              to="/login"
              style={{
                ...styles.link,
                ...(isActive("/login") ? styles.activeLink : {}),
              }}
            >
              Login
            </Link>
            <Link
              to="/signup"
              style={{
                ...styles.link,
                ...(isActive("/signup") ? styles.activeLink : {}),
              }}
            >
              Sign Up
            </Link>
          </>
        )}

        {/* Role-based links */}
        {user?.role === "admin" && (
          <Link
            to="/admin-dashboard"
            style={{
              ...styles.link,
              ...(isActive("/admin-dashboard") ? styles.activeLink : {}),
            }}
          >
            Admin Dashboard
          </Link>
        )}

        {user?.role === "trainer" && (
          <Link
            to="/trainer-dashboard"
            style={{
              ...styles.link,
              ...(isActive("/trainer-dashboard") ? styles.activeLink : {}),
            }}
          >
            Trainer Dashboard
          </Link>
        )}

        {/* Profile visible to logged-in users */}
        {user && (
          <Link
            to="/profile"
            style={{
              ...styles.link,
              ...(isActive("/profile") ? styles.activeLink : {}),
            }}
          >
            Profile
          </Link>
        )}
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#1e272e",
    padding: "15px 50px",
    position: "sticky",
    top: 0,
    zIndex: 100,
    boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
  },
  brand: {
    fontSize: "24px",
    fontWeight: "700",
    color: "#f5f6fa",
    letterSpacing: "2px",
  },
  links: {
    display: "flex",
    gap: "25px",
  },
  link: {
    color: "#dcdde1",
    fontWeight: "500",
    textDecoration: "none",
    fontSize: "16px",
    padding: "6px 12px",
    borderRadius: "6px",
    transition: "background-color 0.3s ease, color 0.3s ease",
  },
  activeLink: {
    backgroundColor: "#718093",
    color: "#f5f6fa",
  },
};

export default Navbar;
