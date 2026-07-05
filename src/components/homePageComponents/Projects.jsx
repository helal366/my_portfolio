import React, { useEffect, useState } from "react";
import { FaBriefcase } from "react-icons/fa";
import { Link } from "react-router";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("/data/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Failed to fetch projects:", err));
  }, []);
  return (
    <section data-aos="fade-up" data-aos-duration="2000" className="section">
      <div>
        <h2 className="flex items-center gap-3 text-3xl font-semibold mb-8">
          <FaBriefcase className="text-purple-500 w-6 h-6" />
          Projects
        </h2>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="card bg-green-50 shadow-sm text-gray-950"
          >
            <figure className="overflow-hidden transition-all hover:scale-105 hover:z-10">
              <img
                className="w-full h-52 object-cover object-top border border-gray-500/50 rounded-t-lg"
                src={project.image}
                alt="Shoes"
              />
            </figure>

            <div className="card-body transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <h2 className="card-title text-green-900">{project.name}</h2>

              <p className="my-2 text-xs text-gray-600 leading-relaxed">
                {project.description}
              </p>

              <div className="relative my-3 overflow-hidden">
                <div className="marquee flex gap-3 w-max">
                  {[...project.techStack, ...project.techStack].map(
                    (tech, index) => (
                      <span
                        key={index}
                        className="bg-amber-50 text-gray-500 px-2 py-1 rounded-full text-xs font-medium shrink-0"
                      >
                        {tech}
                      </span>
                    ),
                  )}
                </div>
              </div>

              <div className="card-actions justify-end">
                <Link to={`/project/${project.id}`}>
                  <button className="btn buttonTwo btn-sm">Details</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
};

export default Projects;
