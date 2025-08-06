"use client";

// 1. Import 'use' from React
import { useState, use } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowLeft, FaGithub, FaExternalLinkAlt, FaCheckCircle } from 'react-icons/fa';
import { projectsData } from '../../data';

export default function ProjectDetailPage({ params }) {
  // 2. Unwrap the params Promise with React.use()
  const resolvedParams = use(params);

  // 3. Use the resolved value to find the project
  const project = projectsData.find((p) => p.slug === resolvedParams.slug);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage('');
  };

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
        <p className="text-lg text-zinc-600 dark:text-zinc-400">Project not found.</p>
      </div>
    );
  }

  const mainImage = project.gallery?.[0] || project.image;
  const gallery = project.gallery?.length > 1 ? project.gallery.slice(1) : [];
  const hasGallery = gallery.length > 0;
  const hasLinks = project.githubLink || project.liveLink;

  return (
    <>
      {/* --- IMAGE MODAL --- */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 p-4 cursor-pointer"
          onClick={closeModal}
        >
          <div
            className="relative max-w-5xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute -top-3 -right-3 w-9 h-9 bg-white text-black rounded-full flex items-center justify-center text-xl font-bold z-10 hover:bg-gray-200 transition"
              aria-label="Close"
            >
              &times;
            </button>
            <Image
              src={selectedImage}
              alt="Selected project screenshot"
              width={1200}
              height={800}
              className="object-contain w-full h-full rounded-lg"
              style={{ maxHeight: '90vh' }}
            />
          </div>
        </div>
      )}

      {/* --- YOUR EXISTING LAYOUT (UNCHANGED) --- */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 pb-20">
        <header className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-8 gap-4">
          <Link
            href="/"
            className="flex items-center text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors group"
          >
            <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Projects</span>
          </Link>
          <span className="text-sm text-zinc-500 dark:text-zinc-500">{project.date}</span>
        </header>

        <div className="lg:grid lg:grid-cols-3 lg:gap-10">
          <div className="lg:col-span-1 mb-10 lg:mb-0 space-y-6">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs rounded-full bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-300 font-medium border border-teal-100 dark:border-teal-900"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
              {project.description}
            </p>
            {hasLinks && (
              <div className="flex flex-col sm:flex-row gap-3 mt-4">
                {project.githubLink && (
                  <Link
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition text-sm text-zinc-700 dark:text-zinc-300"
                  >
                    <FaGithub /> <span>View Code</span>
                  </Link>
                )}
                {project.liveLink && (
                  <Link
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition text-sm"
                  >
                    <FaExternalLinkAlt /> <span>Live Demo</span>
                  </Link>
                )}
              </div>
            )}
            {project.achievements?.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">Achievements</h3>
                <ul className="space-y-2">
                  {project.achievements.map((ach, i) => (
                    <li key={i} className="flex items-start gap-1.5 text-sm text-zinc-600 dark:text-zinc-300">
                      <FaCheckCircle className="text-teal-500 mt-1 flex-shrink-0" size={14} />
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="lg:col-span-2 space-y-8">
            <div
              className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl transition relative cursor-pointer"
              onClick={() => openModal(mainImage)}
            >
              <div className="w-full bg-gray-50 dark:bg-gray-800/50 relative aspect-video sm:aspect-[4/3] lg:aspect-[3/2]">
                <Image
                  src={mainImage}
                  alt={`${project.title} - Main image`}
                  fill
                  className="object-contain object-center p-4 group-hover:scale-102 transition-transform duration-300"
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 80vw, 60vw"
                  priority
                />
              </div>
            </div>
            {hasGallery && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {gallery.map((img, i) => (
                  <div
                    key={i}
                    className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow hover:shadow-md transition relative cursor-pointer"
                    onClick={() => openModal(img)}
                  >
                    <div className="w-full bg-gray-50 dark:bg-gray-800/50 relative aspect-video sm:aspect-[4/3] lg:aspect-[3/2]">
                      <Image
                        src={img}
                        alt={`${project.title} - Gallery ${i + 2}`}
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 640px) 45vw, (max-width: 1024px) 40vw, 30vw"
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}