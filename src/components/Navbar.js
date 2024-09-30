import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';

const Navbar = () => {
  const [showEmail, setShowEmail] = useState(false);

  const toggleEmail = () => {
    setShowEmail(!showEmail);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black shadow-lg overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <Canvas>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          {[...Array(50)].map((_, i) => (
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
      <div className="container mx-auto px-6 py-5 flex justify-between items-center relative z-10">
        <div className="text-3xl font-bold text-white">Welcome to Prateek's Portfolio</div>
        <ul className="flex space-x-6">
          {['Home', 'About', 'Skills', 'Projects'].map((item) => (
            <li key={item} className="transition-transform duration-300 ease-in-out hover:scale-110">
              <Link
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                offset={-70} // Adjust this value to fine-tune the scroll position
                className="text-xl text-white hover:text-blue-400 cursor-pointer transition-colors duration-300"
              >
                {item}
              </Link>
            </li>
          ))}
          <li className="transition-transform duration-300 ease-in-out hover:scale-110">
            <button
              onClick={toggleEmail}
              className="text-xl text-white hover:text-blue-400 cursor-pointer transition-colors duration-300"
            >
              Contact
            </button>
          </li>
        </ul>
      </div>
      {showEmail && (
        <div className="text-center py-2 bg-white text-purple-500 font-semibold relative z-10">
          Prateekrajgrd74@gmail.com
        </div>
      )}
    </nav>
  );
};

export default Navbar;