import React, { useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import DeveloperModel from './DeveloperModel';

const Home = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  const toggleContactForm = () => {
    setShowContactForm(!showContactForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted');
    setShowContactForm(false);
  };

  return (
    <section id="home" className="min-h-screen flex items-center bg-black relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <Canvas>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          {[...Array(200)].map((_, i) => (
            <Sphere
              key={i}
              position={[
                Math.random() * 40 - 20,
                Math.random() * 40 - 20,
                Math.random() * 40 - 20
              ]}
              args={[0.1, 16, 16]}
            >
              <meshStandardMaterial color={`hsl(${Math.random() * 360}, 50%, 50%)`} />
            </Sphere>
          ))}
        </Canvas>
      </div>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center relative z-10">
        <div className="md:w-1/2 text-white animate-fadeIn">
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Hi, I'm <span className="text-blue-400">Prateek Raj</span>
          </h1>
          <h2 className="text-3xl mb-8">
            I am a{' '}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              <Typewriter
                words={['Web Developer', 'Coder', 'Cricketer']}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h2>
          <button 
            onClick={toggleContactForm}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105 shadow-lg text-xl"
          >
            Get In Touch
          </button>
        </div>
        <div className="md:w-1/2 h-96 mt-12 md:mt-0 animate-float">
          <Canvas camera={{ position: [0, 0, 5] }}>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[-2, 5, 2]} intensity={1} />
            <DeveloperModel />
          </Canvas>
        </div>
      </div>
      {showContactForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-900 p-8 rounded-lg shadow-xl w-full max-w-md text-white">
            <h3 className="text-2xl font-bold mb-4">Contact Me</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-300 font-bold mb-2">Name</label>
                <input type="text" id="name" name="name" required className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-300 font-bold mb-2">Email</label>
                <input type="email" id="email" name="email" required className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white" />
              </div>
              <div className="mb-4">
                <label htmlFor="description" className="block text-gray-300 font-bold mb-2">Description</label>
                <textarea id="description" name="description" rows="4" required className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"></textarea>
              </div>
              <div className="flex justify-end">
                <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300">Submit</button>
                <button type="button" onClick={toggleContactForm} className="ml-4 text-gray-400 hover:text-gray-200 font-bold py-2 px-4 rounded-full transition duration-300">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;