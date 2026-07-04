import React, { useEffect, useState } from "react";
import { FaGraduationCap } from "react-icons/fa";

const EducationalQualification = () => {
  const [degree, setDegree] = useState([]);
  useEffect(() => {
    fetch("/data/education.json")
      .then((res) => res.json())
      .then((data) => {
        setDegree(data);
      })
      .catch((err) => console.error("Failed to fetch educations: ", err));
  }, []);
  console.log(degree);
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="2000"
      className="section flex flex-col pt-30 "
    >
      <div className="flex items-center gap-3 text-gray-200">
        <FaGraduationCap className="w-8 h-8 text-purple-500" />
        <h2 className="text-3xl font-semibold ">Educational Qualification</h2>
      </div>
        <p className="mb-8 text-gray-200">Academic background and core foundations.</p>
      <section className="flex flex-col  gap-5">
        {degree && degree.map((deg, index)=>(
          <div key={index}
          className="educationCard">
          <h3 className="text-xl font-medium ">
            {deg.degree}
          </h3>
          <p className="text-lg">
            {deg.institution}
          </p>
        </div>
        ))}
        
      </section>
    </section>
  );
};

export default EducationalQualification;
