import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/admin.css';

const AdminPanel = () => {
  const [scheme, setScheme] = useState({
    title: '',
    ministry: '',
    description: '',
    eligibility: '',
    state: '',
    incomeLimit: '',
  });

  const [schemes, setSchemes] = useState([]);
  const [editingId, setEditingId] = useState(null); // null = Add Mode

  const token = localStorage.getItem('token');

  const fetchSchemes = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/schemes');
      setSchemes(res.data);
    } catch (err) {
      console.error('Error fetching schemes:', err);
    }
  };

  useEffect(() => {
    fetchSchemes();
  }, []);

  const handleChange = (e) => {
    setScheme({ ...scheme, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        // Update mode
        await axios.put(`http://localhost:5000/api/schemes/${editingId}`, scheme, {
          headers: { Authorization: `Bearer ${token}` },
        });
        alert('Scheme updated successfully!');
      } else {
        // Add mode
        await axios.post('http://localhost:5000/api/schemes', scheme, {
          headers: { Authorization: `Bearer ${token}` },
        });
        alert('Scheme added successfully!');
      }

      setScheme({
        title: '',
        ministry: '',
        description: '',
        eligibility: '',
        state: '',
        incomeLimit: '',
      });
      setEditingId(null);
      fetchSchemes(); // refresh list
    } catch (err) {
      alert('Error while submitting');
      console.error(err);
    }
  };

  const handleEdit = (id) => {
    const selected = schemes.find((s) => s._id === id);
    setScheme(selected);
    setEditingId(id);
    window.scrollTo(0, 0); // Scroll to form
  };

  const handleDelete = async (id) => {
    const confirm = window.confirm('Are you sure you want to delete this scheme?');
    if (!confirm) return;

    try {
      await axios.delete(`http://localhost:5000/api/schemes/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert('Scheme deleted');
      fetchSchemes();
    } catch (err) {
      console.error(err);
      alert('Error deleting scheme');
    }
  };

  return (
    <div className="admin-panel">
      <h2>{editingId ? 'Update Scheme' : 'Add New Scheme'}</h2>
      <form onSubmit={handleSubmit} className="admin-form">
        <input type="text" name="title" value={scheme.title} onChange={handleChange} placeholder="Scheme Title" required />
        <input type="text" name="ministry" value={scheme.ministry} onChange={handleChange} placeholder="Ministry" required />
        <textarea name="description" value={scheme.description} onChange={handleChange} placeholder="Description" required />
        <textarea name="eligibility" value={scheme.eligibility} onChange={handleChange} placeholder="Eligibility" required />
        <input type="text" name="state" value={scheme.state} onChange={handleChange} placeholder="Applicable State" />
        <input type="number" name="incomeLimit" value={scheme.incomeLimit} onChange={handleChange} placeholder="Income Limit" />
        <button type="submit">{editingId ? 'Update Scheme' : 'Add Scheme'}</button>
      </form>

      <hr />

      <h3>All Schemes</h3>
      {schemes.map((s) => (
        <div key={s._id} className="scheme-card">
          <h4>{s.title}</h4>
          <p><strong>Ministry:</strong> {s.ministry}</p>
          <p><strong>Eligibility:</strong> {s.eligibility}</p>
          <p><strong>State:</strong> {s.state || 'All'}</p>
          <p><strong>Income Limit:</strong> {s.incomeLimit || 'Not specified'}</p>
          <button onClick={() => handleEdit(s._id)}>Edit</button>
          <button onClick={() => handleDelete(s._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default AdminPanel;
