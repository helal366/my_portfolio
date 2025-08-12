import React from 'react';
import { FaCode } from "react-icons/fa";

const Skills = () => {
    return (
        <section className=" py-10 section px-5 grid md:grid-cols-[50%_50%] gap-5">
            <section className='mb-6'>
                <h2 className="flex items-center gap-3 text-2xl font-semibold mb-8">
                    <FaCode className="text-purple-500 w-6 h-6" />
                    Development Skills
                </h2>
                <p>As a MERN stack developer specializing in frontend development with a strong understanding
                    of backend architecture, I build dynamic, scalable web applications.
                    My focus is on creating seamless user experiences with high performance and efficiency,
                    leveraging modern technologies to deliver robust, full-stack solutions.
                </p>
            </section>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center px-5">

                {/* html5 */}
                <div className="skillCard">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#E34F26" viewBox="0 0 24 24">
                        <path d="M1.5 0h21l-1.91 21.563L12 24l-8.09-2.437L1.5 0zM17.13 7.5l.237-2.637H6.633l.487 5.45h7.58l-.293 3.187-2.407.662-2.425-.668-.153-1.71H6.78l.27 3.09 4.95 1.41 4.92-1.41.68-7.274H9.265l-.233-2.6h8.098z" />
                    </svg>
                    <span className="mt-2">HTML5</span>
                </div>

                {/* css3 */}
                <div className="skillCard">
                    <img src="https://i.postimg.cc/v8vDh549/css.jpg" alt=" CSS 3" className="w-12 h-12" />
                    <span className="mt-2">CSS3</span>
                </div>

                {/* tailwind */}
                <div className="skillCard">
                    <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="Tailwind CSS" className="w-12 h-12" />
                    <span className="mt-2">Tailwind</span>
                </div>

                {/* javascript */}
                <div className="skillCard">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="w-12 h-12" alt="JavaScript" />
                    <span className="mt-2">JavaScript</span>
                </div>

                {/* react */}
                <div className="skillCard">
                    <img src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg" className="w-12 h-12" alt="React" />
                    <span className="mt-2">React</span>
                </div>
                {/* react router */}
                <div className="skillCard">
                    <img src="https://i.postimg.cc/VLRBm3ZV/react-router.png" className="w-12 h-12" alt="React Router" />
                    <span className="mt-2">React Router</span>
                </div>

                {/* redux */}
                <div className="skillCard">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" className="w-12 h-12" alt="Redux" />
                    <span className="mt-2">Redux</span>
                </div>

                {/* mongodb */}
                <div className="skillCard">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" className="w-12 h-12" alt="MongoDB" />
                    <span className="mt-2">MongoDB</span>
                </div>

                {/* express js */}
                <div className="skillCard">
                    <img src="https://i.postimg.cc/5NC5FXtD/express-js.png" className="w-12 h-12" alt="Express.js" />
                    <span className="mt-2">Express.js</span>
                </div>

                {/* firebase */}
                <div className="skillCard">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" className="w-12 h-12" alt="Firebase" />
                    <span className="mt-2">Firebase</span>
                </div>

                {/* vercel */}
                {/* <div class="flex flex-col items-center">
                    <img src="https://www.svgrepo.com/show/327408/logo-vercel.svg" class="w-12 h-12" alt="Vercel" />
                    <span class="mt-2">Vercel</span>
                </div> */}
            </div>
        </section>

    );
};

export default Skills;