"use client";
import { useEffect, useState } from 'react'; // Add useState hook
import AnimatedContent from "../components/AnimatedContent/AnimatedContent";
import FadeContent from "../components/FadeContent/FadeContent";
import About from "../../components/about";

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

export default function AboutMe() {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    // Set body styles globally
    document.body.style.overflowX = 'hidden';
    document.body.style.backgroundColor = '#0A0A0A';
    
    // Create scrollbar styling
    const style = document.createElement('style');
    style.innerHTML = `
      /* Hide scrollbar during animation */
      body.animating::-webkit-scrollbar {
        display: none;
      }
      
      /* Permanent dark scrollbar styling */
      ::-webkit-scrollbar {
        width: 0;
        background: transparent;
      }
      
      /* Optional: Style vertical scrollbar when visible */
      ::-webkit-scrollbar:vertical {
        width: 8px;
      }
      
      ::-webkit-scrollbar-thumb {
        background-color: #333;
        border-radius: 4px;
      }
      
      /* Firefox scrollbar styling */
      html {
        scrollbar-width: thin;
        scrollbar-color: #333 #0A0A0A;
      }
    `;
    document.head.appendChild(style);

    // Add animating class to body
    document.body.classList.add('animating');
    
    // Set timeout to remove animating class after animation completes
    const timer = setTimeout(() => {
      document.body.classList.remove('animating');
      setIsAnimating(false);
    }, 1000); // Match this to your animation duration

    return () => {
      clearTimeout(timer);
      document.body.style.overflowX = '';
      document.body.style.backgroundColor = '';
      document.body.classList.remove('animating');
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className={`relative min-h-screen overflow-x-hidden bg-[#0A0A0A] ${isAnimating ? 'overflow-y-hidden' : ''}`}>
      <div className="pointer-events-none absolute top-0 left-0 w-full h-50 z-10">
        <div className="w-full h-full bg-gradient-to-b from-[#0A0A0A] to-transparent opacity-50" />
      </div>
      
      <div>
        <FadeContent 
          blur={true} 
          duration={1000} 
          easing="ease-out" 
          initialOpacity={0}
          onComplete={() => setIsAnimating(false)}
        >
          <AnimatedContent
            distance={100}
            direction="vertical"
            reverse={false}
            duration={0.8}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity={true}
            scale={1}
            threshold={0.1}
          >
            <div>
              <About/>
            </div>
          </AnimatedContent>
        </FadeContent>
      </div>
      
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-50 z-10">
        <div className="w-full h-full bg-gradient-to-t from-[#0A0A0A] to-transparent opacity-50" />
      </div>
    </div>
  )
}