"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FiExternalLink, FiGithub, FiX } from "react-icons/fi";

// Project data type
type Project = {
  id: number;
  title: string;
  subtitle: string;
  thumbnail: string;
  featuredImage: string;
  description: string;
  techStack: string[];
  duration: string;
  teamSize: string;
  completionDate: string;
  overview: string;
  features: string[];
  challenges?: string[];
  outcome: string;
  liveUrl?: string;
  codeUrl?: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "BlendEasy",
    subtitle: "Generate and customize beautiful gradients with ease",
    thumbnail: "https://imgur.com/MK2JASC.png",
    featuredImage: "https://imgur.com/MK2JASC.png",
    description: "BlendEasy is a sleek and interactive web application that allows users to generate, customize, and manipulate CSS gradients in real time. Designed with both developers and designers in mind, it offers intuitive controls and a modern UI for seamless gradient creation.",
    techStack: ["HTML5", "JavaScript", "CSS", "Figma"],
    duration: "1 Week",
    teamSize: "1 developer",
    completionDate: "March 2025",
    overview: "This solo project was built to simplify the process of designing CSS gradients. Users can lock colors, adjust direction, control the blend ratio, and flip gradients instantly. It's perfect for quickly prototyping or exploring unique visual combinations.",
    features: [
      "Live gradient preview with smooth transitions",
      "Custom color inputs with lock functionality",
      "Adjustable blend ratio and angle control",
      "Flip gradient horizontally or vertically",
      "Generate random gradient pairs with one click"
    ],
    challenges: [
      "Implementing smooth gradient transitions using inline styles",
      "Maintaining color lock state while generating new combinations",
      "Creating a responsive and visually consistent UI"
    ],
    outcome: "BlendEasy is now a fully responsive and user-friendly tool used by designers and developers to generate CSS gradients more efficiently. The project also helped improve my UI/UX and JavaScript skills.",
    liveUrl: "https://blendeasy.netlify.app/",
    codeUrl: "https://github.com/Danafdr/Gradient-Generator"
  },
  {
    id: 2,
    title: "Beat-Em Up Game",
    subtitle: "A 3D Beat-Em Up Game Using Unity",
    thumbnail: "https://imgur.com/nqpEUhy.png",
    featuredImage: "https://imgur.com/nqpEUhy.png", 
    description: "a 3D beat-em-up game developed using Unity, featuring engaging combat mechanics, and character choice. The game combines classic arcade-style gameplay with modern graphics and sound design.",
    techStack: ["Unity", "C#", "Blender", "Python"],
    duration: "6 months",
    teamSize: "3 developers",
    completionDate: "May 2025",
    overview: "Developed a 3D beat-em-up game using Unity, featuring engaging combat mechanics, character customization, and multiplayer support. The game combines classic arcade-style gameplay with modern graphics and sound design.",
    features: [
      "Player-controlled characters with unique abilities",
      "Dynamic combat system with combos and special moves",
      "Weapon and character options",
      "Simple But Engaging AI for enemy characters",
      "Multiple Weapons",
    ],
    outcome: "With the help of Unity and C#, I created a fully functional beat-em-up game that provides an engaging multiplayer experience. The project enhanced my skills in game development, 3D modeling, and teamwork.",
    liveUrl: "https://www.mediafire.com/file/xm8f6miczzdw1j5/Beat%2527em_Up_Game.rar/file",
    codeUrl: "https://github.com/Danafdr/Beat-Em-Up-Game"
  },
  {
    id: 3,
    title: "School Management System",
    subtitle: "A Simple School Management System Using Firebase",
    thumbnail: "https://i.imgur.com/24NyVC2.png",
    featuredImage: "https://i.imgur.com/24NyVC2.png",
    description: "School Management System is a web application designed to streamline student management tasks for educational institutions. Built with Flutter and Firebase, it allows administrators to easily add, update, delete, and view student records.",
    techStack: ["Flutter", "Firebase", "Dart"],
    duration: "2 months",
    teamSize: "1 People",
    completionDate: "March 2025",
    overview: "Designed a drag-and-drop portfolio builder that helps creatives showcase their work effectively.",
    features: [
      "Add New Students With Details",
      "Update Students Information",
      "Delete Students Information",
      "View Students"
    ],
    challenges: [
      "Connect The Frontend to Firebase",
      "Fixing UI/UX Issues",
      "UI Didnt Render Properly"
    ],
    outcome: "Successfully created a functional school management system that allows for easy student management and data handling.",
    liveUrl: "#",
    codeUrl: "https://github.com/Danafdr/data_sekolah"
  }
];

const ProjectShowcase = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen]);

  // Close modal on ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

  return (
    <section className="py-16 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Project Showcase
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Explore my latest projects combining technical expertise with creative solutions
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 10px 30px rgba(59, 130, 246, 0.2)"
              }}
              transition={{ 
                type: "spring", 
                stiffness: 300,
                damping: 15
              }}
              className="bg-white/5 border border-white/20 backdrop-blur-sm 
                         shadow-[0_4px_16px_rgba(0,0,0,0.2)] rounded-2xl p-5 cursor-pointer
                         transition-all duration-300"
              onClick={() => openModal(project)}
            >
              {/* Thumbnail - Only show if URL exists */}
              {project.thumbnail && (
                <div className="aspect-video rounded-xl overflow-hidden mb-5">
                  <img 
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              )}
              
              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              
              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, index) => (
                  <motion.span
                    key={index}
                    className="px-3 py-1.5 bg-white/10 text-white rounded-full text-xs"
                    whileHover={{ 
                      scale: 1.1,
                      boxShadow: "0 0 12px rgba(59, 130, 246, 0.7)"
                    }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 400, 
                      damping: 10 
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
              
              {/* Description */}
              <p className="text-white opacity-90 text-sm">{project.description}</p>
            </motion.div>
          ))}
        </div>
        
        {/* Project Modal - Fixed to screen */}
        <AnimatePresence>
        {isModalOpen && selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'tween', duration: 0.2, ease: 'easeOut' }}
              className="bg-white/5 border border-white/20 backdrop-blur-xl 
                         shadow-[0_0_60px_rgba(59,130,246,0.3)] rounded-2xl 
                         max-w-200 max-h-150 overflow-y-auto 
                         fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                         scrollbar-hide"
              onClick={(e) => e.stopPropagation()}
            >
                {/* Sticky Header */}
                <div className="sticky top-0 z-10 bg-gradient-to-b from-[#0f172a]/90 to-transparent backdrop-blur-md py-4 px-6 flex justify-between items-center border-b border-white/20">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      {selectedProject.title}
                    </h3>
                    <p className="text-blue-400 mt-1">{selectedProject.subtitle}</p>
                  </div>
                  <motion.button
                    whileHover={{ rotate: 90, scale: 1.1 }}
                    className="text-white/70 hover:text-white p-2 transition-colors"
                    onClick={closeModal}
                  >
                    <FiX size={24} />
                  </motion.button>
                </div>
                
                <div className="p-6 md:p-8">
                  {/* Featured Image - Only show if URL exists */}
                  {selectedProject.featuredImage && (
                    <div className="aspect-video rounded-xl overflow-hidden mb-8">
                      <img 
                        src={selectedProject.featuredImage}
                        alt={selectedProject.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  
                  {/* Metadata */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div className="p-4 bg-white/10 rounded-xl">
                      <h4 className="text-blue-400 text-sm font-medium">Duration</h4>
                      <p className="text-white">{selectedProject.duration}</p>
                    </div>
                    <div className="p-4 bg-white/10 rounded-xl">
                      <h4 className="text-blue-400 text-sm font-medium">Team Size</h4>
                      <p className="text-white">{selectedProject.teamSize}</p>
                    </div>
                    <div className="p-4 bg-white/10 rounded-xl">
                      <h4 className="text-blue-400 text-sm font-medium">Completion</h4>
                      <p className="text-white">{selectedProject.completionDate}</p>
                    </div>
                  </div>
                  
                  {/* Tech Stack */}
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-white mb-4">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.map((tech, index) => (
                        <span 
                          key={index} 
                          className="px-4 py-2 bg-white/10 text-white rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Project Details */}
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-3">Project Overview</h4>
                      <p className="text-white/90">{selectedProject.overview}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {selectedProject.features.map((feature, index) => (
                          <li key={index} className="flex items-start text-white/90">
                            <span className="text-blue-400 mr-2">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {selectedProject.challenges && (
                      <div>
                        <h4 className="text-xl font-semibold text-white mb-3">Technical Challenges</h4>
                        <ul className="space-y-2">
                          {selectedProject.challenges.map((challenge, index) => (
                            <li key={index} className="flex items-start text-white/90">
                              <span className="text-blue-400 mr-2">•</span>
                              {challenge}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-3">Project Outcome</h4>
                      <p className="text-white/90">{selectedProject.outcome}</p>
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4 mt-8">
                    {selectedProject.liveUrl && selectedProject.liveUrl !== '#' && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-full"
                      >
                        <FiExternalLink size={18} />
                        View Live Project
                      </motion.a>
                    )}
                    
                    {selectedProject.codeUrl && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={selectedProject.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-full border border-white/20"
                      >
                        <FiGithub size={18} />
                        View Source Code
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectShowcase;