import React from 'react';
import { FaLaptopCode, FaHeart, FaPalette, FaRunning, FaUserCircle } from 'react-icons/fa';

const AboutMe = () => {
  return (
    <section className="section">
      <h2 className="flex items-center gap-3 text-3xl font-bold mb-6">
        <FaUserCircle className="w-8 h-8 text-purple-700" />
        About Me
      </h2>

      <p className="mb-4 text-gray-700 leading-relaxed">
        <FaLaptopCode className="inline mr-2 text-purple-500" />
        My programming journey began several years ago, fueled by a deep curiosity for solving problems through code. I have developed expertise in full-stack development, particularly with the MERN stack, and continuously seek to learn and grow in emerging technologies.
      </p>

      <p className="mb-4 text-gray-700 leading-relaxed">
        <FaHeart className="inline mr-2 text-red-500" />
        I enjoy working on projects that challenge me to think creatively and build scalable, efficient applications. Collaborating with teams and turning ideas into reality is what motivates me the most.
      </p>

      <p className="mb-4 text-gray-700 leading-relaxed">
        <FaRunning className="inline mr-2 text-green-500" />
        Outside programming, I am passionate about staying active through running and exploring nature. These activities help me recharge and maintain a balanced lifestyle.
      </p>

      <p className="mb-4 text-gray-700 leading-relaxed">
        <FaPalette className="inline mr-2 text-yellow-500" />
        I also have a creative side — painting is a hobby that allows me to express myself artistically and find inspiration beyond the screen.
      </p>

      <p className="text-gray-700 leading-relaxed">
        Overall, I’m an enthusiastic developer with a curious mind and a love for continuous learning, ready to take on new challenges and make meaningful contributions.
      </p>
    </section>
  );
};

export default AboutMe;
