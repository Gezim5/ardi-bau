import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center p-4">
      <p>&copy; {new Date().getFullYear()} Ardi Bau. Alle Rechte vorbehalten.</p>
    </footer>
  );
}
