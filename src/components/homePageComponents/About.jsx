import React from 'react';

const About = () => {
    return (
        <section className='grid md:grid-cols-[50%_50%] bg-teal-100 shadow-2xl rounded-md'>
            <div className='px-5 py-10 flex justify-center md:order-2'>
                <img className='rounded-md max-w-[80%] max-h-[300px] border border-yellow-300/50 shadow-lg' src="https://i.postimg.cc/26hVJNg6/7.png" alt="My Picture" />
            </div>

            <div className='text-center px-5 md:py-10 md:order-1'>
                <p >Hello, I am</p>
                <h2 className='text-3xl font-semibold my-4'>
                    Md Al Helal Sarker
                </h2>
                <p className='mb-6'>A passionate full-stack web developer specializing in building responsive,
                    user-friendly, and performance-driven applications
                    with modern technologies.
                </p>

                <button className='btn buttonOne mb-10 md:mb-0'>
                    Resume
                </button>
            </div>
            

        </section>
    );
};

export default About;