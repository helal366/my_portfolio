import React from "react";
import { FaCode, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaAws } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiTypescript, SiNextdotjs, SiRedux, SiExpress, SiPrisma, SiMongodb, SiPostgresql, SiFirebase, SiVercel, SiNetlify, SiPostman, SiNpm, SiPnpm, } from "react-icons/si";
import { VscCode } from "react-icons/vsc";
// SiVisualstudiocode
const Skills = () => {

    const frontendSkills = [
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> },
        { name: "Tailwind", icon: <SiTailwindcss /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "React", icon: <FaReact /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "Redux", icon: <SiRedux /> },
    ];

    const backendSkills = [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "Prisma", icon: <SiPrisma /> },
    ];

    const databaseSkills = [
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "Firebase", icon: <SiFirebase /> },
        { name: "Vercel", icon: <SiVercel /> },
        { name: "Netlify", icon: <SiNetlify /> },
    ];

    const toolsSkills = [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "VS Code", icon: <VscCode /> },
        { name: "NPM", icon: <SiNpm /> },
        { name: "PNPM", icon: <SiPnpm /> },
        { name: "Postman", icon: <SiPostman /> },
        { name: "AWS", icon: <FaAws /> },
    ];

    const renderSkills = (skills) => (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
            {skills.map((skill) => (
                <div key={skill.name} className="flex items-center gap-2 bg-white/10 p-2 rounded-md">
                    <span className="text-xl">{skill.icon}</span>
                    <span className="text-sm">{skill.name}</span>
                </div>
            ))}
        </div>
    );

    return (
        <section
            data-aos="fade-up"
            data-aos-duration="2000"
            className="section"
        >
            {/* Heading */}
            <div className="mb-10 px-10">
                <h2 className="flex items-center gap-3 text-2xl md:text-3xl font-semibold mb-4">
                    <FaCode className="text-purple-500" />
                    Development Skills
                </h2>
                <p className="max-w-2xl">
                    As a MERN stack developer with strong frontend expertise, I build scalable,
                    high-performance applications with modern technologies. My focus is on
                    clean UI, efficient architecture, and seamless user experience.
                </p>
            </div>

            {/* Cards */}
            <div className="grid md:grid-cols-2  gap-6 px-10">

                {/* Frontend */}
                <div className="skillCard">
                    <h3 className="text-lg font-semibold">Frontend</h3>
                    {renderSkills(frontendSkills)}
                </div>

                {/* Backend */}
                <div className="skillCard">
                    <h3 className="text-lg font-semibold">Backend</h3>
                    {renderSkills(backendSkills)}
                </div>

                {/* Database & Dev */}
                <div className="skillCard">
                    <h3 className="text-lg font-semibold">Database & Development</h3>
                    {renderSkills(databaseSkills)}
                </div>

                {/* Tools & DevOps */}
                <div className="skillCard">
                    <h3 className="text-lg font-semibold">Tools & DevOps</h3>
                    {renderSkills(toolsSkills)}
                </div>

            </div>
        </section>
    );
};

export default Skills;












// import React from 'react';
// import { FaCode } from "react-icons/fa";

// const Skills = () => {
//     // skills.js
//     const skills = [
//         { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", level: 90 },
//         { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", level: 85 },
//         { name: "Tailwind CSS", icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg", level: 80 },
//         { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", level: 90 },
//         { name: "React", icon: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg", level: 85 },
//         { name: "React Router", icon: "https://i.postimg.cc/VLRBm3ZV/react-router.png", level: 80 },
//         { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg", level: 75 },
//         { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", level: 80 },
//         { name: "Express.js", icon: "https://i.postimg.cc/5NC5FXtD/express-js.png", level: 75 },
//         { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", level: 75 },
//         { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", level: 70 },
//     ];
//     return (
//         <section data-aos="fade-up" data-aos-duration="2000" className="section grid md:grid-cols-[50%_50%] gap-5">
//             <section className='mb-6'>
//                 <h2 className="flex items-center gap-3 text-2xl md:text-3xl font-semibold mb-8">
//                     <FaCode className="text-purple-500 w-6 h-6" />
//                     Development Skills
//                 </h2>
//                 <p>As a MERN stack developer specializing in frontend development with a strong understanding
//                     of backend architecture, I build dynamic, scalable web applications.
//                     My focus is on creating seamless user experiences with high performance and efficiency,
//                     leveraging modern technologies to deliver robust, full-stack solutions.
//                 </p>
//             </section>
//             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center px-5">
//                 {skills.map(skill => (
//                     <div key={skill.name} className="skillCard">
//                         <img src={skill.icon} alt={skill.name} className="w-12 h-12 rounded-lg bg-green-200 p-1" />
//                         <span className="mt-2">{skill.name}</span>
//                         <div className="w-full bg-gray-700 rounded-full h-4 flex flex-col justify-center">
//                             <div className={`bg-purple-500  h-2 rounded-full w-[${skill.level}%]`}></div>
//                         </div>
//                             <p className=''>{skill.level}% </p>

//                     </div>
//                 ))}
//             </div>
//         </section>

//     );
// };

// export default Skills;