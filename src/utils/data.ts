// This file contains mock data that would typically come from a CMS or API

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  email?: string;
  linkedin?: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  rating: number;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

// Mock data to be used across components
export const services: Service[] = [
  {
    id: 1,
    title: 'Cognitive Assessment',
    description: 'Comprehensive evaluation to understand cognitive strengths and challenges, providing a foundation for personalized therapy plans.',
    icon: 'Brain',
  },
  {
    id: 2,
    title: 'Sensory Integration Therapy',
    description: 'Specialized techniques to help children process sensory information and develop appropriate responses to sensory stimuli.',
    icon: 'Puzzle',
  },
  {
    id: 3,
    title: 'Social Skills Development',
    description: 'Structured programs to enhance social interaction, communication, and relationship-building skills in group and individual settings.',
    icon: 'Users',
  },
  {
    id: 4,
    title: 'Emotional Regulation',
    description: 'Guidance in recognizing, understanding, and managing emotions effectively through evidence-based therapeutic approaches.',
    icon: 'Heart',
  },
  {
    id: 5,
    title: 'Parent Coaching',
    description: 'Empowering parents with strategies, techniques, and understanding to support their child's development and well-being.',
    icon: 'Lightbulb',
  },
  {
    id: 6,
    title: 'Communication Therapy',
    description: 'Specialized approaches to develop verbal and non-verbal communication skills, enhancing self-expression and understanding.',
    icon: 'MessageSquare',
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Ma. Jacqueline Iukisa',
    role: 'Analista do Comportamento Supervisora; Professora; e Sócia-Diretora de Finanças e Recursos Humanos',
    image: 'https://images.pexels.com/photos/5325840/pexels-photo-5325840.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    bio: 'Jacqueline tem ampla experiência em Análise do Comportamento e lidera as áreas de finanças e recursos humanos da Beehave.',
    email: 'empresabeehave@gmail.com',
  },
  {
    id: 2,
    name: 'Dra. Thais Guimarães',
    role: 'Analista do Comportamento Supervisora; Professora; e Sócia-Diretora de Operações e Marketing',
    image: 'https://i.imgur.com/Vu9B015.jpeg',
    bio: 'Thais é especialista em Análise do Comportamento e coordena as operações e estratégias de marketing da empresa.',
    email: 'empresabeehave@gmail.com',
  },
  {
    id: 3,
    name: 'Me. Luiz Felipe Alves',
    role: 'Analista do Comportamento Supervisor; Professor; Sócio',
    image: 'https://images.pexels.com/photos/5699516/pexels-photo-5699516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    bio: 'Luiz Felipe é Analista do Comportamento Supervisor com vasta experiência em docência e intervenções baseadas em ABA.',
    email: 'empresabeehave@gmail.com',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "The therapists at BeeHave have made such a difference in our son's life. Their patience, expertise, and genuine care have helped him develop skills we never thought possible.",
    author: "Parent of Alex, 8 years old",
    rating: 5
  },
  {
    id: 2,
    quote: "After struggling to find the right support for our daughter, BeeHave Psychology was a true blessing. The team's understanding of autism and personalized approach has transformed our family's daily life.",
    author: "Parent of Emma, 6 years old",
    rating: 5
  },
  {
    id: 3,
    quote: "The social skills group at BeeHave helped my son make friends for the first time. The therapists created such a supportive environment where he felt comfortable and accepted.",
    author: "Parent of Noah, 9 years old",
    rating: 5
  },
  {
    id: 4,
    quote: "Dr. Johnson and her team go above and beyond. They not only work with my child but take the time to educate and support our whole family. We've seen remarkable progress.",
    author: "Parent of Lily, 7 years old",
    rating: 5
  }
];

export const faqs: FAQ[] = [
  {
    id: 1,
    question: "What age groups do you work with?",
    answer: "We provide services for children and adolescents aged 2-18. Our therapeutic approaches are tailored to be developmentally appropriate for each age group."
  },
  {
    id: 2,
    question: "Do you accept insurance?",
    answer: "Yes, we accept most major insurance plans. Please contact our office to verify your specific coverage and benefits for psychological services."
  },
  {
    id: 3,
    question: "How long are therapy sessions?",
    answer: "Individual therapy sessions typically last 45-50 minutes. Initial evaluations and assessments may take longer, usually 1-2 hours depending on the complexity of needs."
  },
  {
    id: 4,
    question: "What is your approach to autism therapy?",
    answer: "We use evidence-based approaches including Cognitive Behavioral Therapy (CBT), Applied Behavior Analysis (ABA), and sensory integration techniques. Our approach is always personalized to each child's unique strengths, challenges, and interests."
  },
  {
    id: 5,
    question: "How do parents participate in the therapy process?",
    answer: "We believe strongly in family involvement. Parents receive regular updates, participate in family sessions, and learn strategies to support their child's development at home. We also offer parent coaching and education sessions."
  },
  {
    id: 6,
    question: "How do I know if my child needs an evaluation?",
    answer: "If you've noticed persistent difficulties with social interaction, communication, behavior, or sensory processing that impact daily functioning, an evaluation may be helpful. We offer free 15-minute phone consultations to discuss your concerns and determine if an assessment would be beneficial."
  }
];