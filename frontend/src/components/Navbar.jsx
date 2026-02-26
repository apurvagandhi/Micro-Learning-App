import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar">
      <h2>MicroLearn</h2>

      {user && (
        <div className="nav-links">
          <Link to="/dashboard">Courses</Link>
          <Link to="/dashboard">My Progress</Link>
          <Link to="/dashboard">Community</Link>
          <button onClick={logout}>Logout</button>
        </div>
      )}
    </nav>
  );
}