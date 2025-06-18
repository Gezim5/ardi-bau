import React from "react";

export default function Login() {
  return (
    <section className="space-y-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold">Admin Login</h1>
      <input className="w-full border p-2" placeholder="Username" />
      <input type="password" className="w-full border p-2" placeholder="Password" />
      <button className="bg-blue-600 text-white px-4 py-2 rounded">Login</button>
    </section>
  );
}
