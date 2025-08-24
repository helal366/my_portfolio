import React from 'react';
import About from '../components/homePageComponents/About';
import Skills from '../components/homePageComponents/Skills';
import EducationalQualification from '../components/homePageComponents/EducationalQualification';
import Projects from '../components/homePageComponents/Projects';
import Contacts from '../components/homePageComponents/Contacts';
import AboutMe from '../components/homePageComponents/AboutMe';

const HomePage = () => {
    return (
        <section className='bg-green-200/50 min-h-screen pt-10 padding pb-52'>

            <About />
            <section id='skills' className='mt-10'>
                <Skills />
            </section>
            <section id='education' className='mt-10'>
               <EducationalQualification/>
            </section>
            <section id='aboutme'  className='mt-10'>
               <AboutMe/>
            </section>
            <section id='projects' className='mt-10'>
               <Projects/>
            </section>
            <section id='contacts' className='mt-10'>
               <Contacts/>
            </section>
            
        </section>
    );
};

export default HomePage;