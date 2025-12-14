import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import NexTalk from '../assets/NexTalk.png';
import WeatherAppImage from '../assets/Weather.png';
import AiToolsExp from '../assets/AiToolsExp.png'
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';

const Projects = () => {
  const projects = [
    {
      name: 'NexTalk',
      image: NexTalk,
      description: [
        'MERN stack real-time chat application with secure user authentication',
        'JWT-based login and registration system for protected access',
        'Real-time one-to-one and group messaging using Socket.io',
        'Typing indicators, online user status, and instant message delivery',
        'MongoDB database for scalable storage of users, chats, and messages'
      ],
      github: 'https://github.com/Prateek-02/NexTalk',
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
      github: 'https://github.com/Prateek-02/Web-dev-Projects/tree/main/Js%20Projects/Weather',
      live: 'https://prateek-02.github.io/WeatherAPP/',
    },
    {
      name: 'Ai Tools Explorer',
      image: AiToolsExp,
      description: [
        'AI Tools Explorer web app built using React, Tailwind CSS, and Supabase',
        'Enables users to discover AI tools across various categories with search and filter features',
        'Implements Supabase Auth for secure email/password and Google login',
        'Allows users to bookmark favorite tools for quick future access',
        'Plans to add user reviews, dark mode, and AI-based recommendations for personalized discovery'
      ],
      github: 'https://github.com/Prateek-02/Web-dev-Projects/tree/main/React/Ai%20Tools%20Explorer',
      live: 'https://aitoolsexp.netlify.app/',
    },
  ];

  const ProjectCard = ({ project, index }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const isEven = index % 2 === 0;

    return (
      <div ref={ref} className="relative flex items-center mb-20">
        {/* Timeline dot */}
        <motion.div
          className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-indigo-500 rounded-full border-4 border-gray-900 z-10 shadow-lg shadow-indigo-500/50"
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />

        {/* Project card */}
        <motion.div
          className={`w-full md:w-5/12 ${isEven ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'} relative z-10`}
          initial={{ 
            x: isEven ? -100 : 100, 
            opacity: 0 
          }}
          animate={isInView ? { 
            x: 0, 
            opacity: 1 
          } : { 
            x: isEven ? -100 : 100, 
            opacity: 0 
          }}
          transition={{ 
            duration: 0.6, 
            delay: 0.3,
            type: 'spring',
            stiffness: 100
          }}
        >
          <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/50">
            <img src={project.image} alt={project.name} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-3 text-indigo-400">{project.name}</h3>
              <ul className="text-gray-300 mb-4 list-disc list-inside">
                {project.description.map((point, idx) => (
                  <li key={idx} className="mb-1 text-sm">{point}</li>
                ))}
              </ul>
              <div className="flex justify-between items-center gap-4">
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
                {project.live && (
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
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    );
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
          className="text-4xl font-bold mb-16 text-center text-white relative"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-indigo-500"></span>
        </motion.h2>
        <div className="relative max-w-6xl mx-auto">
          {/* Continuous timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-indigo-500 via-purple-500 to-indigo-500 z-0 top-0"></div>
          
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;