import React from "react";
import { useInView } from "../hooks/useInView";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const socialLinks = [
  {
    icon: <FaGithub className="text-gray-900 text-2xl" />,
    href: "https://github.com/tushartugnait",
    label: "GitHub",
  },
  {
    icon: <FaLinkedin className="text-blue-700 text-2xl" />,
    href: "https://linkedin.com/in/tushartugnait",
    label: "LinkedIn",
  },
  {
    icon: <FaInstagram className="text-pink-500 text-2xl" />,
    href: "https://instagram.com/tushartugnait",
    label: "Instagram",
  },
  {
    icon: <MdEmail className="text-red-500 text-2xl" />,
    href: "mailto:tushartugnait@gmail.com",
    label: "Email",
  },
];

const Hero: React.FC = () => {
  const [ref, inView] = useInView();

  const handleContactScroll = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={ref}
      className={`w-full min-h-screen flex flex-col md:flex-row items-center justify-center bg-white px-0 md:px-8 py-16 transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="flex-1 flex flex-col items-center justify-center text-center md:text-left">
        <h1 className="text-6xl font-extrabold text-blue-700 mb-6 drop-shadow">
          Hi, I'm <span className="text-gray-900">Tushar Tugnait</span>
        </h1>
        <p className="text-2xl text-gray-700 mb-8">
          Software Engineer | Full Stack Developer | Problem Solver
        </p>
        <div className="flex flex-row gap-4 mb-8 justify-center md:justify-start">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="rounded-full bg-gray-100 hover:bg-blue-100 p-3 shadow transition"
            >
              {link.icon}
            </a>
          ))}
        </div>
        <div className="flex flex-row gap-4 justify-center md:justify-start">
          <a
            href="/Tushar_Tugnait - Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-blue-700 text-white font-bold rounded-full shadow-lg border border-blue-700 hover:bg-blue-800 transition-all duration-300"
          >
            Download Resume
          </a>
          <button
            onClick={handleContactScroll}
            className="inline-block px-8 py-3 bg-white text-blue-700 font-bold rounded-full shadow-lg border border-blue-700 hover:bg-blue-50 transition-all duration-300"
          >
            Contact Me
          </button>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <img
          src="https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif"
          alt="Developer Cartoon"
          className={`w-96 h-96 object-contain rounded-xl shadow-lg transition-all duration-700 ${
            inView ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        />
      </div>
    </section>
  );
};

export default Hero;