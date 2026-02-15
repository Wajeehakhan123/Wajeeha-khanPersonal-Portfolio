
import type { ReactElement } from 'react';
import React from 'react';
import { CodeIcon, DeviceMobileIcon, ColorSwatchIcon, PencilAltIcon, SearchCircleIcon } from './components/icons';

export interface Service {
  icon: ReactElement;
  title: string;
  description: string;
  tags: string[];
}

export interface PortfolioItem {
  category: 'Web Application' |  'Graphic Designing' | 'Brand Identity';
  title: string;
  description: string;
  date: string;
  link: string;
  image: string;  
}
export interface MobileApp {
  image: string;
  title: string;
  description: string;
  
}

export interface WorkExperience {
  role: string;
  company: string;
  duration: string;
  location: string;
  remote?: boolean;
  tags: string[];
  type: 'Apprenticeship' | 'Internship';
}

export interface Education {
    degree: string;
    institution: string;
    grade: string;
    status: 'Current' | 'Completed';
}

export interface BlogPost {
    image: string;
    title: string;
    link: string;
}

export interface Certification {
    title: string;
    issuer: string;
    date: string;
    link: string;
    
}

export interface SkillCategory {
  category: string;
  skills: string[];
}


export const services: Service[] = [
  {
    icon: React.createElement(CodeIcon, { className: "h-8 w-8 text-accent" }),
    title: 'Frontend Web Development',
    description: 'Building responsive, modern web applications with cutting-edge frontend technologies like React, JavaScript, and CSS.',
    tags: ['Responsive Design', 'Fast Performance', 'Clean UI/UX']
  },
  {
    icon: React.createElement(DeviceMobileIcon, { className: "h-8 w-8 text-accent" }),
    title: 'Mobile Application Development',
    description: 'Creating clean, intuitive mobile applications with focus on user experience and performance optimization.',
    tags: ['Android', 'Clean UI Design', 'Performance Optimized']
  },
  {
    icon: React.createElement(ColorSwatchIcon, { className: "h-8 w-8 text-accent" }),
    title: 'Graphic Designing',
    description: 'Designing stunning visuals including logos, posters, banners, and social media creatives that capture attention.',
    tags: ['Logo Design', 'Social Media Graphics', 'Brand Identity']
  },
  {
    icon: React.createElement(PencilAltIcon, { className: "h-8 w-8 text-accent" }),
    title: 'Content Writing',
    description: 'Crafting compelling, SEO-friendly content that engages your audience and communicates your message effectively to drive traffic.',
    tags: ['Website Copy', 'Blog Articles', 'SEO Content']
  },
  {
    icon: React.createElement(SearchCircleIcon, { className: "h-8 w-8 text-accent" }),
    title: 'SEO Services',
    description: 'Implementing proven SEO strategies to improve your website\'s visibility on search engines, helping you reach a wider audience.',
    tags: ['Keyword Research', 'On-Page SEO', 'Analytics']
  },
];

export const portfolioItems: PortfolioItem[] = [
   {
  category: "Brand Identity",
  title: "Coffee Shop Business Card ",
  description:"Mockup of the coffee shop logo on a business card.",
  date: "August 2024",
  link: "#",
  image: "/portfolio/coffee-shop-Business-card-mockup.jpg"
},
{
  category: "Brand Identity",
  title: "Yum Market Box Pack",
  description: "Mockup of the Yum Market packaging design.",
  date: "August 2024",
  link: "#",
  image: "/portfolio/Yum market box pack.jpg"
},
   {
    category: "Graphic Designing",
    title: "Baker’s Kitchen Logo Design",
    description: "Professional logo design for a restaurant & bakery brand with a clean and modern identity.",
    date: "January 2025",
    link: "#",
    image: "/portfolio/bakers-kitchen-logo.jpg"
  },
  {
    category: "Graphic Designing",
    title: "Trending Men’s Wear Poster",
    description: "Social media promotional poster designed for a luxury men’s fashion brand.",
    date: "January 2025",
    link: "#",
    image: "/portfolio/trending-poster.png"
  },
  {
  category: "Graphic Designing",
  title: "YUM Market Logo Design",
  description: "Modern logo for YUM Market highlighting freshness and quality.",
  date: "January 2025",
  link: "#",
  image: "/portfolio/YUM-Market-logo.jpg"
},
{
  category: "Graphic Designing",
  title: "Abroad Scholarship Guidelines Thumbnail",
  description: "Eye-catching YouTube thumbnail design created for abroad scholarship awareness content.",
  date: "January 2025",
  link: "#",
  image: "/portfolio/abroad-scholarship-thumbnail .png",
},
{
  category: "Graphic Designing",
  title: "Young Stars Football Club Logo Design",
  description: "Modern and clean logo design for a youth football club promoting sportsmanship and growth.",
  date: "January 2025",
  link: "#",
  image: "/portfolio/young-stars-football-logo.jpg"
}
  


];
export const mobileApps: MobileApp[] = [
  {
    image: "/mobile/coffee-app.jpg",
    title: "Coffee Ordering App",
    description:
      "A clean and user-friendly coffee ordering app featuring a digital menu with popular drinks like Espresso, Cappuccino, Mocha, and Latte.",
    
  },
  {
    image: "/mobile/flight-app.jpg",
    title: "Flight Ticket Booking App (SkyWings)",
    description:
      "A modern flight booking application that allows users to securely search and book flight tickets with an intuitive and elegant UI.",
    
  },
  {
    image: "/mobile/tic-tac-toe.jpg",
    title: "Tic Tac Toe Game",
    description:"A classic Tic Tac Toe mobile game with a minimal design, player name display, and smooth interactive gameplay.",
    
  },
  {
    image: "/mobile/calculator-app.jpg",
    title: "Calculator App",
    description:
      "A simple and clean calculator app with basic arithmetic operations and a smooth UI.",

  },
  {
    image: "/mobile/todo-app.jpg",
    title: "Todo App",
    description:
      "A task management app to add, complete, and manage daily tasks efficiently.",
  },
];

export const workExperience: WorkExperience[] = [
    {
        type: 'Apprenticeship',
        role: 'Junior SEO Associate',
        company: 'PSEB (Pakistan Software Export Board)',
        location: 'Onsite, Hyderabad, Pakistan',
        duration: 'Nov 2025 – Current',
        tags: ['On-page SEO', 'Keyword Research', 'Google Console', 'Internal Linking', 'SEO Audit', 'WordPress', 'SEMrush', 'Off-page SEO', 'Niche Hunting', 'Backlinks']
    },
    {
        type: 'Internship',
        role: 'Front End Developer Intern',
        company: 'CodeAlpha',
        location: 'Remote',
        duration: '2023',
        remote: true,
        tags: ['CSS3', 'HTML5', 'JavaScript', 'Bootstrap', 'Firebase', 'Supabase']
    },
    {
        type: 'Internship',
        role: 'Content Writer Intern',
        company: 'Code Clause',
        location: 'Remote',
        duration: 'May 2023 – June 2023',
        remote: true,
        tags: ['English', 'Content Writing']
    }
];


export const education: Education[] = [
    {
        degree: 'Bachelor in Information Technology',
        institution: 'University of Sindh, Jamshoro',
        grade: 'CGPA 3.16',
        status: 'Current'
    },
    {
        degree: 'Intermediate in Computer Science',
        institution: 'Shah Latif Girls College, Hyderabad',
        grade: 'Grade A1',
        status: 'Completed'
    },
    {
        degree: 'Matriculation in Computer Science',
        institution: 'Air Foundation School System, Hyderabad',
        grade: 'Grade B',
        status: 'Completed'
    }
];

export const blogPosts: BlogPost[] = [
    {
        image: "https://placehold.co/600x400/3b82f6/ffffff?text=Cloud+Computing",
        title: "Everything You Need to Know About Cloud Computing",
        link: "#"
    },
    {
        image: "https://placehold.co/600x400/4f46e5/ffffff?text=Interviews",
        title: "Mastering Common Programming Interview Questions: In-Depth Guide",
        link: "#"
    },
    {
        image: "https://placehold.co/600x400/ec4899/ffffff?text=Languages",
        title: "The Hottest Programming Languages of 2023: Powering the Future",
        link: "#"
    },
    {
        image: "https://placehold.co/600x400/f97316/ffffff?text=No-Code",
        title: "Empowering Creativity: The Low-Code and No-Code Revolution of 2023",
        link: "#"
    },
    {
        image: "https://placehold.co/600x400/10b981/ffffff?text=Future+AI",
        title: "Horizons of Possibility: Unveiling the Future Landscape of AI",
        link: "#"
    },
    {
        image: "https://placehold.co/600x400/6366f1/ffffff?text=AI+Value",
        title: "Understanding AI's Value in Today's World",
        link: "#"
    },
];

export const certifications: Certification[] = [
    {
        title: "Introduction to HTML",
        issuer: "Coursera",
        date: "April 2025",
        link: "#"
    },
    {
        title: "Computer Vision",
        issuer: "MathWorks",
        date: "March 2025",
        link: "#"
    },
    {
        title: "Google Ads for Beginners",
        issuer: "Coursera",
        date: "September 2024",
        link: "#"
    },
    {
        title: "Certificate of Participant",
        issuer: "QuizAThon Coding Test",
        date: "September 2025",
        link: "#"
    },
     {
        title: "SEO Search Engine Optimization and Digital Marketing",
        issuer: "NAVTTC",
        date: " August 2023",
        link: "#"
     
    },
    {
        title: "Introduction to Data analysis using Microsoft Excel ",
        issuer: "Coursera",
        date: " September 2024",
        link: "#"
    },  
    {
        title: "Build a free website with WordPress ",
        issuer: "Coursera",
        date: " September 2024",
        link: "#"
    },
    {
        title: "Successful IT systems",
        issuer: "The open university",
        date: " January 2026",
        link: "#"
    },
    
       
    
    
];

export const skills: SkillCategory[] = [
    {
        category: 'Frontend Development',
        skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Bootstrap', 'Tailwind CSS','Material-UI', 'Web Design','XML'],
    },
    {
        category: 'Backend & Databases',
        skills: ['Firebase', 'Supabase', 'MySQL', 'SQLite',],
    },
    {
        category: 'SEO & Marketing',
        skills: ['On-Page SEO', 'Off-Page SEO', 'SEO Audit', 'SEMrush', 'Google Search Console', 'Internal Linking', 'Niche Hunting', 'WordPress', 'Backlinks','kwseverywhere','Google planner'],
    },
    {
        category: 'Design & UI/UX',
        skills: ['Adobe Photoshop', 'Adobe Illustrator', 'Figma', 'Logo Design', 'Poster Design', 'UI Design'],
    },
    {
        category: 'Mobile & Other Technologies',
        skills: ['Java', 'Android Studio', 'Python','Git', 'GitHub', 'OpenCV'],


    },
];
