import React from 'react';
import { FaDownload, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const About = () => {
    const resume_file=`https://drive.google.com/uc?export=download&id=${import.meta.env.VITE_RESUME_FILE_ID}`
    return (
        <section className='grid md:grid-cols-[50%_50%] section'>
            <div className='px-5 py-10 flex justify-center md:order-2 '>
                <img className='max-w-[80%] max-h-[300px]  rounded-lg' src="https://i.postimg.cc/Z5zDgFNb/7-removebg-preview.png" alt="My Picture" />
            </div>

            <div className='text-center px-5 md:py-10 md:order-1'>
                <p >Hello, I am</p>
                <h2 className='text-3xl text-green-800 font-semibold my-4'>
                    Md Al Helal Sarker
                </h2>
                <h3 className='text-xl text-green-700 font-semibold mb-4'>
                    MERN Stack Developer
                </h3>
                <p className='mb-6'>A passionate MERN-stack web developer specializing in building responsive,
                    user-friendly, and performance-driven applications
                    with modern technologies.
                </p>

                <div className='mb-8'>
                    <h3 className='mb-2 text-xl font-semibold'>Social Links: </h3>
                    <div className='flex gap-5 flex-wrap justify-center mb-5'>
                        <div >
                            <a
                                href="https://www.linkedin.com/in/helal-sarker/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-blue-700 hover:scale-105 transition-transform border border-purple-600 p-2 rounded-md"
                            >
                                <FaLinkedin className="w-6 h-6" />
                                <span className="font-medium">LinkedIn</span>
                            </a>
                        </div>
                        <div>
                            <a
                                href="https://github.com/helal366"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-gray-800 hover:scale-105 transition-transform border border-purple-600 p-2 rounded-md"
                            >
                                <FaGithub className="w-6 h-6" />
                                <span className="font-medium">GitHub</span>
                            </a>
                        </div>
                        <div >
                            <a
                                href="https://x.com/Helal568768"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-sky-500 hover:scale-105 transition-transform border border-purple-600 p-2 rounded-md"
                            >
                                <FaTwitter className="w-6 h-6" />
                                <span className="font-medium">Twitter</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className='w-full flex justify-center'>
                    <a
                        href={resume_file}
                        download="Resume_of_Helal.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn buttonOne flex items-center gap-2 mb-10 md:mb-0"
                    >
                        <FaDownload className="w-5 h-5" />
                        Download Resume
                    </a>

                </div>
            </div>


        </section>
    );
};

export default About;