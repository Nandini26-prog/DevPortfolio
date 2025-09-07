'use client';

import { useState, useEffect } from 'react';
import { Sun, Moon, MapPin, Globe, Clock, Play, Pause, SkipBack, SkipForward, Plus, MoreHorizontal } from 'lucide-react';
import { projects, expertises, roles, testimonials, blogs, experience, skills, sparks } from '@/lib/data';
import ProjectCard from '@/components/ProjectCard';
import ExpertiseCard from '@/components/ExpertiseCard';
//import TestimonialCard from '@/components/TestimonialCard';
import BlogCard from '@/components/BlogCard';
import BlogMoodboard from '@/components/BlogMoodboard';
import RandomSparkPopup from '@/components/RandomSparkPopup';
import PersonalityBadges from '@/components/PersonalityBadges';
import HorizontalTimeline from '@/components/HorizontalTimeline';
import { timeline } from '@/lib/timeline';


export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [currentTime, setCurrentTime] = useState('18:32');
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString('en-GB', { 
        hour: '2-digit', 
        minute: '2-digit',
        timeZone: 'Asia/Kolkata'
      });
      setCurrentTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-dark-bg text-light-text' : 'bg-white text-gray-900'}`}>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-dark-bg/80 backdrop-blur-sm border-b border-dark-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Theme Toggle */}
          <div className="flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-dark-card transition-colors"
            >
              {isDarkMode ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>
          </div>

          {/* Status Indicator */}
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-accent-green rounded-full"></div>
            <span className="text-sm text-muted-text">Available for Opportunities</span>
          </div>


          {/* Location and Time */}
                      <div className="flex items-center space-x-6 text-sm text-muted-text">
            <div className="flex items-center space-x-1">
              <MapPin className="w-4 h-4" />
              <span>DELHI, INDIA</span>
            </div>
            <div className="flex items-center space-x-1">
                  {/* Resume Button */}
      <a
        href="https://drive.google.com/file/d/1DJpyLwTWt1WjUOWGsQVius_Qc3UjmnG0/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="px-3 py-1 border border-light-text rounded hover:bg-light-text hover:text-dark-bg transition-colors"
      >
        Resume
      </a>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>{currentTime}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <div className="flex items-center justify-between">
            <div className="flex-1 max-w-2xl">
              <h1 className="text-5xl font-bold mb-4">Nandini Jain</h1>
              <h2 className="text-2xl text-muted-text mb-6">Software developer</h2>
              <p className="text-lg leading-relaxed text-muted-text">
              Namaste! 🛠️ Wild ideas → working products.  
              From full-stack apps to hackathon prototypes, I enjoy building things that actually make sense (and sometimes, just for fun).  
              <br></br>Still learning. Still shipping. Always curious.
              </p>
              <br></br>  <p className="text-sm text-muted-text">
              Btech CSE • 2022–2026 • 9.02/10
            </p>
            </div>
<div className="ml-12 relative">
  <div className="w-32 h-32 bg-dark-card rounded-full flex items-center justify-center border-2 border-dark-border overflow-hidden">
    <img
      src="/stylecrop.jpg"   // <-- put your initials image here
     //src="/VRimagecrop.jpg" 
     alt="Nandini Jain logo"
      className="w-full h-full object-cover"
    />
  </div>
  <div className="absolute -top-2 -left-2 w-4 h-4 bg-accent-green rounded-full"></div>
</div>

          </div>
        </section>

        {/* Quote Section */}
        <section className="max-w-4xl mx-auto px-6 py-16 text-center">
          {/* <div className="text-6xl text-light-text mb-8"></div> */}
          <blockquote className="text-xl text-muted-text leading-relaxed max-w-3xl mx-auto">
          "Mostly experimenting, occasionally succeeding, always learning."
          </blockquote>

        </section>

        {/* Expertises Section */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-dark-card border border-light-text rounded-full text-sm font-medium">
              EXPERTISES
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {expertises.map((expertise, index) => (
              <ExpertiseCard key={index} expertise={expertise} />
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-dark-card border border-light-text rounded-full text-sm font-medium">
              PROJECTS
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </section>

        {/* Current Roles Section */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-dark-card border border-light-text rounded-full text-sm font-medium">
              CURRENT ROLES
            </span>
          </div>
          <div className="space-y-6">
            {roles.map((role, index) => (
              <div key={index} className="bg-dark-card rounded-lg p-6 border border-dark-border card-hover">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">{role.title} | {role.company}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    role.status.toLowerCase().includes('open') 
                      ? 'bg-green-900/20 text-accent-green border border-accent-green' 
                      : 'bg-red-900/20 text-accent-red border border-accent-red'
                  }`}>
                    • {role.status.toUpperCase()}
                  </span>
                </div>
                <p className="text-muted-text">{role.copy}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Client Feedback Section */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <HorizontalTimeline milestones={timeline} />
          {/* <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-dark-card border border-light-text rounded-full text-sm font-medium">
              CLIENT FEEDBACK
            </span>
          </div>
          <div className="space-y-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div> */}
        </section>

        {/* Blog Moodboard Section */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-dark-card border border-light-text rounded-full text-sm font-medium">
              THOUGHTS & MUSINGS 📝
            </span>
          </div>
          <BlogMoodboard blogs={blogs} />
        </section>

        {/* Contact Section */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">Let's Connect!</h2>
            <p className="text-lg text-muted-text mb-8 max-w-2xl mx-auto">
              I'm always excited to meet new people in the tech community! Whether you want to collaborate on a project, share knowledge, or just have a friendly chat about technology, I'd love to hear from you! 
            </p>
         

<div className="flex flex-wrap justify-center gap-4">
  <a
    href="https://www.linkedin.com/in/nandini-jain-33100025b/"
    className="px-6 py-3 border border-light-text rounded-lg hover:bg-light-text hover:text-dark-bg transition-colors"
  >
    LinkedIn
  </a>
  <a
    href="mailto:nandini.nj26@gmail.com"
    className="px-6 py-3 border border-light-text rounded-lg hover:bg-light-text hover:text-dark-bg transition-colors"
  >
    Email
  </a>
  <a
    href="https://github.com/Nandini26-prog"
    className="px-6 py-3 border border-light-text rounded-lg hover:bg-light-text hover:text-dark-bg transition-colors"
  >
    GitHub
  </a>
</div>

          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-dark-border py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="mb-4">
            <div className="mb-6">
               <div className="text-5xl font-signature text-center mb-4">
                Nandini Jain
              </div>
              {/* <PersonalityBadges /> */}
            </div>
            <p className="text-muted-text">
              Copyright © 2025 — Made under dark room with bright eyes
            </p>
          </div>
          <p className="text-sm text-muted-text">nandinijain.dev</p>
        </div>
      </footer>

      {/* Random Spark Popup */}
      <RandomSparkPopup sparks={sparks} />

    </div>
  );
}