

export const personalInfo = {
  name: "Asad Ullah Shamim",
  fullName: "Asad Ullah Shamim",
  title: "Software Developer",
  taglines: [
    "Software Developer",
    "Full-Stack Web Specialist",
    "React.js & Tailwind CSS Lover",
    "FastAPI & Node.js Developer",
    "Problem Solver & Tech Explorer"
  ],
  location: "Khagrachari, Chittagong, Bangladesh",
  email: "www.asadullahshamim@gmail.com",
  phone: "+8801979727030",
  socials: {
    github: "https://github.com/asadullahshamimofficial",
    linkedin: "https://www.linkedin.com/in/asadullahshamimofficial",
    facebook: "https://www.facebook.com/asadullahshamimofficial",
    whatsapp: "https://wa.me/8801979727030",
  },
  resumeLink: "https://drive.google.com/file/d/1tx5oGiqFOalmWjOKx183b3DoCfTXCySV/view?usp=sharing",
  about: "I am a dedicated Software Developer with experience in building responsive and user-friendly web applications. I work with modern technologies including React.js, JavaScript, Tailwind CSS, FastAPI, and Node.js. I enjoy solving problems, learning new technologies, and building practical software solutions.",
  stats: [
    { label: "Years Experience", value: "1+" },
    { label: "Core Projects", value: "3+" },
    { label: "Tech Mastered", value: "15+" },
    { label: "Client Satisfaction", value: "100%" }
  ],
  languages: [
    { name: "Bengali", level: "Native", proficiency: 100 },
    { name: "English", level: "Intermediate", proficiency: 75 }
  ]
};

export const skillsData = [
  {
    category: "Programming Languages",
    iconName: "code",
    skills: [
      { name: "Python", level: 85 },
      { name: "JavaScript", level: 90 },
      { name: "C", level: 80 },
      { name: "C++", level: 75 }
    ],
  },
  {
    category: "Frontend",
    iconName: "frontend",
    skills: [
      { name: "React.js", level: 92 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Bootstrap", level: 88 },
      { name: "Material UI", level: 85 },
      { name: "DaisyUI", level: 90 }
    ],
  },
  {
    category: "Backend",
    iconName: "backend",
    skills: [
      { name: "FastAPI", level: 85 },
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 86 }
    ],
  },
  {
    category: "Database",
    iconName: "database",
    skills: [
      { name: "PostgreSQL", level: 84 },
      { name: "MongoDB", level: 88 },
      { name: "MySQL", level: 82 }
    ],
  },
  {
    category: "Tools",
    iconName: "tools",
    skills: [
      { name: "VS Code", level: 95 },
      { name: "GitHub", level: 90 },
      { name: "Postman", level: 88 },
      { name: "Firebase", level: 85 },
      { name: "Figma", level: 80 }
    ],
  }
];

export const projectsData = [
  {
    id: 1,
    title: "CodeAssess",
    tagline: "Coding Assessment & Evaluation Platform",
    category: "Full Stack",
    description: "An advanced coding assessment platform that empowers organizations and educators to conduct real-world coding challenges and evaluate submissions efficiently. It includes role-based access, comprehensive question management, evaluation flows, and robust search & pagination capabilities.",
    features: [
      "Assessment & Question Management",
      "Role-Based Access Control",
      "Coding Submission & Automated Evaluation",
      "Dynamic Search, Filtering & Pagination"
    ],
    techStack: ["React", "FastAPI", "Python", "PostgreSQL", "Supabase", "JWT"],
    developmentChallenges: "Designing an efficient execution and evaluation pipeline for user code submissions, implementing strict role-based access control, and optimizing complex database queries for filtering and pagination.",
    futureEnhancements: "Integration with code diff analysis, multi-language compiler sandboxing, and AI-assisted performance feedback.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/asadullahshamimofficial/Code-Assess",
    liveLink: "https://codeassessaus.netlify.app"
  },
  {
    id: 2,
    title: "Hero Employee Management",
    tagline: "Workforce & Payroll Management System",
    category: "Full Stack",
    description: "A comprehensive web-based management system built for tracking employee workloads, automating payroll, and managing contracts with transparency, real-time workflow status updates, and administrative approvals.",
    features: [
      "Employee Task Tracking",
      "Payroll & Salary Management",
      "Contract Management",
      "Role-Based Access Control",
      "Payment Integration & Data Visualization"
    ],
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "Firebase", "JWT"],
    developmentChallenges: "Implementing secure multi-role access (Admin, HR, Employee), real-time payroll status tracking, and dynamic visual analytics reporting.",
    futureEnhancements: "Plan to integrate automated monthly invoice generation, biometric attendance sync, and AI workload insights.",
    image: "https://i.ibb.co.com/GQTQ4kJV/project-1.jpg",
    github: "https://github.com/asadullahshamimofficial/Hero-Employee-Management",
    liveLink: "https://hero-employee-management-aus.web.app"
  },
  {
    id: 3,
    title: "Food Shop",
    tagline: "Online Food Marketplace & Seller Platform",
    category: "Full Stack",
    description: "A dynamic full-stack e-commerce marketplace catering to food lovers and vendors. Enables customers to browse items, place online orders, and submit reviews, while providing sellers with a dedicated dashboard to control inventory.",
    features: [
      "Food Marketplace & Product Catalog",
      "Inventory Management & Stock Updates",
      "Dedicated Seller Dashboard",
      "Online Ordering & Payment Integration",
      "Role-Based Access & Customer Reviews"
    ],
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "Firebase", "JWT"],
    developmentChallenges: "Handling real-time order state transitions, secure payment handling, and maintaining accurate synchronized product stock across multiple simultaneous users.",
    futureEnhancements: "Live delivery GPS tracking, discount coupon engine, and personalized dish recommendations.",
    image: "https://i.ibb.co.com/prwJwZ2v/project-2.jpg",
    github: "https://github.com/asadullahshamimofficial/Food-Shop",
    liveLink: "https://food-shop-aus.web.app"
  }
];

export const experienceData = [
  {
    id: 1,
    role: "Software Developer",
    type: "Self-Taught",
    period: "2024 – Present",
    description: "Building and deploying web applications using modern frontend and backend technologies. Architecting full-stack solutions with React, FastAPI, Node.js, and modern databases with clean code principles.",
    highlights: [
      "Developing responsive, accessible single-page web applications with React.js and Tailwind CSS.",
      "Building scalable REST APIs with FastAPI and Node.js / Express.js.",
      "Designing relational and NoSQL database schemas with PostgreSQL, MongoDB, and MySQL.",
      "Implementing JWT authentication, role-based access control, and cloud deployments."
    ]
  }
];

export const educationData = [
  {
    id: 1,
    degree: "Diploma in Homeopathy",
    institution: "HM Hill Homeopathic College & Hospital",
    status: "2023 - Running"
  },
  {
    id: 2,
    degree: "Fazil (Bachelor's Degree)",
    institution: "Matiranga Islamia Fazil Madrasah",
    status: "2025 - Running"
  }
];
