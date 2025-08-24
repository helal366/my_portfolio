import React from 'react';
// import { FaLaptopCode, FaHeart, FaPalette, FaRunning, FaUserCircle } from 'react-icons/fa';
import { FaLaptopCode, FaPaintBrush, FaRunning, FaDownload, FaUserTie } from "react-icons/fa";
import { MdWorkOutline } from "react-icons/md";

const AboutMe = () => {
  const resumeLink = `https://drive.google.com/uc?export=download&id=${import.meta.env.VITE_RESUME_FILE_ID}`;
  return (
      <section data-aos="fade-up" data-aos-duration="2000" className="section">
        <div className="max-w-4xl mx-auto">
          {/* Heading */}
          <div className="flex items-center gap-3 mb-6 justify-center">
            <FaUserTie className="w-8 h-8 text-blue-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              About Me
            </h2>
          </div>

          {/* Intro */}
          <p className="text-lg leading-relaxed mb-8 text-center">
            Hi, I’m <span className="font-semibold">Md Al Helal Sarker</span>, a
            passionate <span className="text-green-900">MERN Stack Developer</span>.
            My programming journey started with curiosity about how websites work
            and quickly grew into a full-time passion for building modern,
            scalable, and user-friendly applications.
          </p>

          {/* Details */}
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            {/* Programming Journey */}
            <div className="flex items-start gap-4">
              <FaLaptopCode className="w-8 h-8 text-blue-500 mt-1" />
              <div>
                <h3 className="text-xl font-semibold">Programming Journey</h3>
                <p>
                  I’ve worked extensively with <strong>React, Node.js,
                    Express.js, and MongoDB</strong>, building full-stack web
                  applications. Each project strengthens my ability to solve real-world
                  problems with clean and efficient code.
                </p>
              </div>
            </div>

            {/* Work I Enjoy */}
            <div className="flex items-start gap-4">
              <MdWorkOutline className="w-8 h-8 text-green-500 mt-1" />
              <div>
                <h3 className="text-xl font-semibold">Work I Enjoy</h3>
                <p>
                  I love developing interactive UIs, implementing backend APIs, and
                  collaborating on innovative projects that make a positive impact.
                </p>
              </div>
            </div>

            {/* Hobbies */}
            <div className="flex items-start gap-4">
              <FaRunning className="w-8 h-8 text-orange-500 mt-1" />
              <div>
                <h3 className="text-xl font-semibold">Hobbies</h3>
                <p>
                  Outside of coding, I enjoy sports, exploring new technologies,
                  and continuous learning to sharpen my problem-solving skills.
                </p>
              </div>
            </div>

            {/* Creativity */}
            <div className="flex items-start gap-4">
              <FaPaintBrush className="w-8 h-8 text-purple-500 mt-1" />
              <div>
                <h3 className="text-xl font-semibold">Creativity</h3>
                <p>
                  I express creativity through coding, design, and painting. I
                  believe technology and art go hand-in-hand in shaping modern
                  solutions.
                </p>
              </div>
            </div>
          </div>

          {/* Resume Button */}
          <div className="w-full flex justify-center">
            <a
              href={resumeLink}
              download
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

export default AboutMe;
