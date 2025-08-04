import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Home() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // You can add a protected route check here later
    setLoading(false);
  }, []);

  const handleLogout = async () => {
    try {
      await axios.get('http://localhost:5000/api/auth/logout', {
        withCredentials: true
      });
      alert("Logged out successfully!");
      setUser(null);
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-lg p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">MERN Auth App</h1>
          <div className="space-x-4">
            {user ? (
              <>
                <span className="text-gray-600">Welcome, {user.name}!</span>
                <button 
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <a href="/login" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  Login
                </a>
                <a href="/signup" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                  Sign Up
                </a>
              </>
            )}
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto py-8 px-4">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to MERN Authentication App
          </h2>
          <p className="text-gray-600 mb-8">
            A full-stack application with user authentication using MongoDB, Express, React, and Node.js
          </p>
          
          {!user && (
            <div className="space-x-4">
              <a 
                href="/signup" 
                className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 inline-block"
              >
                Get Started - Sign Up
              </a>
              <a 
                href="/login" 
                className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 inline-block"
              >
                Already have an account? Login
              </a>
            </div>
          )}

          {user && (
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
              <h3 className="text-xl font-bold mb-4">Dashboard</h3>
              <p className="text-gray-600">You are successfully logged in!</p>
              <p className="text-sm text-gray-500 mt-2">
                This is a protected area that only authenticated users can see.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
