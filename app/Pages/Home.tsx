"use client";
import AnimatedContent from "../components/AnimatedContent/AnimatedContent";
import FadeContent from "../components/FadeContent/FadeContent";
import SplitText from "../components/SplitText/SplitText";
import RotatingText from "../components/RotatingText/RotatingText";
import BlurText from "../components/BlurText/BlurText";
import Beams from "../components/Beams/Beams";
import ProfileCard from "../components/ProfileCard/ProfileCard";

const handleAnimationComplete = () => {
  console.log('All letters have animated!');
  console.log('Animation completed!');
};

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0A0A0A]">
      <div className="absolute top-0 right-0 left-0 bottom-0 w-full h-full">
        <Beams
          beamWidth={3}
          beamHeight={25}
          beamNumber={5}
          lightColor="#ffffff"
          speed={2}
          noiseIntensity={1.50}
          scale={0.2}
          rotation={45}
        />
      </div>
      <div className="container mx-auto h-screen">
        <div className="grid grid-cols-12">
          <div className="col-span-6"> 
            <div className="flex items-center h-screen">
              <div className="flex flex-col gap-6">
                <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                  <AnimatedContent
                    distance={100}
                    direction="horizontal"
                    reverse={false}
                    duration={0.8}
                    ease="power3.out"
                    initialOpacity={0}
                    animateOpacity={true}
                    scale={1}
                    threshold={0.1}>
                      <div>
                      <SplitText
                        className="text-6xl font-semibold text-center"
                        text="Hello, I'm Danadirsha"
                        delay={100}
                        duration={0.6}
                        ease="power3.out"
                        splitType="chars"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-100px"
                        textAlign="center"
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <SplitText
                        text="I'm a"
                        className="text-5xl font-semibold text-center"
                        delay={100}
                        duration={1}
                        ease="power3.out"
                        splitType="chars"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-100px"
                        textAlign="center"/>
    
                      <RotatingText
                        texts={["Video Editor", "Web Developer", "UI/UX Designer", "Photographer", "Videographer", "Tech Enthusiast"]}
                        mainClassName="px-2 sm:px-2 md:px-3 text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg text-center text-5xl font-bold inline-block transition-all"
                        staggerFrom={"last"}
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-120%" }}
                        staggerDuration={0.025}
                        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                        transition={{ type: "spring", damping: 30, stiffness: 400 }}
                        rotationInterval={2000}
                      />
                    </div>
                  </AnimatedContent>
                </FadeContent>
                <div>
                  <BlurText
                    text="I'm a student at SMK Telkom Jakarta currently doing an Internship as a programmer and video editor. With 4+ years of editing and 3 years of
                    programming experience, I’m able to deliver quality work on time, meet client needs, and minimize revisions through clear communication and strong
                    attention to detail."
                    delay={150}
                    animateBy="words"
                    direction="top"
                    onAnimationComplete={handleAnimationComplete}
                    className="text-2xl mb-8"
                  />
                </div>
              </div>
            </div>
          </div> 
          <div className="col-span-6">
            <div className="flex items-center justify-center h-full w-full">
              <div className="flex flex-col gap-6">
                <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                  <AnimatedContent
                    distance={100}
                    direction="vertical"
                    reverse={false}
                    duration={5}
                    ease="power3.out"
                    initialOpacity={0}
                    animateOpacity={true}
                    scale={1}
                    threshold={0.1}>
                    <ProfileCard
                      avatarUrl="https://i.imgur.com/5PNkHvU.png"
                      grainUrl=""
                      name="Danadirsha"
                      title="Student"
                      handle="danafdr_"
                      status="Open to work"
                      contactText="Contact Me"
                      innerGradient="from-[#000000] to-[#434343]"
                      showUserInfo={true}
                      enableTilt={true}
                      onContactClick={() => window.open('https://instagram.com/danafdr_', '_blank')}
                    />
                  </AnimatedContent>
                </FadeContent>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Gradient overlay at the bottom for smooth transition */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-32 z-10">
        <div className="w-full h-full bg-gradient-to-b from-transparent to-[#0A0A0A] opacity-100" />
      </div>
    </div>
  );
}
