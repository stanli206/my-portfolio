import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaServer, FaDatabase, FaReact } from "react-icons/fa";

function About() {
  const skills = [
    {
      icon: <FaReact size={32} />,
      title: "Frontend",
      description: "React, Tailwind CSS",
    },
    {
      icon: <FaServer size={32} />,
      title: "Backend",
      description: "Node.js, Express, REST APIs",
    },
    {
      icon: <FaDatabase size={32} />,
      title: "Database",
      description: "MongoDB, MSSql",
    },
    {
      icon: <FaCode size={32} />,
      title: "Tools",
      description: "Git, Postman",//Docker, AWS, CI/CD
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>

      <div className="container mx-auto max-w-6xl z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-teal-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I'm a passionate full-stack developer specializing in the MERN
            stack, dedicated to creating exceptional digital experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 shadow-xl"
          >
            <h3 className="text-2xl font-semibold mb-6 text-teal-400">
              Who I Am
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              I'm a passionate web developer with 1.8 years of professional
              experience working with the .NET framework, and I recently
              completed a comprehensive MERN Stack Development course. This
              combination of backend and full-stack training has equipped me
              with a solid foundation in building and maintaining scalable web
              applications using technologies like React, Node.js, MongoDB, and
              .NET.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I have a strong knack for debugging, optimizing performance, and
              delivering clean, efficient code. I thrive both in independent
              roles and collaborative team environments. Outside of project
              work, I'm continuously enhancing my skills by exploring new
              technologies, contributing to open-source communities, and staying
              up-to-date with industry trends.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-gray-800/70 hover:bg-gray-700/70 p-6 rounded-lg border border-gray-700 transition-all duration-300 flex flex-col items-center text-center"
              >
                <div className="text-teal-400 mb-3">{skill.icon}</div>
                <h4 className="text-xl font-semibold mb-2">{skill.title}</h4>
                <p className="text-gray-400 text-sm">{skill.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
