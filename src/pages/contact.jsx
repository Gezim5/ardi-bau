import React from 'react';

export default function Contact() {
  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold mb-4">Kontakt</h2>
      <p className="mb-2">📍 Erlenstraße 10, 68169 Mannheim</p>
      <p className="mb-2">📞 Telefon: +49 1737717737</p>
      <p className="mb-2">✉️ E-Mail: info@ardibau.de</p>
      <form className="space-y-4 max-w-md">
        <input type="text" placeholder="Name" className="w-full border p-2 rounded" required />
        <input type="email" placeholder="E-Mail" className="w-full border p-2 rounded" required />
        <textarea placeholder="Nachricht" className="w-full border p-2 rounded h-32" required></textarea>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Senden</button>
      </form>
    </section>
  );
}
