"use client";
import AnimatedContent from "../components/AnimatedContent/AnimatedContent";
import FadeContent from "../components/FadeContent/FadeContent";
import SplitText from "../components/SplitText/SplitText";
import RotatingText from "../components/RotatingText/RotatingText";
import BlurText from "../components/BlurText/BlurText";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import Squares from "../components/Squares/Squares";
import ExpandableCardDemo from "@/components/expandable-card-demo-standard";

const handleAnimationComplete = () => {
  console.log('All letters have animated!');
  console.log('Animation completed!');
};

export default function AboutMe() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0A0A0A]">
      <div className="top-0 right-0 left-0 bottom-0 w-full h-full">
        <ExpandableCardDemo/>
      </div>
    </div>
  )
}