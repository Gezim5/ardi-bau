import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [media, setMedia] = useState('');
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem('admin-auth');
    if (auth !== 'true') navigate('/admin/login');
    const stored = localStorage.getItem('projects');
    if (stored) setProjects(JSON.parse(stored));
  }, []);

  const handleAdd = () => {
    const newProject = { title, description: desc, media };
    const updated = [...projects, newProject];
    localStorage.setItem('projects', JSON.stringify(updated));
    setProjects(updated);
    setTitle('');
    setDesc('');
    setMedia('');
  };

  const handleDelete = (index) => {
    const updated = [...projects];
    updated.splice(index, 1);
    localStorage.setItem('projects', JSON.stringify(updated));
    setProjects(updated);
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl mb-4 font-bold">Admin Dashboard – Projekte verwalten</h1>
      <div className="flex flex-col gap-2 mb-6">
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Titel" className="border p-2" />
        <textarea value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="Beschreibung" className="border p-2" />
        <input value={media} onChange={(e) => setMedia(e.target.value)} placeholder="Media URL (image/video)" className="border p-2" />
        <button onClick={handleAdd} className="bg-green-600 text-white px-4 py-2 rounded">Hinzufügen</button>
      </div>

      <h2 className="text-xl font-semibold mb-2">Vorhandene Projekte</h2>
      <ul className="space-y-2">
        {projects.map((proj, idx) => (
          <li key={idx} className="border p-2 flex justify-between items-center">
            <div>
              <strong>{proj.title}</strong><br />
              <small>{proj.description}</small>
            </div>
            <button onClick={() => handleDelete(idx)} className="bg-red-500 text-white px-2 py-1 rounded">Löschen</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
