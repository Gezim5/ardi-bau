// src/components/ProjectCard.jsx
import React from 'react';

const ProjectCard = ({ title, description, media }) => (
  <div className="bg-white shadow-lg rounded p-4">
    {media.endsWith('.mp4') ? (
      <video controls className="w-full h-64 object-cover rounded">
        <source src={media} type="video/mp4" />
      </video>
    ) : (
      <img src={media} alt={title} className="w-full h-64 object-cover rounded" />
    )}
    <h3 className="text-xl font-bold mt-4">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default ProjectCard;
