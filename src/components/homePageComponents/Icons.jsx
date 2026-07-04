import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";

import {
  SiTailwindcss,
  SiReactrouter,
  SiMongodb,
  SiFirebase,
  SiNetlify,
  SiVercel,
  SiTypescript,
  SiPostgresql,
  SiStripe,
  SiNextdotjs,
  SiRedux,
  SiExpress,
} from "react-icons/si";

const Icons = () => {
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="2000"
      className="section flex flex-col pt-30 items-center"
    >
      <div className="grid grid-cols-4 md:grid-cols-6 gap-6 text-4xl">
        {/* Frontend */}
        <FaHtml5 title="HTML5" />
        <FaCss3Alt title="CSS3" />
        <FaJs title="JavaScript" />
        <SiTailwindcss title="Tailwind CSS" />
        <FaReact title="React" />
        <SiReactrouter title="React Router" />

        {/* Backend */}
        <FaNodeJs title="Node.js" />
        <SiExpress title="Express.js" />

        {/* Database */}
        <SiMongodb title="MongoDB / Mongoose" />
        <SiPostgresql title="PostgreSQL" />

        {/* Tools & Services */}
        <SiFirebase title="Firebase" />
        <SiNetlify title="Netlify" />
        <SiVercel title="Vercel" />
        <SiStripe title="Stripe" />

        {/* Other */}
        <SiTypescript title="TypeScript" />
        <SiNextdotjs title="Next.js" />
        <SiRedux title="Redux" />
      </div>
    </section>
  );
};

export default Icons;
