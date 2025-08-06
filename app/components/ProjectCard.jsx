// components/ProjectCard.jsx
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { RiLink } from "react-icons/ri";

const ProjectCard = ({ project }) => {
  return (
    <div className="mb-6">
      {/* Main card link */}
      <Link
        href={`/project/${project.slug}`}
        className="group relative grid gap-4 p-6 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 rounded-2xl overflow-hidden border border-slate-300 dark:border-zinc-700"
      >
        {/* Hover overlay */}
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-2xl transition lg:-inset-x-6 lg:block lg:group-hover:bg-slate-100 dark:lg:group-hover:bg-zinc-800/60" />

        {/* Text Content */}
        <div className="z-10 sm:order-1 sm:col-span-5">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-y-2"> {/* Flex container for title and links */}
            <h3 className="font-semibold text-lg text-zinc-800 dark:text-slate-100 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">
              {project.title}
            </h3>

            {/* GitHub & Live Links moved here */}
            {(project.githubLink || project.liveLink) && (
              <div className="flex items-center gap-3"> {/* Reduced gap for inline links */}
                {project.githubLink && (
                  <motion.button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.githubLink.trim(), '_blank', 'noopener noreferrer');
                    }}
                    aria-label={`View GitHub repo for ${project.title}`}
                    className="flex items-center text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors group/link"
                    whileHover={{ y: -1 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaGithub
                      size={16} // Smaller icon size for inline display
                      className="mr-0.5 transition-transform group-hover/link:scale-110" // Reduced margin
                    />
                    <span className="text-xs font-medium">Code</span> {/* Smaller text size */}
                  </motion.button>
                )}
                {project.liveLink && (
                  <motion.button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.liveLink.trim(), '_blank', 'noopener noreferrer');
                    }}
                    aria-label={`View live demo for ${project.title}`}
                    className="flex items-center text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors group/link"
                    whileHover={{ y: -1 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <RiLink
                      size={14} // Smaller icon size for inline display
                      className="mr-0.5 transition-transform group-hover/link:scale-110" // Reduced margin
                    />
                    <span className="text-xs font-medium">Live</span> {/* Smaller text size */}
                  </motion.button>
                )}
              </div>
            )}
          </div>

          <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 line-clamp-5">
            {project.description}
          </p>

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-x-1.5 gap-y-1 pt-2">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="px-2 py-0.5 text-[0.65rem] rounded-full
                           bg-slate-200 dark:bg-zinc-700
                           text-zinc-700 dark:text-zinc-300
                           font-medium border border-slate-300 dark:border-zinc-600"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Thumbnail Image */}
        <div className="sm:order-2 sm:col-span-3 flex items-center justify-center relative h-44 sm:h-60">
          <Image
            src={project.image}
            alt={`${project.title} thumbnail`}
            fill
            className="rounded-lg border border-slate-200 dark:border-zinc-700 object-fit shadow-sm
                       group-hover:border-slate-400 dark:group-hover:border-zinc-600
                       transition-all duration-300 transform
                       group-hover:scale-105"
          />
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;
