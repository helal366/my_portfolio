import { useEffect, useState } from "react";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  const [educationData, setEducationData] = useState([]);

  useEffect(() => {
    fetch("/data/education.json")
      .then((res) => res.json())
      .then((data) => setEducationData(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="section text-gray-200 py-16 px-4 md:px-10">
      {" "}
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 text-gray-200">
            <FaGraduationCap className="w-8 h-8 text-purple-500" />
            <h2 className="text-3xl font-semibold ">
              Education & Certificates
            </h2>{" "}
          </div>
          <p className="text-gray-200 mt-3 text-sm md:text-base">
            My academic journey and professional learning experience
          </p>
        </div>
        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {educationData.map((edu, index) => (
            <div
              key={index}
              // educationCard: bg-gradient-to-br from-green-300/70 to-teal-400/70 text-center transition-all duration-200 hover:translate-y-1 cursor-pointer
              className="bg-gradient-to-br from-green-300/70 to-teal-400/70 hover:border hover:border-gray-800 rounded-2xl p-6 shadow-md hover:shadow-lg transition duration-300 flex flex-col justify-between hover:-translate-y-1"
            >
              {/* Top */}
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-white">
                  {edu.degree}
                </h3>
                <p className="text-sm text-gray-400 mt-1">{edu.institution}</p>

                {/* Status Badge */}
                <span
                  className={`inline-block mt-3 text-xs px-3 py-1 rounded-full ${
                    edu.status === "Completed"
                      ? "bg-green-600/20 text-green-700"
                      : "bg-yellow-600/20 text-yellow-700"
                  }`}
                >
                  {edu.status}
                </span>

                {/* Courses */}
                <div className="mt-4">
                  <h4 className="text-sm font-medium text-gray-300 mb-2">
                    Key Topics:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((course, i) => (
                      <span
                        key={i}
                        className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-md"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom line */}
              <div className="mt-6 border-t border-gray-800 pt-4 text-xs text-gray-500">
                {edu.status === "Completed"
                  ? "Successfully completed"
                  : "In progress / Expected completion"}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

// import React, { useEffect, useState } from "react";
// import { FaGraduationCap } from "react-icons/fa";

// const EducationalQualification = () => {
//   const [degree, setDegree] = useState([]);
//   useEffect(() => {
//     fetch("/data/education.json")
//       .then((res) => res.json())
//       .then((data) => {
//         setDegree(data);
//       })
//       .catch((err) => console.error("Failed to fetch educations: ", err));
//   }, []);
//   console.log(degree);
//   return (
//     <section
//       data-aos="fade-up"
//       data-aos-duration="2000"
//       className="section flex flex-col pt-30 "
//     >
//       <div className="flex items-center gap-3 text-gray-200">
//         <FaGraduationCap className="w-8 h-8 text-purple-500" />
//         <h2 className="text-3xl font-semibold ">Education & Certificates</h2>
//       </div>
//         <p className="mb-8 text-gray-200">Academic background and core foundations.</p>
//       <section className="flex flex-col  gap-5  text-gray-500">
//         {degree && degree.map((deg, index)=>(
//           <div key={index}
//           className="educationCard">
//           <h3 className="text-xl font-medium ">
//             {deg.degree}
//           </h3>
//           <p className="text-lg mb-2">
//             {deg.institution}
//           </p>
//           <div className="flex flex-wrap gap-3 justify-center text-xs">
//             {deg.courses.map((course, index)=>(
//               <div key={index}
//               className="px-1 py-[2px] rounded bg-gray-200">
//                   {course}
//               </div>
//             ))}
//           </div>
//         </div>
//         ))}

//       </section>
//     </section>
//   );
// };

// export default EducationalQualification;
