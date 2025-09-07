export interface Project {
  title: string;
  tagline: string;
  stack: string[];
  href: string;
  image: string;
  status?: string;
}

export interface Blog {
  title: string;
  summary: string;
  href: string;
  date: string;
  source: string;
}

export interface Expertise {
  id: string;
  title: string;
  status: string;
  copy: string;
  image?: string;
  cta: {
    label: string;
    href: string;
  };
}

export interface Role {
  company: string;
  title: string;
  //period: string;
  status: string;
  copy: string;
}

export interface Testimonial {
  name: string;
  quote: string;
}

export interface Experience {
  role: string;
  org: string;
  period: string;
  bullets: string[];
}

export interface SkillGroup {
  group: string;
  items: string[];
}

export const projects: Project[] = [
  {
    title: "SnapPick - Remote Canteen Ordering",
    tagline: "Full-stack food ordering platform for campus canteens with secure login and system architecture.",
    stack: ["Spring Boot", "PostgreSQL", "REST APIs"],
    href: "https://github.com/Nandini26-prog/RemoteCanteenOrdering",
    image: "/Screenshot (59).png",
    status: "academic project",
  },
  {
    title: "Predictive Machine Failure Model",
    tagline: "Streamlit ML app predicting machine failures with 90% accuracy using Random Forest.",
    stack: ["Python", "Scikit-learn", "Streamlit"],
    href: "https://github.com/Nandini26-prog/PentagonMaintenance",
    image: "/Screenshot (8).png",
    status: "hackathon finalist",
  },
  {
    title: "Siddy - Your Sign Buddy",
    tagline: "Web app to learn sign language with quizzes and user management, built for Google Solution Challenge.",
    stack: ["MERN Stack", "Node.js", "Express"],
    href: "https://github.com/Nandini26-prog/Siddy_SignLanguageTranslator",
    image: "/Screenshot (47).png",
    status: "GDSC",
  },
  {
    title: "Earthquake Training Game (VR/AR)",
    tagline: "Immersive Unity simulation to train users on earthquake safety response with realistic animations.",
    stack: ["Unity", "C#", "XR Tools"],
    href: "https://github.com/Nandini26-prog/EarthquakeTrainingGame",
    image: "/Screenshot (145).png",
    status: "prototype",
  },
    {
    title: "Expense Tracker",
    tagline: "Responsive expense tracker with reports and budget management features.",
    stack: ["Spring Boot", "MySQL"],
    href: "https://github.com/Nandini26-prog/coding_samurai_webinternship",
    image: "/Screenshot (98).png",
    status: "foundational",
  },
    {
    title: "Fashion Image Recognition",
    tagline: "ML model to classify fashion items from images.",
    stack: ["Python", "TensorFlow"],
    href: "https://github.com/Nandini26-prog/FashionImageRecognition",
    image: "/Screenshot (108).png",
    status: "exploration",
  },
];

export const expertises: Expertise[] = [
  {
    id: "001",
    title: "Full-Stack Development",
    status: "Open for Opportunities",
    copy: "Hands-on with MERN and Spring Boot for building scalable apps — from responsive frontends to secure backend APIs.",
    image: "/exp-dev.png",
    cta: { label: "Let's connect!", href: "mailto:your.email@gmail.com" },
  },
  {
    id: "002",
    title: "AI & ML Prototyping",
    status: "Learning & Growing",
    copy: "Experience training predictive models, integrating APIs like Comprehend Medical, and turning raw datasets into insights.",
    image: "/exp-ux.png",
    cta: { label: "Check out my work", href: "mailto:your.email@gmail.com" },
  },
];

export const roles: Role[] = [
  {
    company: "Siemens EDA",
    title: "Software Intern",
    status: "Jul 2025 – Dec 2025 (expected)",
    copy: 
      "Contributing to C++-based product development in EDA tooling.Enhancing core CS skills by working on compiler-level systems and visualization features.Gaining hands-on experience in large-scale, high-performance systems software."
  },
  {
    company: "Shivarnim Pvt. Ltd. (Startup)",
    title: "AI-ML Intern",
    status: "Oct 2024 – Jan 2025",
    copy: 
      "Integrated medical APIs (Amazon Comprehend Medical) to extract structured clinical insights. Curated 20+ medical datasets to train predictive AI models with 85% accuracy in symptom-to-disease mapping. Explored healthcare AI strategy by combining data engineering, ML, and domain knowledge."
  },
  {
    company: "Coding Ninjas",
    title: "Teaching Assistant (DSA in Java)",
    status: "Oct 2023 – Nov 2023",
    copy: 
      "Mentored 100+ students in Data Structures & Algorithms, debugging and problem-solving. Strengthened fundamentals by teaching concepts interactively.Fostered collaborative learning and guided students through coding challenges."
  },
];

// export const roles: Role[] = [
//   {
//     title: "Fresh Graduate",
//     status: "Seeking opportunities",
//     copy: "Recently graduated with a passion for technology and innovation. Eager to contribute to meaningful projects and grow as a developer in a dynamic team environment.",
//   },
//   {
//     title: "Freelance Developer",
//     status: "Available for projects",
//     copy: "Taking on exciting freelance projects to build my portfolio and gain real-world experience. Love working on diverse projects and learning new technologies along the way!",
//   },
// ];

export const testimonials: Testimonial[] = [
  {
    name: "Prof. Sarah Johnson — University Mentor",
    quote: "An exceptional student with a natural talent for problem-solving and a genuine passion for technology. Her projects always exceeded expectations and showed great attention to detail.",
  },
  {
    name: "Rajesh Kumar — Project Collaborator",
    quote: "Working with her was amazing! She brings fresh ideas, learns quickly, and has that perfect balance of technical skills and creative thinking. A true team player!",
  },
  {
    name: "Priya Sharma — Hackathon Judge",
    quote: "Her innovative approach and dedication to creating user-friendly solutions impressed everyone. She has a bright future ahead in tech!",
  },
];

export const blogs: Blog[] = [
{
    title: "Evolution of System Softwares",
    summary: "Tracing how system software has shaped the foundation of computing as we know it today.",
    href: "https://nanblogs.hashnode.dev/evolution-of-system-softwares",
    date: "2024-10-05",
    source: "Hashnode",
  },
  {
    title: "The Harmony of Bytes and Beats",
    summary: "Exploring parallels between music, rhythm, and structured programming.",
    href: "https://nanblogs.hashnode.dev/the-harmony-of-bytes-and-beats",
    date: "2024-11-12",
    source: "Hashnode",
  },
  {
    title: "Exploring Tech Stacks Without Commitment Issues",
    summary: "A fresher's guide to dating different technologies - from React to Vue, Node to Python. Why it's okay to explore before settling down with your perfect tech stack.",
    href: "https://medium.com/@nandinijain/tech-stack-dating",
    date: "2025-01-10",
    source: "Medium",
  },
];

export const sparks = [
  "Sometimes I debug by explaining my code to my rubber duck. It's surprisingly effective! 🦆",
  "I believe every bug is just a feature waiting to be discovered. 🐛✨",
  "Coffee is my debugging fuel, but chai is my creative muse. ☕",
  "The best code is written at 2 AM when the world is asleep and ideas are awake. 🌙",
  "I dance through my code reviews - every comment is a step in the choreography. 💃",
  "My laptop and I have a love-hate relationship. It's complicated. 💻❤️",
  "I debug with the same patience I use for perfecting Kathak footwork. Both need rhythm! 🎭",
  "Sometimes I wonder if my code has feelings. It definitely has moods. 😅",
  "I name my variables like I name my dance moves - with intention and a bit of flair! ✨",
  "The best solutions come when I'm not thinking about the problem. Shower thoughts for developers! 🚿"
];

export const experience: Experience[] = [
  {
    role: "Computer Science Graduate",
    org: "Indian Institute of Technology",
    period: "2021 — 2025",
    bullets: [
      "Specialized in Web Development and Software Engineering",
      "Active participant in coding competitions and hackathons",
      "Maintained 8.5+ CGPA while building personal projects",
    ],
  },
  {
    role: "Self-Taught Developer",
    org: "Personal Projects & Learning",
    period: "2023 — Present",
    bullets: [
      "Built 10+ full-stack projects using modern technologies",
      "Active on GitHub with consistent contributions and open-source participation",
      "Documenting my learning journey through technical blogs and tutorials",
    ],
  },
];

export const skills: SkillGroup[] = [
  { group: "Languages", items: ["JavaScript", "TypeScript", "Python", "Java"] },
  { group: "Frontend", items: ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS"] },
  { group: "Backend", items: ["Node.js", "Express", "MongoDB", "PostgreSQL"] },
  { group: "Tools", items: ["Git", "VS Code", "Figma", "Postman", "Vercel"] },
];
