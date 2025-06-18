import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./app.jsx";
import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import Services from "./pages/services.jsx";
import Projects from "./pages/projects.jsx";
import Contact from "./pages/contact.jsx";
import Login from "./pages/admin/login.jsx";
import Dashboard from "./pages/admin/dashboard.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
          <Route path="admin/login" element={<Login />} />
          <Route path="admin/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
