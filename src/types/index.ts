// Common type definitions for the application

export interface FilterOption {
  id: string;
  label: string;
  value: string;
}

export interface ExperienceCenter {
  id: string;
  city: string;
  region: string;
  address: string;
  phone: string;
}

export interface Program {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  imageUrl: string;
}

export interface Internship extends Program {
  stipend: string;
  duration: string;
  type: 'stipend' | 'freeship' | 'paid';
  company: string;
  location: string;
}

export interface Job extends Program {
  salary: string;
  company: string;
  location: string;
  interestArea: string;
}

export interface Bootcamp extends Program {
  qualification: string;
  goal: string;
  duration: string;
}

export interface PostGradCourse extends Program {
  type: 'certificate' | 'diploma' | 'masters';
  duration: string;
  fee: string;
  emiDetails: string;
}

export interface GlobalProgram extends Program {
  type: 'immersion' | 'certificate' | 'conference' | 'pathways';
  country: string;
  duration: string;
}

export interface ExamInfo {
  id: string;
  name: string;
  description: string;
  examDate: string;
  registrationDate: string;
  eligibility: string;
  website: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  imageUrl: string;
}