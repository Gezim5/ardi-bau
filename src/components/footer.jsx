import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-200 text-center py-4">
      &copy; {year} Ardi Bau – Alle Rechte vorbehalten.
    </footer>
  );
}
