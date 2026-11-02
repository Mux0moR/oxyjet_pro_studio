export type ProjectCategory = 'all' | 'web' | 'ai' | 'ecommerce' | 'saas';

export interface ProjectMetric {
  label: string;
  value: string;
  trend?: string;
}

export interface Project {
  id: string;
  title: string;
  tag: string;
  category: ProjectCategory;
  categoryLabel: string;
  client: string;
  duration: string;
  badge: string;
  shortDescription: string;
  fullDescription: string;
  challenge: string;
  solution: string;
  architectureHighlights: string[];
  metrics: ProjectMetric[];
  techStack: string[];
  imageGradient: string;
  liveUrl?: string;
  quote?: {
    text: string;
    author: string;
    role: string;
  };
}

export interface ServicePackage {
  id: string;
  title: string;
  badge?: string;
  isPopular?: boolean;
  priceFrom: string;
  duration: string;
  description: string;
  features: string[];
  recommendedFor: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  metric: string;
  projectTitle: string;
}

export interface CalculatorState {
  projectType: string;
  designTier: string;
  timeline: string;
  features: string[];
}
