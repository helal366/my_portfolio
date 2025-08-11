import React from 'react';

const About = () => {
    return (
        <section className='grid md:grid-cols-[50%_50%] section'>
            <div className='px-5 py-10 flex justify-center md:order-2 '>
                <img className='max-w-[80%] max-h-[300px]  rounded-lg' src="https://i.postimg.cc/Z5zDgFNb/7-removebg-preview.png" alt="My Picture" />
            </div>

            <div className='text-center px-5 md:py-10 md:order-1'>
                <p >Hello, I am</p>
                <h2 className='text-3xl font-semibold my-4'>
                    Md Al Helal Sarker
                </h2>
                <h3 className='text-xl font-semibold mb-4'>
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
                            <a href="https://www.linkedin.com/in/helal-sarker/"
                                target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                className='social'
                                    width="28" height="28" fill="#fff" viewBox="0 0 24 24">
                                    <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.16h.05c.53-1.01 1.83-2.08 3.76-2.08 4.02 0 4.77 2.65 4.77 6.09V24h-4v-7.92c0-1.89-.03-4.33-2.64-4.33-2.64 0-3.04 2.06-3.04 4.2V24h-4V8z" />
                                </svg>
                            </a>
                        </div>
                        <div>
                            <a href="https://github.com/helal366" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" 
                                className='social'
                                width="28" height="28" fill="#fff" viewBox="0 0 24 24">
                                    <path d="M12 .296c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.17c-3.338.725-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.744.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.93 0-1.31.469-2.38 1.237-3.22-.124-.304-.536-1.526.117-3.176 0 0 1.008-.323 3.301 1.23a11.5 11.5 0 0 1 6.002 0c2.293-1.553 3.301-1.23 3.301-1.23.653 1.65.241 2.872.118 3.176.77.84 1.236 1.91 1.236 3.22 0 4.61-2.804 5.624-5.476 5.92.43.37.823 1.103.823 2.222v3.293c0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.296c0-6.627-5.373-12-12-12" />
                                </svg>
                            </a>
                        </div>
                        <div>
                            <a href="https://x.com/Helal568768" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" 
                                className='social'
                                width="28" height="28" fill="#fff" viewBox="0 0 24 24">
                                    <path d="M24 4.56c-.89.39-1.84.65-2.84.77a4.93 4.93 0 0 0 2.16-2.72c-.95.56-2.01.97-3.13 1.19a4.92 4.92 0 0 0-8.4 4.49A13.94 13.94 0 0 1 1.67 3.15a4.92 4.92 0 0 0 1.52 6.57A4.89 4.89 0 0 1 .96 9.1v.06a4.93 4.93 0 0 0 3.95 4.83 4.93 4.93 0 0 1-2.21.08 4.93 4.93 0 0 0 4.6 3.42A9.88 9.88 0 0 1 0 19.54a13.9 13.9 0 0 0 7.55 2.21c9.05 0 14-7.5 14-14v-.64a9.94 9.94 0 0 0 2.45-2.54z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <button className='btn buttonOne mb-10 md:mb-0'>
                    Resume
                </button>
            </div>


        </section>
    );
};

export default About;