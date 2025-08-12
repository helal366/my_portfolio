import React from 'react';
import About from '../components/homePageComponents/About';
import Skills from '../components/homePageComponents/Skills';
import EducationalQualification from '../components/homePageComponents/EducationalQualification';
import Projects from '../components/homePageComponents/Projects';

const HomePage = () => {
    return (
        <section className='bg-teal-200/50 min-h-screen pt-10 padding pb-52'>
            <About />
            <section className='mt-10'>
                <Skills />
            </section>
            <section className='mt-10'>
               <EducationalQualification/>
            </section>
            <section className='mt-10'>
               <Projects/>
            </section>
        </section>
    );
};

export default HomePage;