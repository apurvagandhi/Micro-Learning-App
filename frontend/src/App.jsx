import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/variables.css';
import AdminDashboard from './pages/AdminDashboard';
import ContributorDashboard from './pages/ContributorDashboard';
import UserDashboard from './pages/UserDashboard';
import Home from './pages/Home';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/contributor-dashboard" element={<ContributorDashboard />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}