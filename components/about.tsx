"use client";

import { motion } from "framer-motion";
import { Card } from "/Users/Axioo Pongo/Documents/Sekolah/React Js/portofolio/components/Ui/card";
import { AboutProps, Skill, Tool } from "@/types/portfolio";
import DotGrid from "@/app/components/DotGrid/DotGrid";

export default function About({
  title = "About Me",
  description = [
    "Hi, I'm Danadirsha, but you can call me Dana — a passionate video editor and programmer currently studying at Stark Tahoma Jakarta. With over 4 years of experience in video editing and 3 years in programming, I specialize in creating dynamic visuals and intuitive digital experiences.",
    "I'm currently doing an internship as a programmer and video editor, where I collaborate on projects that require both creative and technical skills. I'm known for my ability to deliver high-quality work ahead of deadlines and tailor content to meet client needs.",
    "Whether it's a smooth transition in a modern graphic or a clean, functional piece of code, I enjoy bringing ideas to life through both visuals and logic."
  ],
  skills = [
    { name: "React/Next.js", level: 85 },
    { name: "TypeScript", level: 75 },
    { name: "JavaScript", level: 80 },
    { name: "Python", level: 75 },
    { name: "Video Editor", level: 95 },
    { name: "UI/UX Design", level: 95 }
  ],
  tools = [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
    { category: "Video Editor", items: ["DaVinci Resolve", "Premiere Pro", "After Effects", "CapCut"] },
    { category: "UI/UX Design", items: ["Figma", "Adobe Illustrator", "Adobe Photoshop", "Canva"] },
  ],
  colors = {
    text: "text-white",
    accent: "text-blue-400",
    border: "border-white/20",
    skillBg: "bg-white/10",
    skillFill: "bg-blue-400",
    toolBg: "bg-white/10"
  }
}: AboutProps) {
  return (
    <section id="about" className="py-12 px-4 relative">
      {/* Content Container */}
      <div className="max-w-5xl mx-auto">
        <div className="
          bg-white/10 backdrop-blur-xl 
          border border-white/20 
          shadow-[0_8px_32px_rgba(0,0,0,0.3),0_0_0_1px_rgba(255,255,255,0.1)]
          rounded-2xl
          p-8
        ">
          {/* Top Row - About Me and Skills */}
          <div className="flex flex-col lg:flex-row gap-8 mb-12 items-stretch">
            {/* About Me Section */}
            <div className="flex-1">
              <h4 className={`text-xl font-semibold mb-6 ${colors.text}`}>About Me</h4>
              <Card className={`
                p-6 border ${colors.border}
                bg-white/5 backdrop-blur-sm
                shadow-[0_4px_16px_rgba(0,0,0,0.2)]
                h-full
              `}>
                <div className="space-y-3">
                  {description.map((paragraph, index) => (
                    <p key={index} className={`${colors.text} leading-relaxed opacity-90`}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </Card>
            </div>

            {/* Skills Section */}
            <div className="flex-1">
              <h4 className={`text-xl font-semibold mb-6 ${colors.text}`}>Technical Skills</h4>
              <Card className={`
                p-6 border ${colors.border}
                bg-white/5 backdrop-blur-sm
                shadow-[0_4px_16px_rgba(0,0,0,0.2)]
                h-full
              `}>
                <div className="space-y-5">
                  {skills.map((skill, index) => (
                    <div key={skill.name} className="mb-5 last:mb-0">
                      <div className="flex justify-between items-center mb-3">
                        <span className={`font-medium ${colors.text}`}>{skill.name}</span>
                        <span className={`${colors.accent}`}>{skill.level}%</span>
                      </div>
                      <div className={`w-full ${colors.skillBg} rounded-full h-2.5 overflow-hidden`}>
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ 
                            duration: 1,
                            delay: index * 0.2,
                            ease: "easeOut"
                          }}
                          className={`${colors.skillFill} h-full rounded-full`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>

          {/* Tools Section */}
          <div className="mt-16">
            <h4 className={`text-lg font-semibold mb-4 ${colors.text}`}>Tools & Technologies</h4>
            <Card className={`
              p-4 border ${colors.border}
              bg-white/5 backdrop-blur-sm
              shadow-[0_4px_16px_rgba(0,0,0,0.2)]
            `}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {tools.map((toolGroup) => (
                  <div key={toolGroup.category} className="space-y-3">
                    <h5 className={`font-medium text-sm ${colors.text}`}>{toolGroup.category}</h5>
                    <div className="flex flex-wrap gap-2">
                      {toolGroup.items.map((tool) => (
                        <motion.span
                          key={tool}
                          initial={{ opacity: 0.9 }}
                          whileHover={{ opacity: 1, scale: 1.05 }}
                          className={`px-3 py-1.5 ${colors.toolBg} rounded-full ${colors.text} text-xs`}
                        >
                          {tool}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}