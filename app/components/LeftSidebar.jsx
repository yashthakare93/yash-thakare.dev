"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload, FaMapMarkerAlt, FaGraduationCap } from 'react-icons/fa';
import { ThemeToggleButton } from './ThemeToggleButton';

// Add custom CSS for animations
const customStyles = `
  @keyframes blob {
    0% {
      transform: translate(0px, 0px) scale(1);
    }
    33% {
      transform: translate(30px, -50px) scale(1.1);
    }
    66% {
      transform: translate(-20px, 20px) scale(0.9);
    }
    100% {
      transform: translate(0px, 0px) scale(1);
    }
  }
  .animate-blob {
    animation: blob 7s infinite;
  }
  .animation-delay-2000 {
    animation-delay: 2s;
  }
  .animation-delay-4000 {
    animation-delay: 4s;
  }
  .animation-delay-1000 {
    animation-delay: 1s;
  }
`;

// Social links
const shareLinks = [
    { icon: FaGithub, url: 'https://github.com/yashthakare93', label: 'GitHub' },
    { icon: FaLinkedin, url: 'https://www.linkedin.com/in/yash-thakare01/', label: 'LinkedIn' },
    { icon: FaEnvelope, url: 'mailto:thakareyash74@gmail.com', label: 'Email' },
];

const LeftSidebar = () => {
    const allSkills = "React.js, Next.js, HTML5, CSS3, TailwindCSS, ShadCN UI, Framer Motion, Redux, Zustand, JavaScript, Python, OOP, DSA, Node.js, Express.js, Java, MongoDB, MySQL, JWT, RESTful APIs, Authentication, SSR, Arduino, MPU 6050, BiLSTM, Random Forest, Tensorflow, Keras, Git, GitHub, Vercel, Postman, VS Code, Jest, Selenium WebDriver";

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const skillVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        }
    };

    return (
        <>
            <style>{customStyles}</style>
            <motion.div
                className="w-full lg:w-2/5 p-6 lg:p-8 flex flex-col gap-y-8 bg-white dark:bg-black border-r border-slate-200 dark:border-slate-800"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >

                {/* Header Section */}
                <motion.div variants={itemVariants}>
                    <div className="flex justify-between items-start mb-4">
                        <div className="flex flex-col space-y-1">
                            <motion.h1
                                className="text-4xl md:text-5xl font-black bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent leading-tight tracking-tight"
                                whileHover={{ scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                Yash Thakare
                            </motion.h1>
                        </div>
                        <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                            <ThemeToggleButton />
                        </motion.div>
                    </div>
                    <div className="text-base text-zinc-700 dark:text-zinc-300 leading-relaxed ">
                        <p>
                            I'm a{' '}
                            <strong className="font-bold text-zinc-900 dark:text-white">
                                Computer Engineering Graduate
                            </strong>{' '}
                            and a dedicated{' '}
                            <strong className="font-bold text-zinc-900 dark:text-white">
                                MERN stack
                            </strong>{' '}
                            developer. I build robust and scalable web applications using{' '}
                            <strong className="font-bold text-zinc-900 dark:text-white">
                                React
                            </strong>{' '}
                            and{' '}
                            <strong className="font-bold text-zinc-900 dark:text-white">
                                Node.js
                            </strong>, backed by strong expertise in{' '}
                            <strong className="font-bold text-zinc-900 dark:text-white">
                                JavaScript
                            </strong> and{' '}
                            <strong className="font-bold text-zinc-900 dark:text-white">
                                Java
                            </strong>.
                            When I'm not coding, you'll find me exploring other AI technologies and building my latest project,{' '}
                            <a
                                href="https://prep-genius-ai.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative inline-block font-bold text-blue-600 dark:text-blue-400 hover:underline"
                                title="Preview the website for PrepGenius"
                            >
                                PrepGenius
                                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max px-3 py-1 bg-zinc-800 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    Preview Website
                                </span>
                            </a>.
                        </p>
                    </div>
                    {/* Enhanced Action Buttons & Social Icons */}
                    <motion.div
                        className="mt-4 flex flex-wrap items-center gap-4"
                        variants={itemVariants}
                    >
                        {/* Resume Button */}
                        <motion.button
                            onClick={() => window.open('/Yash_Thakare_Resume.pdf', '_blank')}
                            className="group relative flex items-center gap-2.5 px-5 py-2.5 bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 text-white rounded-lg font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
                            whileHover={{ scale: 1.02, y: -1 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <FaFileDownload
                                size={16}
                                className="relative z-10 transition-transform duration-200 group-hover:scale-110 group-hover:-translate-y-0.5"
                            />
                            <span className="relative z-10">Resume</span>
                        </motion.button>

                        {/* Social Links */}
                        <div className="flex items-center gap-3 ml-2">
                            {shareLinks.map((link, index) => (
                                <motion.a
                                    key={link.label}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={link.label}
                                    className="group relative p-3 bg-white/60 dark:bg-zinc-800/60 text-zinc-600 dark:text-zinc-400 rounded-xl border border-slate-200/60 dark:border-zinc-700/60 hover:text-white hover:border-transparent transition-all duration-300 backdrop-blur-sm"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.5 + index * 0.1 }}
                                >
                                    {/* Gradient backgrounds for each social platform */}
                                    <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 ${link.label === 'GitHub' ? 'bg-gradient-to-br from-gray-800 to-gray-900' :
                                        link.label === 'LinkedIn' ? 'bg-gradient-to-br from-blue-600 to-blue-700' :
                                            'bg-gradient-to-br from-red-500 to-red-600'
                                        }`}></div>
                                    <link.icon size={20} className="relative z-10 group-hover:scale-110 transition-transform duration-200" />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>

                {/* Enhanced Skills Section */}
                <motion.div className="space-y-6" variants={itemVariants}>
                    <div className="flex items-center gap-3">
                        <h3 className="text-sm font-bold text-zinc-800 dark:text-zinc-200 uppercase tracking-wider">
                            Tech Stack & Skills
                        </h3>
                        <div className="flex-1 h-px bg-gradient-to-r from-zinc-300 to-transparent dark:from-zinc-700"></div>
                    </div>

                    <motion.div
                        className="flex flex-wrap gap-2"
                        variants={containerVariants}
                    >
                        {allSkills.split(',').map((skill, index) => (
                            <motion.span
                                key={index}
                                variants={skillVariants}
                                initial="hidden"
                                animate="visible"
                                transition={{ delay: index * 0.02 }}
                                className="group relative inline-block bg-gradient-to-r from-slate-100 to-slate-200 dark:from-zinc-800 dark:to-zinc-700 text-zinc-700 dark:text-zinc-300 px-3 py-2 rounded-lg text-xs font-medium cursor-default transition-all duration-200 hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/20 dark:hover:to-purple-900/20 hover:text-blue-700 dark:hover:text-blue-300 hover:shadow-sm border border-transparent hover:border-blue-200/50 dark:hover:border-blue-800/50"
                                whileHover={{ scale: 1.05, y: -1 }}
                            >
                                <span className="relative z-10">{skill.trim()}</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-lg"></div>
                            </motion.span>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Status Indicator */}
                <motion.div
                    className="flex items-center gap-3 p-4 bg-green-50/80 dark:bg-green-900/20 rounded-xl border border-green-200/50 dark:border-green-800/50"
                    variants={itemVariants}
                >
                    <div className="relative">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping opacity-75"></div>
                    </div>
                    <span className="text-sm font-medium text-green-700 dark:text-green-400">
                        Available for new opportunities
                    </span>
                </motion.div>
            </motion.div>
        </>
    );
};

export default LeftSidebar;