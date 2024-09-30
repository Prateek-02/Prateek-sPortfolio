import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import CertificateVerificationImage from '../assets/Certificate verification.png';
import WeatherAppImage from '../assets/Weather.png';
import ChatAppImage from '../assets/ChatApp.png';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';

const Projects = () => {
  const projects = [
    {
      name: 'Certificate Verification System',
      image: CertificateVerificationImage,
      description: [
        'MERN stack web application for secure certificate management',
        'Admin Dashboard for uploading and managing certificate data',
        'Student portal for quick certificate retrieval using unique IDs',
        'Features include data validation, secure login, and user-friendly interface',
        'MongoDB database for efficient data storage and retrieval'
      ],
      github: 'https://github.com/user/project1',
      live: 'https://project1.com'
    },
    {
      name: 'Weather App',
      image: WeatherAppImage,
      description: [
        'Real-time weather update application built with HTML, CSS, and JavaScript',
        'Fetches current weather data from a reliable API',
        'Displays temperature, humidity, wind speed, and weather conditions',
        'Responsive design for seamless use on desktop and mobile devices',
        'User-friendly interface with search functionality for different locations'
      ],
      github: 'https://github.com/user/project2',
      live: 'https://project2.com'
    },
    {
      name: 'Anonymous Chat Application',
      image: ChatAppImage,
      description: [
        'Real-time anonymous chat app using Node.js, Socket.io, and MongoDB',
        'Allows users to join and chat without registration for privacy',
        'Implements Socket.io for instant messaging and real-time updates',
        'Uses MongoDB to store chat history and manage active rooms',
        'Responsive design with HTML, CSS, and JavaScript for all devices'
      ],
      github: 'https://github.com/user/project3',
      live: 'https://project3.com'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const projectVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100
      }
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <Canvas>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          {[...Array(200)].map((_, i) => (
            <Sphere
              key={i}
              position={[
                Math.random() * 20 - 10,
                Math.random() * 20 - 10,
                Math.random() * 20 - 10
              ]}
              args={[0.05, 16, 16]}
            >
              <meshStandardMaterial color={`hsl(${Math.random() * 360}, 50%, 50%)`} />
            </Sphere>
          ))}
        </Canvas>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center text-white relative"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-indigo-500"></span>
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project, index) => (
            <motion.div 
              key={project.name}
              className="w-full"
              variants={projectVariants}
            >
              <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
                <img src={project.image} alt={project.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3 text-indigo-400">{project.name}</h3>
                  <ul className="text-gray-300 mb-4 list-disc list-inside">
                    {project.description.map((point, index) => (
                      <li key={index} className="mb-1">{point}</li>
                    ))}
                  </ul>
                  <div className="flex justify-between">
                    <motion.a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center text-gray-300 hover:text-indigo-400 transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaGithub className="mr-2" /> GitHub
                    </motion.a>
                    <motion.a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center text-gray-300 hover:text-indigo-400 transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaExternalLinkAlt className="mr-2" /> Live Demo
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;