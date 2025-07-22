import React from "react";
import SectionHeading from "./SectionHeading";

const projects = [
	{
		name: "Nocode-Lowcode AI Platform @ Navikenz",
		description:
			"Built a platform to let non-technical users configure and deploy AI agents using a drag-and-drop UI. Created a centralized orchestrator for managing agent logic and dynamic task assignment. Improved automation and integration for enterprise users across workflows.",
		tech: ["Python", "FastAPI", "Langchain", "AWS", "Docker", "PostgreSQL"],
		role: "Full Stack Developer",
		// link: "https://github.com/tushartugnait/distributed-kv-store",
	},
	{
		name: "J.A.R.V.I.S. AI Assistant",
		description:
			"Built a voice-based AI assistant capable of answering coding, mathematical, and general queries. Integrated NLP, CV2 for facial authorization, and OpenAI for natural response generation.",
		tech: ["Python", "OpenAI", "CV2", "Speech Recognition", "Text-to-Speech"],
		role: "Full Stack Developer",
		link: "https://github.com/tushartugnait/portfolio",
	},
	{
		name: "Personal Portfolio",
		description:
			"Modern, responsive portfolio built with React, TypeScript, and TailwindCSS. Features auto-deployment via GitHub Actions.",
		tech: ["React", "TypeScript", "TailwindCSS", "GitHub Actions"],
		role: "Full Stack Developer",
		link: "https://github.com/tushartugnait/portfolio",
	},
	{
		name: "Football Video Analysis System ",
		description:
			"Designed a system to analyze football match videos using OpenCV and clustering algorithms for tactical insights. Delivered real-time visualizations to enhance coach decision-making.",
		tech: ["Python", "OpenCV", "Scikit-learn", "Matplotlib"],
		role: "Data Science Engineer",
		// link: "https://github.com/tushartugnait/leetcode-solutions",
	},
	{
		name: "E-Commerce Web App",
		description:
			"Developed a modern, responsive online storefront with Vite + React and deployed via Vercel.",
		tech: ["JavaScript", "React", "TailwindCSS", "Vite", "Vercel"],
		role: "Full Stack Developer",
		// link: "https://github.com/tushartugnait/leetcode-solutions",
	},
];

const stickyOffset = 110; // px, offset for sticky stacking
const cardSpacing = 60; // px, space between stacked cards

const Projects: React.FC = () => (
	<section id="projects" className="relative z-50 my-12 lg:my-24 bg-white">
		<div className="sticky top-10 z-10">
			<SectionHeading>Projects</SectionHeading>
		</div>
		<div className="pt-24">
			<div className="flex flex-col gap-6" style={{ paddingBottom: `${stickyOffset + cardSpacing}px` }}>
				{projects.map((proj, idx) => (
					<div
						key={proj.name}
						className="sticky-card w-full mx-auto max-w-2xl sticky"
						style={{ top: `${stickyOffset + idx * cardSpacing}px`, zIndex: 10 + idx }}
					>
						<div className="box-border flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.08)] transition-all duration-[0.5s] bg-white border border-gray-200">
							<div className="relative rounded-lg w-full">
								{/* Gradient lines */}
								<div className="flex flex-row">
									<div className="h-[1px] w-full bg-gradient-to-r from-transparent via-blue-300 to-blue-100"></div>
									<div className="h-[1px] w-full bg-gradient-to-r from-blue-100 to-transparent"></div>
								</div>
								{/* Header */}
								<div className="px-4 lg:px-8 py-3 lg:py-5 relative">
									<div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
										<div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-blue-400"></div>
										<div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-blue-200"></div>
										<div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-200"></div>
									</div>
									<p className="text-center ml-10 text-blue-700 text-base lg:text-xl font-semibold">
										{proj.name}
									</p>
								</div>
								{/* Code-like body */}
								<div className="overflow-hidden border-t-[2px] border-gray-200 px-4 lg:px-8 py-4 lg:py-8 bg-white">
									<code className="font-mono text-xs md:text-sm lg:text-base text-gray-900">
										<div>
											<span className="mr-2 text-blue-600">const</span>
											<span className="mr-2 text-gray-900">project</span>
											<span className="mr-2 text-blue-600">=</span>
											<span className="text-gray-400">&#123;</span>
										</div>
										<div>
											<span className="ml-4 lg:ml-8 mr-2 text-gray-900">name:</span>
											<span className="text-gray-400">'</span>
											<span className="text-blue-700">{proj.name}</span>
											<span className="text-gray-400">',</span>
										</div>
										<div className="ml-4 lg:ml-8 mr-2">
											<span className="text-gray-900">tools:</span>
											<span className="text-gray-400"> [</span>
											{proj.tech.map((tech, i) => (
												<span key={i}>
													<span className="text-blue-700">{tech}</span>
													<span className="text-gray-400">
														{i < proj.tech.length - 1 ? ", " : ""}
													</span>
												</span>
											))}
											<span className="text-gray-400">],</span>
										</div>
										<div>
											<span className="ml-4 lg:ml-8 mr-2 text-gray-900">myRole:</span>
											<span className="text-blue-600">{proj.role}</span>
											<span className="text-gray-400">,</span>
										</div>
										<div className="ml-4 lg:ml-8 mr-2">
											<span className="text-gray-900">Description:</span>
											<span className="text-gray-600"> {proj.description}</span>
											<span className="text-gray-400">,</span>
										</div>
										<div>
											<span className="ml-4 lg:ml-8 mr-2 text-gray-900">link:</span>
											<a
												href={proj.link}
												target="_blank"
												rel="noopener noreferrer"
												className="text-blue-600 underline"
											>
												'{proj.link}'
											</a>
											<span className="text-gray-400">,</span>
										</div>
										<div>
											<span className="text-gray-400">&#125;;</span>
										</div>
									</code>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	</section>
);

export default Projects;