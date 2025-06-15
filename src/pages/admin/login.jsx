import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (password === 'admin123') {
      localStorage.setItem('admin-auth', 'true');
      navigate('/admin/dashboard');
    } else {
      alert('Falsches Passwort');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <input
        type="password"
        placeholder="Admin Passwort"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 rounded"
      />
      <button onClick={handleLogin} className="mt-4 bg-black text-white px-4 py-2 rounded">
        Login
      </button>
    </div>
  );
};

export default Login;
