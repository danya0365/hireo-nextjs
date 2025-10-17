export interface LandingCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  featured: boolean;
}

export interface LandingFreelancer {
  id: string;
  name: string;
  role: string;
  rating: number;
  reviewCount: number;
  completedProjects: number;
  avatar: string;
  categories: string[];
}

export interface LandingTestimonial {
  id: string;
  quote: string;
  company: string;
  person: string;
  role: string;
}

export interface LandingMetric {
  id: string;
  label: string;
  value: string;
  subLabel: string;
}

export interface LandingPackage {
  id: string;
  name: string;
  target: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

export interface LandingBlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  readTime: string;
}

export interface LandingFAQ {
  id: string;
  question: string;
  answer: string;
}

export interface LandingMasterData {
  categories: LandingCategory[];
  freelancers: LandingFreelancer[];
  testimonials: LandingTestimonial[];
  metrics: LandingMetric[];
  packages: LandingPackage[];
  blogPosts: LandingBlogPost[];
  faqs: LandingFAQ[];
}

export type LandingHeroStats = Pick<LandingMetric, "id" | "label" | "value">;
