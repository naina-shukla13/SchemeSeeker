import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [passwordData, setPasswordData] = useState({ password: "", confirmPassword: "" });
  const [editing, setEditing] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) return navigate('/login');

        const res = await axios.get('http://localhost:5000/api/user/me', {
          headers: { Authorization: `Bearer ${token}` }
        });

        setUser(res.data);
        setFormData({
          name: res.data.name,
          email: res.data.email,
          phone: res.data.phone || ""
        });
      } catch (err) {
        console.error(err);
        navigate('/login');
      }
    };

    fetchUser();
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setPasswordData({ ...passwordData, [e.target.name]: e.target.value });
  };

  const handleUpdateProfile = async () => {
    try {
      const res = await axios.put(
        'http://localhost:5000/api/user/update',
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setUser(res.data);
      setEditing(false);
      alert("Profile updated successfully");
    } catch (error) {
      console.error("Failed to update profile", error);
      alert("Profile update failed");
    }
  };

  const handlePasswordUpdate = async () => {
    if (passwordData.password !== passwordData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const token = localStorage.getItem('token');
      await axios.put(
        'http://localhost:5000/api/user/update-password',
        { password: passwordData.password },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setPasswordData({ password: "", confirmPassword: "" });
      alert("Password updated successfully");
    } catch (err) {
      console.error("Password update failed", err);
      alert("Password update failed");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  if (!user) return <div className="loading">Loading...</div>;

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-heading">Welcome, {user.name}</h2>

      <div className="section-title">
        Personal Information
        <button className="edit-btn" onClick={() => setEditing(!editing)}>
          {editing ? "Cancel" : "Edit Profile"}
        </button>
      </div>

      <div className="form-group">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          disabled={!editing}
        />
      </div>

      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          disabled={!editing}
        />
      </div>

      <div className="form-group">
        <label>Phone:</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          disabled={!editing}
        />
      </div>

      {editing && (
        <button className="update-btn" onClick={handleUpdateProfile}>Save Profile</button>
      )}

      <div className="section-title">Change Password</div>

      <div className="form-group">
        <label>New Password:</label>
        <input
          type="password"
          name="password"
          value={passwordData.password}
          onChange={handlePasswordChange}
        />
      </div>

      <div className="form-group">
        <label>Confirm Password:</label>
        <input
          type="password"
          name="confirmPassword"
          value={passwordData.confirmPassword}
          onChange={handlePasswordChange}
        />
      </div>

      <div className="dashboard-buttons">
        <button className="update-btn" onClick={handlePasswordUpdate}>
          Update Password
        </button>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
