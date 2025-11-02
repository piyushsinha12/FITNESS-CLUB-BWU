import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Memberships from "./pages/Memberships";
import Login from "./pages/Login";
import Signup from "./pages/Signup"; // ✅ Added
import AdminDashboard from "./pages/AdminDashboard";
import TrainerDashboard from "./pages/TrainerDashboard";
import PrivateRoute from "./components/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
// This a ROute Path for Frontend

const App = () => (
  <AuthProvider>
    <Router>
      <Navbar />
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> {/* ✅ Added route */}
        <Route path="/" element={<Home />} />

        {/* Protected route for any logged-in user */}
        <Route element={<PrivateRoute />}>
          <Route path="/memberships" element={<Memberships />} />
          <Route path="/profile" element={<Profile />} />
        </Route>

        {/* Protected route for admin-only */}
        <Route element={<PrivateRoute allowedRoles={["admin"]} />}>
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
        </Route>

        {/* Protected route for trainer-only */}
        <Route element={<PrivateRoute allowedRoles={["trainer"]} />}>
          <Route path="/trainer-dashboard" element={<TrainerDashboard />} />
        </Route>

        {/* Fallback unauthorized */}
        <Route path="/unauthorized" element={<div>Unauthorized Access</div>} />
      </Routes>
    </Router>
  </AuthProvider>
);

export default App;
