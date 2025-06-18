import React from "react";
import ProjectCard from "../components/ProjectCard.jsx";

const exampleProjects = [
  { title: "Projekt 1", image: "/project1.jpg", description: "Beschreibung 1" },
  { title: "Projekt 2", image: "/project2.jpg", description: "Beschreibung 2" },
  { title: "Projekt 3", image: "/project3.jpg", description: "Beschreibung 3" },
];

export default function Projects() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">Unsere Projekte</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {exampleProjects.map((p, idx) => (
          <ProjectCard key={idx} {...p} />
        ))}
      </div>
    </section>
  );
}
