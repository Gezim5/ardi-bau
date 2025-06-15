import React from 'react';

export default function Home() {
  return (
    <section className="p-8 text-center">
      <h1 className="text-4xl font-bold mb-4">Willkommen bei Ardi Bau</h1>
      <p className="text-lg text-gray-700 mb-6">Ihr zuverlässiger Partner für Bauprojekte in Mannheim und Umgebung seit 2018.</p>
      <img src="/project1.jpg" alt="Projekt Beispiel" className="mx-auto max-w-md rounded-lg shadow-lg" />
    </section>
  );
}
