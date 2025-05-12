import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaAws, FaDocker } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiTailwindcss, SiTypescript, SiJavascript, SiGraphql } from 'react-icons/si';

function Skills() {
  const skills = [
    { name: "React", icon: <FaReact size={28} />, level: 90, color: "text-blue-400" },
    { name: "Node.js", icon: <FaNodeJs size={28} />, level: 85, color: "text-green-500" },
    { name: "Express", icon: <SiExpress size={28} />, level: 80, color: "text-gray-300" },
    { name: "MongoDB", icon: <SiMongodb size={28} />, level: 85, color: "text-green-600" },
    { name: "JavaScript", icon: <SiJavascript size={28} />, level: 90, color: "text-yellow-400" },
    // { name: "TypeScript", icon: <SiTypescript size={28} />, level: 75, color: "text-blue-600" },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={28} />, level: 95, color: "text-teal-400" },
    // { name: "GraphQL", icon: <SiGraphql size={28} />, level: 70, color: "text-pink-600" },
    { name: "Git", icon: <FaGitAlt size={28} />, level: 85, color: "text-orange-500" },
    // { name: "AWS", icon: <FaAws size={28} />, level: 65, color: "text-yellow-500" },
    // { name: "Docker", icon: <FaDocker size={28} />, level: 70, color: "text-blue-500" },
    // { name: "SQL", icon: <FaDatabase size={28} />, level: 75, color: "text-blue-300" }
  ];

  return (
    <section 
      id="skills"
      className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 text-white relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/circuit-board.svg')] bg-cover bg-center"></div>
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
            My <span className="text-teal-400">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Technologies I've worked with and my proficiency in each
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 shadow-lg flex flex-col items-center transition-all duration-300"
            >
              <div className={`mb-3 ${skill.color}`}>{skill.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
              <div className="w-full bg-gray-700 rounded-full h-2">
                {/* <div 
                  className={`bg-teal-500 h-2 rounded-full`}
                  style={{ width: `${skill.level}%` }}
                ></div> */}
              </div>
              {/* <span className="text-xs text-gray-400 mt-1">{skill.level}%</span> */}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;