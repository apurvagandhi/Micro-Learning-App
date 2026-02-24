import React, { useState } from "react";
import "./App.css";
import { Shield, Users, User } from 'lucide-react';
export default function App() {
  const [selectedRole, setSelectedRole] = useState(null);

  const openModal = (role) => {
    setSelectedRole(role);
  };

  const closeModal = () => {
    setSelectedRole(null);
  };

  return (
    <div>
       {/* Navbar */}
      <div className="navbar">
  <span className="navbar-title">MicroLearn</span>
</div>
      <div className="container">
        <div className="badge">
          OPEN SOURCE • Built by NC State Students
        </div>

        <div className="title">MicroLearn</div>

        <div className="subtitle">
          A collaborative micro-learning platform for bite-sized,
          multi-modal learning experiences
        </div>

       <div className="features">
    <span className="feature text">Text Lessons</span>
    <span className="feature visual">Visual Learning</span>
    <span className="feature audio">Audio Content</span>
    </div>

        <div className="role-title">Hello! I am a:</div>

        <div className="card-grid">
          <div className="card">
            <div className ="usericon">
              <User size={40} color="#ffffff"/>
            </div>
            <h3>User</h3>
            <p>Browse and learn from courses</p>
            <button
              className="btn btn-user"
              onClick={() => openModal("User")}
            >
              Continue as User
            </button>
          </div>

          <div className="card">
            <div className ="contributoricon">
              <Users size={40} color="#ffffff"/>
            </div>
            <h3>Contributor</h3>
            <p>Create and manage your own courses</p>
            <button
              className="btn btn-contributor"
              onClick={() => openModal("Contributor")}
            >
              Continue as Contributor
            </button>
          </div>

          <div className="card">
            <div className = "adminicon">
              <Shield size={40} color="#ffffff"/>
            </div>
            <h3>Admin</h3>
            <p>Manage all courses and users</p>
            <button
              className="btn btn-admin"
              onClick={() => openModal("Admin")}
            >
              Continue as Admin
            </button>
          </div>
        </div>

        <div className="stats">
          <div className="stat">
            <h2>14</h2>
            <p>CS Students</p>
          </div>
          <div className="stat">
            <h2>14</h2>
            <p>Days of Development</p>
          </div>
          <div className="stat">
            <h2>100%</h2>
            <p>Open Source</p>
          </div>
        </div>

        <div className="footer">
          Built in partnership with NC State InSPIRE program
        </div>
      </div>

      {/* ===== Modal ===== */}
      {selectedRole && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className="modal"
            onClick={(e) => e.stopPropagation()}
          >
            <h3>Welcome to MicroLearn</h3>
            <p>Signing in as: <strong>{selectedRole}</strong></p>
            <h3 className = "login-email">
              Email
            </h3>
            <input type="email" placeholder="your.email@gmail.com" />
             <h3 className = "login-password">
              Password
            </h3>
            <input type="password" />

            <button>Sign In</button>

            <button
              style={{
                marginTop: "10px",
                background: "#e5e7eb",
                color: "#111",
              }}
              onClick={closeModal}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

