import React from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  return (
    <section id="connect">
      <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 text-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/waves.svg')] bg-cover bg-center"></div>
        </div>

        <div className="container mx-auto px-4 py-12 z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4 text-teal-400">
                Contact Details
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  {/* <div className="text-teal-400 mt-1">
                    <FaPhone size={16} />
                  </div> */}
                  {/* <p className="text-gray-300">+91 9487675545</p> */}
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-teal-400 mt-1">
                    <FaEnvelope size={16} />
                  </div>
                  <p className="text-gray-300">stanli867@gmail.com</p>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4 text-teal-400">
                Connect With Me
              </h3>
              <div className="flex gap-4 justify-center md:justify-start">
                {[
                  {
                    icon: <FaGithub size={20} />,
                    url: "https://github.com/stanli206",
                    name: "GitHub",
                  },
                  {
                    icon: <FaLinkedin size={20} />,
                    url: "https://linkedin.com/in/stan01in",
                    name: "LinkedIn",
                  },
                  // { icon: <FaInstagram size={20} />, url: "https://www.instagram.com/stan_206/", name: "Instagram" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, scale: 1.1 }}
                    className="text-gray-300 hover:text-teal-400 transition-all duration-300"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 shadow-lg flex flex-col items-center justify-center"
            >
              <p className="text-gray-300 text-center">
                &copy; {new Date().getFullYear()} Stanli. All rights reserved.
              </p>
              <p className="text-gray-400 text-sm mt-2 text-center">
                {/* Crafted with passion and React */}
              </p>
            </motion.div>
          </div>

          {/* Bottom divider */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 pt-6 border-t border-gray-700 text-center text-gray-400 text-sm"
          >
            {/* <p>Made with ❤️ for great web experiences</p> */}
          </motion.div>
        </div>
      </footer>
    </section>
  );
}

export default Footer;
