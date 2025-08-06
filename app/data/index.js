// app/data/index.js
export const projectsData = [
    {
        id: 1, // Using 0 to place it at the top
        slug: "prepgenius",
        title: "PrepGenius",
        date: "28 July 2025 - Present",
        description: "An AI-powered platform for interview and career preparation. This full-stack application, built using the MERN stack with React, Node.js, Express, and MongoDB, offers a suite of tools including a resume builder, analyzer, and a job search engine to help users stand out in the job market. It leverages the power of Gemini 1.5 Pro for advanced AI features.",
        image: "/prepgenius-1.png",
        gallery: ["/prepgenius-1.png", "/prepgenius-2.png", "/prepgenius-3.png", "/prepgenius-4.png", "/prepgenius-5.png"],
        tags: ["MERN Stack", "React", "Node.js", "Express", "MongoDB", "AI", "Gemini 1.5 Pro", "Full-Stack", "Resume Analyzer", "ATS score Checker", "Job Search", "JWT Auth", "Resume Template", "ATS Friendly Resume"],
        liveLink: "https://prep-genius-ai.vercel.app/",
        achievements: [
            "Implemented JWT authentication, email verification, and a user review system.",
            "Developed a full AI-powered resume analyzer with ATS score and feedback.",
            "Integrated a dynamic job search engine to aggregate listings from multiple platforms."
        ]
    },
    {
        id: 2,
        slug: "flexlingo-sign-language",
        title: "FlexLingo: Sign Language Translation",
        date: "Jan – May 2025",
        description: "An IoT-powered smart glove that translates sign language gestures into real-time text and speech. Built with Arduino and flex sensors, it uses a Random Forest model to achieve 95% gesture recognition accuracy, reducing latency to under 200ms. The system features a React.js frontend and Express.js backend, delivering seamless communication assistance.",
        image: "/3.png",
        tags: [
            "Arduino", "Flex Sensors", "Random Forest", "BiLSTM", "React.js", "Express.js",
            "MPU6050", "Tensorflow", "Keras", "Python", "IoT", "ML",
            "Final Year Project", "4 Members Team", "Team Lead Role", "Web"
        ],
        githubLink: "https://github.com/yashthakare93/flex-lingo",
        liveLink: "https://flex-lingo.vercel.app",
        achievements: [
            "Achieved 95% gesture recognition accuracy using Random Forest",
            "Outperformed BiLSTM model by 13%",
            "Reduced data processing latency to under 200ms",
            "Featured in college tech fest innovation showcase"
        ]
    },
    {
        id: 3,
        slug: "algorithm-visualizer",
        title: "Algorithm Visualizer",
        date: "Oct 2024",
        description:
            "An interactive educational tool to visualize sorting (Bubble, Quick, Merge) and searching (Linear, Binary) algorithms. Features dynamic speed control, user-defined array inputs, and step-by-step execution. Reduced animation rendering time by 30% through optimized DOM updates.",
        image: "/algo-1.png",
        gallery: ["/algo-1.png", "/algo-2.png", "/algo-3.png", "/algo-4.png", "/algo-5.png"],
        tags: ["React", "Tailwind CSS", "JavaScript", "Algorithms", "sorting", "searching", "framer-motion", "visualization", "educational-tool"],
        githubLink: "https://github.com/yourusername/algo-visualizer",
        liveLink: "https://algo-visualizer.vercel.app",
        achievements: [
            "Improved user engagement with interactive step controls",
            "Reduced animation lag by 30% via requestAnimationFrame optimization",
            "Used by 500+ students for exam preparation",
            "Adopted in campus coding bootcamp curriculum",
        ],
    },
    {
        id: 4,
        slug: "url-shortener-analytics",
        title: "URL Shortener & Analytics Tracker",
        date: "Feb 2024",
        description:
            "A full-stack URL shortening service with real-time analytics tracking. Shortened URLs by up to 75% and improved page load times by 30% using EJS for server-side rendering. Secured user accounts with JWT authentication and session management.",
        image: "/url-1.png",
        gallery: ["/url-1.png", "/url-2.png"],
        tags: ["Node.js", "Express.js", "EJS", "JWT", "MongoDB", "Analytics", "Selenium WebDriver", "Mocha", "Chai", "uuid"],
        githubLink: "https://github.com/yourusername/url-shortener",
        liveLink: "https://url-shortener-app.herokuapp.com",
        achievements: [
            "Reduced average page load time by 30% with EJS templating",
            "Achieved 75% reduction in URL length for cleaner sharing",
            "Tracked 10K+ redirects with real-time visitor analytics",
            "Implemented secure user authentication using JWT and bcrypt",
        ],
    },
];

export const certificatesData = [
    // Most recent
    {
        id: 1,
        title: "SQL (Intermediate)",
        issuer: "HackerRank",
        date: "July 28, 2025",
        description: "Proved proficiency in intermediate SQL queries, including complex joins, unions, and sub-queries.",
        skills: ["SQL", "Intermediate SQL", "Databases", "Database Management", "Joins", "Sub-queries"],
        link: "https://www.hackerrank.com/certificates/9bdb4f3ff6f4",

    },
    {
        id: 2,
        title: "Java Intermediate",
        issuer: "SoloLearn",
        date: "July 25, 2025",
        description: "Completed the Java Intermediate course, demonstrating proficiency in advanced Java concepts.",
        skills: ["Java", "Intermediate Java", "Object-Oriented Programming"],
        link: "https://www.sololearn.com/certificates/CC-WE68DOIR",
    },
    {
        id: 3,
        title: "Angular JS Internship",
        issuer: "Navodita Infotech",
        date: "January 31, 2024",
        description: "Completed the Angular JS Internship, focusing on building dynamic single-page applications and mastering core Angular concepts.",
        skills: ["Angular JS", "JavaScript", "Frontend Development", "SPA"],
    },
    {
        id: 4,
        title: "Angular (Basic)",
        issuer: "HackerRank",
        date: "November 2, 2023",
        description: "Covers topics like MVC Frameworks, Components (Angular, Dynamic, Styling), TypeScript, Two Way Binding, and Form Validation.",
        skills: ["Angular", "TypeScript", "MVC", "Two-Way Binding", "Form Validation"],
        link: "https://www.hackerrank.com/certificates/a6a70e4b5b07",
    },
    {
        id: 5,
        title: "Web Development Internship",
        issuer: "Bharat Intern",
        date: "October 10, 2023",
        description: "Successfully completed the Virtual Internship Program in Web Development as an active participant, gaining practical experience in front-end technologies.",
        skills: ["HTML", "CSS", "JavaScript", "Web Development", "Frontend Development"],
    },
    {
        id: 6,
        title: "Python",
        issuer: "SoloLearn",
        date: "June 5, 2022",
        description: "Completed the Python course for beginners, covering fundamental concepts.",
        skills: ["Python", "Programming Fundamentals", "OOP", "Beginner Python"],
        link: "https://www.sololearn.com/certificates/CT-U1MYBDJY",
    },
];
export const experienceData = [
    {
        id: 1,
        title: "Bachelor of Engineering, Computer Engineering",
        company: "P.E.S. Modern College of Engineering, Pune",
        date: "2021 – 2025",
        details: [
            "SGPA: 7.59",
            "Led a 4-member team for the final year project, managing the full lifecycle from prototyping and development to final deployment."
        ],
        tags: [
            "Java", "MERN Stack", "Next.js", "C++", "Python",
            "Data Structures", "Algorithms", "Operating Systems",
            "Database Management", "Computer Networks", "Cyber Security",
            "Software Engineering", "Machine Learning",
            "Leadership", "Team Management", "Problem Solving"
        ],
    },
    {
        id: 2,
        title: "Web Development Intern",
        company: "Bharat Intern",
        date: "Sept - Oct 2023",
        details: [
            "Applied core web development skills to successfully complete a virtual internship program.",
            "Independently developed and deployed multiple front-end projects, demonstrating proficiency in functional and responsive design."
        ],
        tags: ["HTML", "CSS", "JavaScript", "Front-End Development", "Responsive Design"],
    },
    {
        id: 3,
        title: "Angular JS Intern",
        company: "Navodita Infotech",
        date: "Jan 2024",
        details: [
            "Built dynamic single-page applications (SPAs) while gaining hands-on experience with Angular JS.",
            "Deepened understanding of core front-end principles and the Model-View-Controller (MVC) architectural pattern."
        ],
        tags: ["Angular JS", "JavaScript", "Frontend Development", "SPA Development", "MVC"],
    }

];

export const prepGeniusData = {
    title: "PrepGenius",
    description: "An AI-powered platform built on the MERN stack for comprehensive career preparation. PrepGenius offers a suite of tools including an advanced resume analyzer with an ATS score checker, a professional resume builder, and an AI-driven job search engine. It provides actionable feedback to help users stand out in the job market, leveraging the power of Gemini 1.5 Pro for its core AI features",
    link: "https://prep-genius-ai.vercel.app/",
    tags: ["MERN Stack", "React", "Node.js", "Express", "MongoDB", "AI", "Gemini 1.5 Pro", "Full-Stack", "Resume Analyzer", "ATS score Checker", "Job Search", "JWT Auth", "Resume Template", "ATS Friendly Resume"],
    images: ["/prepgenius-1.png", "/prepgenius-2.png", "/prepgenius-3.png", "/prepgenius-4.png", "/prepgenius-5.png"],
    timeline: [
        {
            date: "August 4, 2025",
            feature: "Job Search & Dashboard Enhancements",
            description: "Launched the AI Job Search feature, which aggregates listings from platforms like LinkedIn and Indeed. This update also included significant improvements to the admin and user dashboards for better analytics and a more refined user interface.",
        },
        {
            date: "August 3, 2025",
            feature: "AI Resume Builder & UI Overhaul",
            description: "Introduced a new AI-powered Resume Builder that allows users to generate a professional, ATS-friendly resume from a template in seconds. The UI received a major update to support this new feature and provide a smoother user experience, while also refactoring API calls to use Axios.",
        },
        {
            date: "August 1, 2025",
            feature: "Admin Panel & Analytics",
            description: "Implemented a full-featured admin panel, allowing you to view and analyze key metrics such as total users and resume analysis performance. This update established the back-end infrastructure for tracking user activity and platform usage.",
        },
        {
            date: "July 31, 2025",
            feature: "User Review System & Landing Page Redesign",
            description: "Added a user review system to the platform, enabling users to provide valuable feedback on the tool's functionality. The landing page and other core UI elements were also redesigned to be more responsive and polished.",
        },
        {
            date: "July 30, 2025",
            feature: "Core Authentication & Resume Analysis",
            description: "Rolled out essential authentication features including email verification, a forgot password flow, and a robust user profile system. This phase also marked the introduction of the initial resume analysis engine, allowing users to get a general or job-specific ATS score check and feedback.",
        },
        {
            date: "July 28, 2025",
            feature: "Initial Backend & API Integration",
            description: "The foundational back-end was established with RESTful API endpoints for user authentication, and resume upload/management. This included the initial integration of the Gemini 1.5 Pro API for future AI features, laying the groundwork for the entire platform.",
        },
    ],
};
