import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/signup', form);
      alert("User registered successfully!");
      navigate('/login'); // Redirect to login page
    } catch (error) {
      alert("Registration failed: " + (error.response?.data?.error || "Unknown error"));
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        <input 
          className="w-full p-2 mb-4 border rounded" 
          type="text" 
          placeholder="Name"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })} 
          required
        />
        <input 
          className="w-full p-2 mb-4 border rounded" 
          type="email" 
          placeholder="Email"
          value={form.email}
          onChange={e => setForm({ ...form, email: e.target.value })} 
          required
        />
        <input 
          className="w-full p-2 mb-4 border rounded" 
          type="password" 
          placeholder="Password"
          value={form.password}
          onChange={e => setForm({ ...form, password: e.target.value })} 
          required
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded w-full mb-4">
          Sign Up
        </button>
        <p className="text-center">
          Already have an account? <a href="/login" className="text-blue-600">Login</a>
        </p>
      </form>
    </div>
  );
}
