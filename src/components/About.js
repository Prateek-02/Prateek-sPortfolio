import React from 'react';
import myImg from '../assets/myImg.jpg';
import { FaCode, FaLaptopCode, FaGraduationCap } from 'react-icons/fa';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';

const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden bg-gray-900">
      {/* Abstract background */}
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
        <h2 className="text-4xl font-bold mb-12 text-center text-white relative">
          About Me
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-indigo-500"></span>
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <img
              src={myImg}
              alt="Prateek Raj"
              className="rounded-full w-64 h-64 object-cover shadow-lg border-4 border-indigo-500 transform hover:scale-105 hover:shadow-xl hover:shadow-indigo-400 transition duration-300"
            />
          </div>
          <div className="md:w-2/3 md:pl-12">
            <p className="text-lg mb-6 text-gray-300 leading-relaxed">
              Hi, I'm <span className="font-semibold text-indigo-400">Prateek Raj</span>, a passionate 3rd-year student aspiring to become a Software Engineer. My journey in tech has been an exciting adventure of continuous learning and growth.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="flex items-center bg-gray-800 p-4 rounded-lg shadow-indigo-900 transform hover:scale-105 transition duration-300">
                <FaCode className="text-3xl text-indigo-400 mr-3" />
                <span className="text-gray-200">Web Development</span>
              </div>
              <div className="flex items-center bg-gray-800 p-4 rounded-lg shadow-indigo-900 transform hover:scale-105 transition duration-300">
                <FaLaptopCode className="text-3xl text-indigo-400 mr-3" />
                <span className="text-gray-200">Software Engineering</span>
              </div>
              <div className="flex items-center bg-gray-800 p-4 rounded-lg shadow-indigo-900 transform hover:scale-105 transition duration-300">
                <FaGraduationCap className="text-3xl text-indigo-400 mr-3" />
                <span className="text-gray-200">Data Structures & Algorithms</span>
              </div>
            </div>
            <p className="text-lg mb-6 text-gray-300 leading-relaxed">
              From mastering HTML, CSS, and JavaScript to diving deep into C++ and DSA, I've built a strong foundation for creating efficient, scalable solutions. My current focus is on expanding my web development skills and conquering complex algorithmic challenges.
            </p>
            <p className="text-lg mb-6 text-gray-300 leading-relaxed">
              Driven by an insatiable curiosity and a desire to make a difference, I'm always eager to explore new technologies and methodologies. I believe in the power of code to transform ideas into impactful digital experiences.
            </p>
            <p className="text-lg font-semibold text-indigo-400">
              Let's connect and collaborate to build the future of technology together!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;