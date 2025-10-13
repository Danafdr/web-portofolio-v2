"use client";
import Navigation from "./components/Navigation/navigation";
import HomePage from "./Pages/Home";
import AboutMe from "./Pages/About-Me";
import Projects from "./Pages/Projects";
import Timeline from "./Pages/Timeline"; // ✅ Corrected default import

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0A0A0A]">
      <Navigation 
        navigationitems="Home, About, Projects, Timeline"
      />
      <section id="home" className="container mx-auto h-screen">
        <HomePage />
      </section>
      <section id="about" className="container mx-auto h-screen">
        <AboutMe />
      </section>
      <section id="projects" className="container mx-auto h-screen">
        <Projects />
      </section>
      <section id="timeline" className="container mx-auto min-h-screen py-16">
        <Timeline />
      </section>
    </div>
  );
}
