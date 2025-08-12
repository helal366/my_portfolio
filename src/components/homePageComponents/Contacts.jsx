import React from 'react';
import { FaEnvelope, FaGraduationCap, FaWhatsapp, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


const Contacts = () => {
    return (
        <section className='section'>
            <div className="flex items-center gap-3 mb-4">
                <FaEnvelope className="w-8 h-8 text-purple-500" />
                <h2 className="text-2xl font-semibold">Contact Information</h2>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-6 flex-wrap">
                <a
                    href="https://wa.me/8801786112996"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contactCss text-green-600"
                >
                    <FaWhatsapp className="w-6 h-6" />
                    <span className="font-medium">WhatsApp</span>
                </a>

                <a
                    href="mailto:helal56876@gmail.com"
                    className="contactCss text-red-500"
                >
                    <MdEmail className="w-6 h-6" />
                    <span className="font-medium">Email</span>
                </a>

                <a
                    href="https://www.linkedin.com/in/helal-sarker/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contactCss text-blue-700"
                >
                    <FaLinkedin className="w-6 h-6" />
                    <span className="font-medium">LinkedIn</span>
                </a>

                <a
                    href="https://github.com/helal366"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contactCss text-gray-800 "
                >
                    <FaGithub className="w-6 h-6" />
                    <span className="font-medium">GitHub</span>
                </a>

                <a
                    href="https://x.com/Helal568768"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contactCss text-sky-500"
                >
                    <FaTwitter className="w-6 h-6" />
                    <span className="font-medium">Twitter</span>
                </a>
            </div>
        </section>
    );
};

export default Contacts;