import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-gray-800">Ardi Bau</Link>
        <div className="space-x-4">
          <Link to="/" className="hover:text-blue-500">Startseite</Link>
          <Link to="/about" className="hover:text-blue-500">Über uns</Link>
          <Link to="/services" className="hover:text-blue-500">Leistungen</Link>
          <Link to="/projects" className="hover:text-blue-500">Projekte</Link>
          <Link to="/contact" className="hover:text-blue-500">Kontakt</Link>
        </div>
      </div>
    </nav>
  );
}
