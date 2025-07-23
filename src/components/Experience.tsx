import React, { useState } from "react";
import { useInView } from "../hooks/useInView";
import SectionHeading from "./SectionHeading";

const companyLogos: Record<string, string> = {
	Navikenz: "src/assets/Navikenz.png",
	Incubit: "src/assets/Incubit.png",
};

const headerColors: Record<string, string> = {
	Navikenz: "bg-blue-700 dark:bg-blue-900",
	Incubit: "bg-blue-600 dark:bg-blue-800",
};

const experiences = [
	{
		company: "Navikenz",
		role: "Software Developer",
		period: "Jan 2024 - Present",
		location: "Noida, India",
		details: [
			"Developed Nocode-Lowcode AI platform, enabling non-technical users to build AI agents with drag-and-drop functionality, ultimately reducing the time and effort required to make such agentic solutions by 80-90%.",
			"Worked on Involved in client interactions with Johnson & Johnson, Air India, and Pfizer, gathering requirements and converting their GenAI-driven business goals into scalable technical solutions systems, improving reliability and performance.",
			"Worked with JnJ team on AMP Studio, a platform for building AI agents, enhancing user experience and functionality.",
		],
	},
	{
		company: "Incubit",
		role: "Software Development Intern",
		period: "Nov 2022 - Jul 2023",
		location: "Remote",
		details: [
			"Collaborated on building AirMedz, an e-commerce platform for a Philippines-based client.",
			"Conducted client discussions, gathered requirements, and implemented business objectives into technical solutions.",
			"Delivered a responsive and scalable online pharmacy solution using modern web technologies.",
		],
	},
];

const Experience: React.FC = () => {
	const [ref, inView] = useInView();
	const [expanded, setExpanded] = useState<number | null>(null);

	return (
		<section
			ref={ref}
			className={`w-full min-h-screen flex flex-col md:flex-col items-center justify-center bg-white dark:bg-gray-950 px-0 md:px-8 py-16 transition-all duration-700 ${
				inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
			}`}
		>
			<div className="flex-1 flex flex-col justify-center">
				<SectionHeading>Experience</SectionHeading>
				<div className="w-full grid md:grid-cols-2 gap-8">
					{experiences.map((exp, idx) => {
						const isExpanded = expanded === idx;
						return (
							<div
								key={idx}
								className="rounded-xl shadow-lg border border-blue-200 dark:border-gray-700 bg-white dark:bg-gray-900 flex flex-col overflow-hidden transition-transform duration-500 hover:scale-105"
							>
								{/* Card Header */}
								<div
									className={`h-36 flex items-center justify-center ${headerColors[exp.company] || "bg-blue-200 dark:bg-blue-900"}`}
								>
									<span className="text-xl font-bold text-white">
										{exp.company}
									</span>
								</div>
								{/* Logo */}
								<div className="flex justify-center -mt-10 mb-4">
									<div className="bg-white dark:bg-gray-900 rounded-full shadow-lg flex items-center justify-center w-20 h-20 border-4 border-white dark:border-gray-900">
										<img
											src={
												companyLogos[exp.company] ||
												"https://via.placeholder.com/40"
											}
											alt={exp.company}
											className="w-18 h-18 rounded-full object-cover"
										/>
									</div>
								</div>
								{/* Card Body */}
								<div className="flex flex-col items-center px-6 pb-6 text-center">
									<h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-1">
										{exp.role}
									</h3>
									<span className="text-sm text-gray-600 dark:text-gray-300 mb-1">
										{exp.period}
									</span>
									<span className="text-sm text-gray-400 dark:text-gray-500 mb-3">
										{exp.location}
									</span>
									<div
										className={`relative w-full ${
											isExpanded ? "" : "max-h-32 overflow-hidden"
										} transition-all duration-300`}
									>
										<ul className="list-disc text-left text-gray-700 dark:text-gray-300 ml-4 mb-2">
											{exp.details.map((d, i) => (
												<li key={i}>{d}</li>
											))}
										</ul>
										{!isExpanded && (
											<div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white dark:from-gray-900 to-transparent pointer-events-none" />
										)}
									</div>
									<button
										className="mt-2 text-blue-600 dark:text-yellow-400 hover:underline font-medium"
										onClick={() =>
											setExpanded(isExpanded ? null : idx)
										}
									>
										{isExpanded ? "Show Less" : "Read More"}
									</button>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Experience;