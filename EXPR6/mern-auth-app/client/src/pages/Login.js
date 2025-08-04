import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/login', form, {
        withCredentials: true // Important: Include cookies in requests
      });
      alert("Login successful!");
      navigate('/'); // Redirect to home page
    } catch (error) {
      alert("Login failed: " + (error.response?.data?.error || "Unknown error"));
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
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
          Login
        </button>
        <p className="text-center">
          Don't have an account? <a href="/signup" className="text-blue-600">Sign up</a>
        </p>
      </form>
    </div>
  );
}
