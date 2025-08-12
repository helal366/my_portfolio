import React, { useEffect, useState } from 'react';
import { FaBriefcase } from "react-icons/fa";
import { Link } from 'react-router';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('/data/projects.json')
            .then((res) => res.json())
            .then((data) => setProjects(data))
            .catch((err) => console.error("Failed to fetch projects:", err))
    }, [])
    return (
        <section className='section px-5 py-10'>
            <section >
                <h2 className="flex items-center gap-3 text-2xl font-semibold mb-8">
                    <FaBriefcase className="text-yellow-400 w-6 h-6" />
                    Projects
                </h2>
            </section>

            <section className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {projects.map((project) => (
                    <>
                        <div key={project.id} className="card bg-base-100 shadow-sm text-gray-950">
                            <figure>
                                <img
                                    src={project.image}
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{project.name}</h2>
                                <div className="card-actions justify-end">
                                    <Link to={`/project/${project.id}`}>
                                        <button className="btn buttonOne">Details</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </>
                ))}

            </section>
        </section>
    );
};

export default Projects;