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
        <h2 className="text-3xl font-semibold ">Education & Certificates</h2>
      </div>
        <p className="mb-8 text-gray-200">Academic background and core foundations.</p>
      <section className="flex flex-col  gap-5  text-gray-500">
        {degree && degree.map((deg, index)=>(
          <div key={index}
          className="educationCard">
          <h3 className="text-xl font-medium ">
            {deg.degree}
          </h3>
          <p className="text-lg mb-2">
            {deg.institution}
          </p>
          <div className="flex flex-wrap gap-3 justify-center text-xs">
            {deg.courses.map((course, index)=>(
              <div key={index}
              className="px-1 py-[2px] rounded bg-gray-200">
                  {course}
              </div>
            ))}
          </div>
        </div>
        ))}
        
      </section>
    </section>
  );
};

export default EducationalQualification;
