import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import preview from "/src/assets/preview.png";
//import preview from "/assets/preview.png";

function Projects() {
  const projects = [
    {
      title: "Vehicle Rental System",
      description:
        "Full-featured MERN application with vehicle bookings, payment integration, and admin dashboard functionality.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      frontend: "https://onlinerentauto.netlify.app/",
      backend:
        "https://github.com/stanli206/Online-Vehicle-Rental-System_Backend.git",
      image: preview,
    },
    {
      title: "E-Commerce Platform",
      description:
        "Complete online store with product management, user authentication, cart functionality, and payment processing.",
      tags: ["Next.js", "MongoDB", "Redux", "Stripe"],
      frontend: "https://ecommerce-store.vercel.app",
      backend: "https://github.com/yourusername/ecommerce-app",
      image: "/images/ecommerce.jpg",
    },
    {
      title: "Task Management App",
      description:
        "Productivity application with task organization, team collaboration, and real-time updates.",
      tags: ["React", "Firebase", "Tailwind CSS", "Context API"],
      frontend: "https://task-manager-app.vercel.app",
      backend: "https://github.com/yourusername/task-manager",
      image: "/images/task-manager.jpg",
    },
    {
      title: "Social Media Dashboard",
      description:
        "Analytics dashboard for social media metrics with data visualization and user management.",
      tags: ["React", "Express", "MongoDB", "Chart.js"],
      frontend: "https://social-dashboard.vercel.app",
      backend: "https://github.com/yourusername/social-dashboard",
      image: "/images/social-dashboard.jpg",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-gray-800 via-purple-900 to-gray-900 text-white relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/dots.png')] bg-cover bg-center"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-teal-400">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Some of my featured MERN stack applications and personal projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 shadow-xl transition-all duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs bg-gray-700 text-teal-400 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.frontend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.backend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded"
                  >
                    <FaGithub /> Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
