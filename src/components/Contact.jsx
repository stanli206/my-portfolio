import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaPaperPlane, 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram
} from 'react-icons/fa';

function Contact() {
  return (
    <section 
      id="contact"
      className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 text-white relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/waves.svg')] bg-cover bg-center"></div>
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
            Get In <span className="text-teal-400">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-6 text-teal-400">Contact Information</h3>
            
            <div className="space-y-6">
              {[
                // { icon: <FaMapMarkerAlt size={20} />, text: "123 Developer Street, Code City" },
                { icon: <FaPhone size={20} />, text: "+91 9487675545" },
                { icon: <FaEnvelope size={20} />, text: "stanli867@gmail.com" }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="text-teal-400 mt-1">{item.icon}</div>
                  <p className="text-gray-300">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <h4 className="text-xl font-semibold mb-4 text-teal-400">Connect With Me</h4>
              <div className="flex gap-6">
                {[
                  { icon: <FaGithub size={24} />, url: "https://github.com/stanli206", name: "GitHub" },
                  { icon: <FaLinkedin size={24} />, url: "https://linkedin.com/in/stan01in", name: "LinkedIn" },
                  // { icon: <FaTwitter size={24} />, url: "https://twitter.com", name: "Twitter" },
                  { icon: <FaInstagram size={24} />, url: "https://www.instagram.com/stan_206/", name: "Instagram" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, scale: 1.1 }}
                    className="text-gray-300 hover:text-teal-400 transition-all duration-300"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-6 text-teal-400">Send Me a Message</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
                    placeholder=""
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
                    placeholder=""
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
                  placeholder=""
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows="5"
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
                  placeholder="Hello, I'd like to discuss..."
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg transition-all"
              >
                <FaPaperPlane /> Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;