import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useInView } from "../hooks/useInView";
import SectionHeading from "./SectionHeading";

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [ref, inView] = useInView();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_a7kulfq", // Replace with your EmailJS service ID
        "template_77t6bvd", // Replace with your EmailJS template ID
        e.target as HTMLFormElement,
        "IYmVD-6vEth9P3c00" // Replace with your EmailJS public key
      )
      .then(() => setSubmitted(true))
      .catch(() => alert("Failed to send message. Please try again."));
  };

  return (
    <section
      ref={ref}
      className={`w-full flex flex-col items-center justify-center bg-white dark:bg-gray-950 px-0 md:px-8 py-16 transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <SectionHeading>Reach Out To Me</SectionHeading>
      <div className="w-full flex flex-col md:flex-row items-center justify-center">
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="w-full max-w-xl">
            {submitted ? (
              <div className="bg-green-50 dark:bg-green-900 text-green-800 dark:text-green-200 p-6 rounded-lg shadow-lg text-center border border-green-200 dark:border-green-700">
                Thank you for reaching out! I'll get back to you soon.
              </div>
            ) : (
              <form
                className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 space-y-4 border border-blue-200 dark:border-gray-700"
                onSubmit={handleSubmit}
              >
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border border-blue-300 dark:border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-200 dark:focus:ring-yellow-400 text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-900"
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border border-blue-300 dark:border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-200 dark:focus:ring-yellow-400 text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-900"
                />
                <textarea
                  name="message"
                  required
                  placeholder="Your Message"
                  rows={5}
                  className="w-full px-4 py-2 border border-blue-300 dark:border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-200 dark:focus:ring-yellow-400 text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-900"
                />
                <input
                    type="hidden"
                    name="time"
                    value={new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                />
                <button
                  type="submit"
                  className="w-full bg-blue-700 dark:bg-yellow-400 text-white dark:text-gray-900 py-2 rounded-lg font-bold hover:bg-blue-800 dark:hover:bg-yellow-500 transition"
                >
                  Send Message
                </button>
              </form>
            )}
            <div className="mt-8 text-center text-gray-700 dark:text-gray-300">
              Or email me directly:{" "}
              <a
                href="mailto:tushartugnait@gmail.com"
                className="text-blue-700 dark:text-yellow-400 underline font-bold"
              >
                tushartugnait02@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <img
            src="https://media.giphy.com/media/3o7TKMt1VVNkHV2PaE/giphy.gif"
            alt="Contact GIF"
            className={`w-80 h-80 object-contain rounded-xl shadow transition-all duration-700 ${
              inView ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;