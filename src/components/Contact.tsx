import React, { useState } from "react";
import { useInView } from "../hooks/useInView";
import SectionHeading from "./SectionHeading";

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [ref, inView] = useInView();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      ref={ref}
      className={`w-full flex flex-col items-center justify-center bg-white px-0 md:px-8 py-16 transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <SectionHeading>Reach Out To Me</SectionHeading>
      <div className="w-full flex flex-col md:flex-row items-center justify-center">
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="w-full max-w-xl">
            {submitted ? (
              <div className="bg-green-50 text-green-800 p-6 rounded-lg shadow-lg text-center border border-green-200">
                Thank you for reaching out! I'll get back to you soon.
              </div>
            ) : (
              <form className="bg-white rounded-lg shadow-lg p-6 space-y-4 border border-blue-200" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-900"
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-900"
                />
                <textarea
                  name="message"
                  required
                  placeholder="Your Message"
                  rows={5}
                  className="w-full px-4 py-2 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-900"
                />
                <button
                  type="submit"
                  className="w-full bg-blue-700 text-white py-2 rounded-lg font-bold hover:bg-blue-800 transition"
                >
                  Send Message
                </button>
              </form>
            )}
            <div className="mt-8 text-center text-gray-700">
              Or email me directly: <a href="mailto:tushartugnait@gmail.com" className="text-blue-700 underline font-bold">tushartugnait@gmail.com</a>
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