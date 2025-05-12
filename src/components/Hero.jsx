import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import TypingEffect from "./TypingEffect";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-indigo-800 via-purple-900 to-pink-900 text-white flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated background elements | min-h-screen bg-gradient-to-r from-indigo-800 via-purple-800 to-pink-700 text-white flex items-center justify-center px-4*/}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-32 h-32 bg-teal-500 rounded-full filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-pink-500 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-between gap-12"
        >
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <TypingEffect
                text={[
                  "Hi, I'm stantilin..👋",
                  "I'm a MERN Stack Developer 💻",
                ]}
                speed={200}
                eraseSpeed={50}
                eraseDelay={3000}
              />
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              I build fast, responsive, and scalable web applications using
              MongoDB, Express, React, and Node.js. Passionate about creating
              elegant solutions to complex problems.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/Resume(stantlin).pdf"
                download
                className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-full transition-all duration-300 shadow-lg"
              >
                <FaFileDownload /> Download Resume
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="flex items-center gap-2 bg-transparent border-2 border-teal-600 text-teal-400 hover:bg-teal-900/30 px-6 py-3 rounded-full transition-all duration-300"
              >
                <HiOutlineMail /> Contact Me
              </motion.a>
            </div>

            <div className="mt-12 flex gap-6 justify-center md:justify-start">
              {[
                {
                  icon: <FaGithub size={24} />,
                  url: "https://github.com/stanli206",
                },
                {
                  icon: <FaLinkedin size={24} />,
                  url: "https://linkedin.com/in/stan01in",
                }, //www.linkedin.com/in/stan01in
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative md:w-1/2 flex justify-center"
          >
            <div className="relative">
              <img
                src="/110A9766-fotor-bg-remover-2025043012416.png"
                alt="Profile"
                className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-teal-500 shadow-xl"
              />
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="absolute -bottom-5 -right-5 bg-gray-800 p-3 rounded-full shadow-lg"
              >
                <span className="text-2xl">💻</span>
              </motion.div>
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="absolute -top-5 -left-5 bg-gray-800 p-3 rounded-full shadow-lg"
              >
                <span className="text-2xl">🚀</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
