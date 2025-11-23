import React, { useState, useEffect, useRef } from 'react';
import Button from '../componants/Button';
import TitleHeader from '../componants/TitleHeader';
//import ProfilePic from '../public/images/profilePic/IMG_0411.JPG'

// GlowCard Component
const GlowCard = ({ children, index }) => {
  const cardRefs = useRef([]);

  const handleMouseMove = (index) => (e) => {
    const card = cardRefs.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    angle = (angle + 360) % 360;

    card.style.setProperty('--start', angle + 60);
  };

  return (
    <div
      ref={(el) => (cardRefs.current[index] = el)}
      onMouseMove={handleMouseMove(index)}
      className="card card-border rounded-xl overflow-hidden"
    >
      <div className="glow" />
      {children}
    </div>
  );
};

const AboutMe = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Personal Information - Update these with your details
  const personalInfo = {
    name: "Madusha",
    title: "Full Stack Software Developer",
    location: "Sri Lanka",
    email: "lmmadushanadiranga@gmail.com",
    phone: "0721558920",
    
    // Add your photo URL here
    photoUrl: '/images/profilePic/IMG_0411.JPG',
    
    bio: [
      "I'm a passionate developer with over 1 years of experience in creating beautiful, functional, and user-friendly websites and applications. My journey in tech started with a curiosity about how things work, which quickly evolved into a love for building digital solutions.",
      "I specialize in full-stack development, with a strong focus on modern frameworks and technologies. I believe in writing clean, maintainable code and creating experiences that users love. When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or enjoying photography.",
      "I'm always excited to take on new challenges and collaborate with like-minded individuals to bring innovative ideas to life."
    ],

  };

  return (
    <div className="w-full bg-black text-white overflow-hidden" style={{ fontFamily: '"Mona Sans", sans-serif' }}>
        <div className="w-full h-full md:px-20 px-5">
          <TitleHeader
            title="About Me"
            sub="👋 Nice to meet you"
          />
        </div>
      {/* Main About Section */}
<section className="section-padding relative min-h-screen flex items-center mt-8">
        {/* Animated Background Effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div 
            className="absolute w-96 h-96 rounded-full blur-3xl opacity-20"
            style={{
              background: 'radial-gradient(circle, #62e0ff 0%, transparent 70%)',
              left: `${mousePosition.x - 192}px`,
              top: `${mousePosition.y - 192}px`,
              transition: 'all 0.3s ease-out'
            }}
          />
        </div>

        <div className="grid-12-cols items-center relative z-10 gap-y-10">
          {/* Text Content */}
          <div className="xl:col-span-7 col-span-1 space-y-6">

        
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              I'm <span className="bg-gradient-to-r from-[#62e0ff] via-[#fd5c79] to-[#6d45ce] bg-clip-text text-transparent">{personalInfo.name}</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl text-white-50 font-semibold">
              {personalInfo.title}
            </h2>

            <div className="flex flex-wrap gap-4 text-blue-50">
              <div className="flex items-center gap-2">
                <span>📍</span>
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <span>📧</span>
                <span>{personalInfo.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <span>📱</span>
                <span>{personalInfo.phone}</span>
              </div>
            </div>

            <div className="space-y-4 pt-4">
              {personalInfo.bio.map((paragraph, index) => (
                <p key={index} className="text-lg text-white-50 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

<div className="flex flex-wrap gap-4 pt-6"> 
    <a 
        href="/Resume/Resume.pdf" 
        download="Resume.pdf"
        
    >
        <Button 
            className="md:w-80 md:h-16 w-60 h-12 pointer-events-none" 
            id="button" 
            text="Download Resume"
        /> 
    </a>
</div>


          </div>
          
          {/* Photo with GlowCard */}
          <div className="xl:col-span-5 col-span-1">
            <div className="relative max-w-md mx-auto">
              <GlowCard index={0}>
                <div className="relative overflow-hidden aspect-square p-2">
                  <img 
                    src={personalInfo.photoUrl}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover rounded-lg transition-transform duration-500"
                  />
                  {/* Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none"></div>
                </div>
              </GlowCard>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#62e0ff]/20 rounded-full blur-2xl animate-pulse pointer-events-none"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#fd5c79]/20 rounded-full blur-2xl animate-pulse delay-75 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutMe;