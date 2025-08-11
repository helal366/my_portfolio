import React from 'react';
import { FaGraduationCap } from "react-icons/fa";

const EducationalQualification = () => {
    return (
        <section className="section p-8">
      <div className="flex items-center gap-3 mb-4">
        <FaGraduationCap className="w-8 h-8 text-yellow-400" />
        <h2 className="text-2xl font-semibold">Educational Qualification</h2>
      </div>
      <div className="pl-2">
        <h3 className="text-xl font-medium">B.Sc. in Chemical Engineering</h3>
        <p className="text-lg">
          Bangladesh University of Engineering and Technology (BUET)
        </p>
      </div>
    </section>
    );
};

export default EducationalQualification;