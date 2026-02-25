import React from 'react';
import { FaGraduationCap } from "react-icons/fa";

const EducationalQualification = () => {
  return (
    <section data-aos="fade-up" data-aos-duration="2000" className="section flex flex-col pt-30 items-center">
      <div className="flex items-center gap-3 mb-8">
        <FaGraduationCap className="w-8 h-8 text-purple-500" />
        <h2 className="text-3xl font-semibold">Educational Qualification</h2>
      </div>
      <div className="p-4 md:p-8 xl:p-12 rounded-2xl bg-gradient-to-br from-pink-500/70 to-blue-600/70 text-center">
        <h3 className="text-xl font-medium mb-4">B.Sc. in Chemical Engineering</h3>
        <p className="text-lg">
          Bangladesh University of Engineering and Technology (BUET)
        </p>
      </div>
    </section>
  );
};

export default EducationalQualification;