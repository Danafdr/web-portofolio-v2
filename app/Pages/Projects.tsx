"use client";

import FadeContent from "../components/FadeContent/FadeContent";
import AnimatedContent from "../components/AnimatedContent/AnimatedContent";
import ProjectShowcase from "../../components/project-comp";

const handleAnimationComplete = () => {
  console.log('All letters have animated!');
  console.log('Animation completed!');
};

export default function Home() {
  return (
    <div>
      <div className="flex flex-col gap-16 py-16">
        {/* Project Showcase with animations */}
        <FadeContent 
          blur={true} 
          duration={1000} 
          easing="ease-out" 
          initialOpacity={0}
        >
          <AnimatedContent
            distance={50}
            direction="vertical"
            reverse={false}
            duration={0.8}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity={true}
            scale={1}
            threshold={0.1}
            onComplete={handleAnimationComplete}
          >
            <div className="px-4">
              <ProjectShowcase />
            </div>
          </AnimatedContent>
        </FadeContent>
      </div>
    </div>
  )
}