// Portfolio Component Props Types

export interface NavigationProps {
  items?: NavigationItem[];
  className?: string;
  position?: 'top' | 'floating';
}

export interface NavigationItem {
  href: string;
  label: string;
}

export interface HeroProps {
  name?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  backgroundGradient?: string;
  textColors?: {
    name: string;
    title: string;
    subtitle: string;
    description: string;
  };
  buttonColors?: {
    primary: string;
    secondary: string;
  };
}

export interface AboutProps {
  title?: string;
  description?: string | string[];
  skills?: Skill[];
  tools?: Tool[];
  colors?: {
    background: string;
    text: string;
    accent: string;
  };
}

export interface Skill {
  name: string;
  level: number;
}

export interface Tool {
  category: string;
  items: string[];
}

export interface ProjectsProps {
  title?: string;
  projects?: Project[];
  colors?: {
    background: string;
    text: string;
    accent: string;
  };
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  live?: string;
  image?: string;
}

export interface SkillsProps {
  title?: string;
  skills?: Skill[];
  tools?: Tool[];
  colors?: {
    background: string;
    text: string;
    accent: string;
  };
}

export interface ExperienceProps {
  title?: string;
  workExperience?: TimelineItem[];
  education?: TimelineItem[];
  colors?: {
    background: string;
    text: string;
    accent: string;
  };
}

export interface TimelineItem {
  title: string;
  description: string;
  year: string;
  isAbove?: boolean;
}

export interface ContactProps {
  title?: string;
  email?: string;
  location?: string;
  socialLinks?: SocialLink[];
  colors?: {
    background: string;
    text: string;
    accent: string;
  };
}

export interface SocialLink {
  name: string;
  url: string;
}

export interface FooterProps {
  text?: string;
  socialLinks?: SocialLink[];
  colors?: {
    background: string;
    text: string;
    accent: string;
  };
}
