export interface Testimonial {
  text: string;
  author: string;
  company: string;
  avatar?: string;
}

export interface ProjectStat {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: "Digital Product" | "Brand Identity" | "Spatial Design" | "Motion Design";
  description: string;
  longDescription: string;
  image: string;
  gallery: string[];
  role: string;
  year: string;
  client: string;
  tags: string[];
  stats: ProjectStat[];
  accentColor: string;
  accentBg: string;
  testimonial?: Testimonial;
  fullCaseStudy?: {
    challenge: string;
    approach: string;
    outcome: string;
  };
}

export interface SkillCategory {
  title: string;
  skills: { name: string; proficiency: number }[];
}

export interface Experience {
  year: string;
  role: string;
  company: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  deliverables: string[];
}
