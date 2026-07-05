import { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ContactMe = () => {
  const [copied, setCopied] = useState(false);
  const phoneNumber = "+8801786112996";
  const copyToClipboard = () => {
    navigator.clipboard.writeText(phoneNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <section id="contact" className="section text-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
                <FaEnvelope className="w-8 h-8 text-purple-500" />
                <h2 className="text-3xl font-semibold">Contact Me</h2>
            </div>
          <p className="text-gray-200 mt-3">
            Have a project in mind or want to collaborate? Let’s talk.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Side - Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Get in touch</h3>

            <p className="text-gray-200">
              I’m always open to discussing new opportunities, creative ideas,
              or partnerships. Feel free to reach out!
            </p>

            <div className="space-y-4">
              {/* email */}
              
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=helalskr77@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="contactCss text-green-200"
              >
                <MdEmail className="w-6 h-6" />
                <span className="font-medium">Email</span>
              </a>
              {/* call */}

              <a
                href={`tel:${phoneNumber}`}
                className="contactCss text-green-400 flex items-center gap-2 cursor-pointer"
                onClick={(e) => {
                  // For desktop fallback, prevent default and copy number
                  if (!navigator.userAgent.match(/Mobi|Android/i)) {
                    e.preventDefault();
                    copyToClipboard();
                  }
                }}
                title="Click to call or copy number"
              >
                <FaPhoneAlt className="w-6 h-6" />
                <span className={`font-medium ${copied ? "text-red-600" : ""}`}>
                  {copied ? "Copied!" : "Contact"}
                </span>
              </a>

              {/* whats app */}
              <a
                href="https://wa.me/8801786112996"
                target="_blank"
                rel="noopener noreferrer"
                className="contactCss text-[#0dedd3]"
              >
                <FaWhatsapp className="w-6 h-6" />
                <span className="font-medium">WhatsApp</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4 text-xl">
              <a
                href="https://github.com/helal366"
                target="_blank"
                rel="noopener noreferrer"
                className="socialLinks hover:text-primary"
                id="github"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/helal-sarker/"
                target="_blank"
                rel="noopener noreferrer"
                className="socialLinks hover:text-primary"
                id="linkedin"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Side - Form */}
          <form className="bg-pink-500/20 p-6 rounded-xl shadow-md space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full text-gray-700"
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full text-gray-700"
              required
            />

            <textarea
              placeholder="Your Message"
              className="textarea textarea-bordered w-full h-32 text-gray-700"
              required
            ></textarea>

            <button className="btn btn-accent w-full">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;

// import React, { useState } from 'react';
// import { FaEnvelope, FaGraduationCap, FaWhatsapp, FaLinkedin, FaGithub, FaTwitter, FaPhoneAlt } from "react-icons/fa";
// import { MdContacts, MdEmail } from "react-icons/md";

// const Contacts = () => {
//     const [copied, setCopied] = useState(false);

//     const phoneNumber = '+8801786112996';

// const copyToClipboard = () => {
//     navigator.clipboard.writeText(phoneNumber);
//     setCopied(true);
//     setTimeout(() => setCopied(false), 2000);
// };
//     return (
//         <section data-aos="fade-up" data-aos-duration="2000" className='section'>
            // <div className="flex items-center gap-3 mb-4">
            //     <FaEnvelope className="w-8 h-8 text-purple-500" />
            //     <h2 className="text-3xl font-semibold">Contact Me</h2>
            // </div>

//             <div className="flex flex-col sm:flex-row sm:items-center gap-6 flex-wrap ">
// <a
//     href={`tel:${phoneNumber}`}
//     className="contactCss text-green-700 flex items-center gap-2 cursor-pointer"
//     onClick={(e) => {
//         // For desktop fallback, prevent default and copy number
//         if (!navigator.userAgent.match(/Mobi|Android/i)) {
//             e.preventDefault();
//             copyToClipboard();
//         }
//     }}
//     title="Click to call or copy number"
// >
//     <FaPhoneAlt className="w-6 h-6" />
//     <span className={`font-medium ${copied ? 'text-red-600' : ''}`}>{copied ? 'Copied!' : 'Contact'}</span>
// </a>
// <a
//     href="https://wa.me/8801786112996"
//     target="_blank"
//     rel="noopener noreferrer"
//     className="contactCss text-[#075E54]"
// >
//     <FaWhatsapp className="w-6 h-6" />
//     <span className="font-medium">WhatsApp</span>
// </a>

//                 <a
//                     href="mailto:helalskr77@gmail.com"
//                     className="contactCss text-red-500"
//                 >
//                     <MdEmail className="w-6 h-6" />
//                     <span className="font-medium">Email</span>
//                 </a>

//             </div>

//             <div className='mt-8 flex flex-col gap-3'>
//                 <div>
//                     <span className="font-medium text-green-700">Contact: </span> <span>+8801786112996</span>
//                 </div>
//                 <div>
//                     <span className="font-medium text-[#075E54]">WhatsApp: </span> <span>+8801786112996</span>
//                 </div>

//                 <div>
//                     <span className="font-medium text-red-600">Email: </span> <span>helalskr77@gmail.com</span>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Contacts;
