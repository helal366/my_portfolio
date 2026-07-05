import { FaUserTie, FaLaptopCode, FaRunning, FaPaintBrush } from "react-icons/fa";
import { MdWorkOutline } from "react-icons/md";

const AboutMe = () => {
return ( <section className="section text-gray-200 py-16 px-4 md:px-10"> <div className="max-w-6xl mx-auto">

    {/* Heading */}
    <div className="text-center mb-10">
      <div className="flex justify-center items-center gap-2 mb-3">
        <FaUserTie className="w-6 h-6 text-purple-500" />
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          About Me
        </h2>
      </div>

      <p className="max-w-3xl mx-auto text-gray-100 text-sm md:text-base leading-relaxed">
        My journey into technology began with a strong curiosity for web development.
        I started by learning the MERN stack through Programming Hero, where I built
        a solid foundation in modern web technologies. As I progressed, I realized
        the importance of Data Structures and Algorithms (DSA) for long-term growth,
        which led me to actively practice problem-solving. Driven by a constant desire
        to learn and evolve, I enrolled in an AI-Driven Software Engineering Bootcamp
        at Programming Hero. Currently, I am expanding my skills in advanced
        technologies while continuously improving my ability to build scalable,
        efficient, and impactful solutions.
      </p>
    </div>

    {/* Cards */}
    <div className="grid md:grid-cols-2 gap-8">

      {/* Programming Journey */}
      <div className="aboutmeCard">
        <FaLaptopCode className="aboutMeCardIcon" />
        <div>
          <h3 className="text-xl font-semibold text-white">
            Programming Journey
          </h3>
          <p className="aboutmeCardParagraph">
            I have built a strong foundation in full-stack development using
            technologies like <strong>React, Next.js, Redux, Node.js,
            Express.js, MongoDB, PostgreSQL, and Prisma</strong>. My journey
            started with the MERN stack and continues to evolve as I explore
            modern and scalable development practices.
          </p>
        </div>
      </div>

      {/* Work I Enjoy */}
      <div className="aboutmeCard">
        <MdWorkOutline className="aboutMeCardIcon" />
        <div>
          <h3 className="text-xl font-semibold text-white">
            Work I Enjoy
          </h3>
          <p className="aboutmeCardParagraph">
            I enjoy building responsive user interfaces, developing robust
            backend APIs, and working on meaningful projects that solve
            real-world problems. I’m especially passionate about clean code,
            performance, and user experience.
          </p>
        </div>
      </div>

      {/* Hobbies */}
      <div className="aboutmeCard">
        <FaRunning className="aboutMeCardIcon" />
        <div>
          <h3 className="text-xl font-semibold text-white">
            Hobbies
          </h3>
          <p className="aboutmeCardParagraph">
            Outside of coding, I enjoy sports, exploring new technologies,
            and continuously learning. I believe staying active and curious
            helps improve both creativity and problem-solving ability.
          </p>
        </div>
      </div>

      {/* Creativity */}
      <div className="aboutmeCard">
        <FaPaintBrush className="aboutMeCardIcon" />
        <div>
          <h3 className="text-xl font-semibold text-white">
            Creativity
          </h3>
          <p className="aboutmeCardParagraph">
            I express creativity through coding, design, and artistic
            exploration. I believe that combining technology with creativity
            leads to innovative and impactful digital experiences.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>

);
};

export default AboutMe;



// import React from 'react';
// import { FaLaptopCode, FaPaintBrush, FaRunning, FaDownload, FaUserTie } from "react-icons/fa";
// import { MdWorkOutline } from "react-icons/md";

// const AboutMe = () => {
//   const resumeLink = `https://drive.google.com/uc?export=download&id=${import.meta.env.VITE_RESUME_FILE_ID}`;
//   return (
//       <section data-aos="fade-up" data-aos-duration="2000" className="section">
//         <div className="max-w-4xl mx-auto">
          

          // <div className="flex items-center gap-3 mb-6 justify-center">
          //   <FaUserTie className="w-6 h-6 text-purple-500" />
          //   <h2 className="text-2xl md:text-3xl font-bold text-black">
          //     About Me
          //   </h2>
          // </div>


//           <p className="text-lg leading-relaxed mb-8 text-center">
//             Hi, I’m <span className="font-semibold">Md Al Helal Sarker</span>, a
//             passionate <span className="text-green-900">Full Stack Developer</span>.
//             My programming journey started with curiosity about how websites work
//             and quickly grew into a full-time passion for building modern,
//             scalable, and user-friendly applications.
//           </p>


//           <div className="grid md:grid-cols-2 gap-8 mb-10">
          
//             <div className="flex items-start gap-4">
//               <FaLaptopCode className="w-8 h-8 text-blue-500 mt-1" />
//               <div>
//                 <h3 className="text-xl font-semibold">Programming Journey</h3>
//                 <p>
//                   I’ve worked extensively with <strong>React, NextJS, Redux, NodeJS,
//                     ExpressJS, Prisma, MongoDB, PostgreSQL</strong>, building full-stack web
//                   applications. Each project strengthens my ability to solve real-world
//                   problems with clean and efficient code.
//                 </p>
//               </div>
//             </div>

//             {/* Work I Enjoy */}
//             <div className="flex items-start gap-4">
//               <MdWorkOutline className="w-8 h-8 text-green-500 mt-1" />
//               <div>
//                 <h3 className="text-xl font-semibold">Work I Enjoy</h3>
//                 <p>
//                   I love developing interactive UIs, implementing backend APIs, and
//                   collaborating on innovative projects that make a positive impact.
//                 </p>
//               </div>
//             </div>

//             {/* Hobbies */}
//             <div className="flex items-start gap-4">
//               <FaRunning className="w-8 h-8 text-orange-500 mt-1" />
//               <div>
//                 <h3 className="text-xl font-semibold">Hobbies</h3>
//                 <p>
//                   Outside of coding, I enjoy sports, exploring new technologies,
//                   and continuous learning to sharpen my problem-solving skills.
//                 </p>
//               </div>
//             </div>

//             {/* Creativity */}
//             <div className="flex items-start gap-4">
//               <FaPaintBrush className="w-8 h-8 text-purple-500 mt-1" />
//               <div>
//                 <h3 className="text-xl font-semibold">Creativity</h3>
//                 <p>
//                   I express creativity through coding, design, and painting. I
//                   believe technology and art go hand-in-hand in shaping modern
//                   solutions.
//                 </p>
//               </div>
//             </div>
//           </div>

        
//           <div className="w-full flex justify-center">
//             <a
//               href={resumeLink}
//               download
//               className="btn buttonOne flex items-center gap-2 mb-10 md:mb-0"
//             >
//               <FaDownload className="w-5 h-5" />
//               Download Resume
//             </a>
//           </div>
//         </div>
//       </section>
//   );
// };

// export default AboutMe;
