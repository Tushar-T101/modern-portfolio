import React from "react";

const SectionHeading: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="w-full flex flex-col items-center mb-12">
    <div className="relative w-full flex items-center justify-center">
      <hr className="absolute left-0 right-0 top-1/2 border-t border-blue-200 dark:border-gray-700 z-0" />
      <span className="relative z-10 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-8 py-2 rounded-lg text-2xl font-bold shadow-lg text-center border border-blue-200 dark:border-gray-700">
        {children}
      </span>
    </div>
  </div>
);

export default SectionHeading;