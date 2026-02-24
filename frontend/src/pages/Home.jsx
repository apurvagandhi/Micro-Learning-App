import { useNavigate } from "react-router-dom";
import { Shield, Users, User } from 'lucide-react';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <div className="container">

        <div className="badge">
          OPEN SOURCE · Built by NC State Students
        </div>

        <h1 className="title">MicroLearn</h1>

        <p className="subtitle">
          A collaborative micro-learning platform for bite-sized, multi-modal learning experiences
        </p>

        <div className="modes">
          <span className="dot green"></span> Text Lessons
          <span className="dot blue"></span> Visual Learning
          <span className="dot purple"></span> Audio Content
        </div>

        <h2 className="hello">Hello! I am a:</h2>

        <div className="card-grid">

          <div className="card">
            <div className="usericon">
              <User size={48} color="black" />
            </div>
            <h3>User</h3>
            <p>Browse and learn from courses</p>
            <button onClick={() => navigate("/login/user")}>
              Continue as User
            </button>
          </div>

          <div className="card">
            <div className="contributoricon">
            <Users size={40} color = "black" />
            </div>
            <h3>Contributor</h3>
            <p>Create and manage your own courses</p>
            <button onClick={() => navigate("/login/contributor")}>
              Continue as Contributor
            </button>
          </div>

          <div className="card">
            <div className="adminicon">
              <Shield size={40} color = "black" />
            </div>
            <h3>Admin</h3>
            <p>Manage all courses and users</p>
            <button onClick={() => navigate("/login/admin")}>
              Continue as Admin
            </button>
          </div>

        </div>

        <div className="stats-panel">
          <div>
            <h3>14</h3>
            <p>CS Students</p>
          </div>
          <div>
            <h3>14</h3>
            <p>Days of Development</p>
          </div>
          <div>
            <h3>100%</h3>
            <p>Open Source</p>
          </div>
        </div>

        <p className="footer">
          Built in partnership with NC State InSPIRE program
        </p>

      </div>
    </div>
  );
}