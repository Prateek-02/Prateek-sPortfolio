import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaJava, FaCode, FaReact } from 'react-icons/fa';
import { SiCplusplus } from 'react-icons/si';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';

const Skills = () => {
  const skills = [
    { name: 'HTML', icon: FaHtml5, color: 'text-orange-500' },
    { name: 'CSS', icon: FaCss3Alt, color: 'text-blue-500' },
    { name: 'JavaScript', icon: FaJs, color: 'text-yellow-500' },
    { name: 'C', icon: SiCplusplus, color: 'text-blue-700' },
    { name: 'C++', icon: SiCplusplus, color: 'text-blue-600' },
    { name: 'DSA', icon: FaCode, color: 'text-green-600' },
    { name: 'Java', icon: FaJava, color: 'text-red-500' },
    { name: 'React', icon: FaReact, color: 'text-blue-400' },
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden bg-black">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <Canvas>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          {[...Array(100)].map((_, i) => (
            <Sphere
              key={i}
              position={[
                Math.random() * 20 - 10,
                Math.random() * 20 - 10,
                Math.random() * 20 - 10
              ]}
              args={[0.1, 16, 16]}
            >
              <meshStandardMaterial color={`hsl(${Math.random() * 360}, 50%, 50%)`} />
            </Sphere>
          ))}
        </Canvas>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold mb-12 text-center text-white relative">
          My Skillset
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-indigo-500"></span>
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center transform transition duration-300 hover:scale-110">
              <div className={`w-24 h-24 rounded-lg bg-white shadow-lg flex items-center justify-center mb-3 ${skill.color} transition-all duration-300 hover:shadow-xl hover:shadow-indigo-300 hover:rotate-[360deg]`}>
                <skill.icon className="text-5xl" />
              </div>
              <span className="text-base font-medium text-white">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;