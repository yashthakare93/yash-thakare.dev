"use client";

import React, { useState } from 'react';
import { FaLink } from 'react-icons/fa';
import { prepGeniusData } from '../data';

const PrepGeniusTimelineCard = () => {
    const item = prepGeniusData;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    if (!item) return null;

    const openModal = (imageUrl) => {
        setSelectedImage(imageUrl);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedImage('');
    };

    return (
        <>
            {/* --- Image Modal (No changes here) --- */}
            {isModalOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 p-4"
                    onClick={closeModal}
                >
                    <div 
                        className="relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={closeModal}
                            className="absolute -top-2 -right-2 w-8 h-8 bg-white text-black rounded-full flex items-center justify-center text-xl font-bold z-10"
                            aria-label="Close"
                        >
                            &times;
                        </button>
                        <img 
                            src={selectedImage} 
                            alt="Selected project screenshot" 
                            className="max-w-full max-h-[90vh] object-contain rounded-lg"
                        />
                    </div>
                </div>
            )}

            {/* --- Main Component --- */}
            <div className="mx-auto w-full max-w-2xl">
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">
                    PrepGenius Development Timeline
                </h2>

                {/* --- Main Project Header Section (Now properly separated) --- */}
                <div className="mb-12">
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                        {item.link ? (
                            <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center group hover:text-teal-500 dark:hover:text-teal-400"
                            >
                                {item.title}
                                <FaLink className="ml-2 shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
                            </a>
                        ) : (
                            item.title
                        )}
                    </h3>
                    <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                        {item.description}
                    </p>
                    <ul className="mt-4 flex flex-wrap" aria-label="Technologies used:">
                        {item.tags?.map((tag, index) => (
                            <li key={index} className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-500 dark:text-teal-300">
                                    {tag}
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-6 flex flex-wrap gap-2">
                        {item.images?.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`PrepGenius screenshot ${index + 1}`}
                                className="w-24 h-16 object-cover rounded-md cursor-pointer transition-transform hover:scale-105 hover:opacity-90"
                                onClick={() => openModal(image)}
                            />
                        ))}
                    </div>
                </div>

                {/* --- Timeline Section (Wrapped in its own positioning container) --- */}
                {item.timeline && (
                    <div className="relative pl-8">
                        {item.timeline.map((timelineItem, index) => (
                            <div key={index} className="relative pb-8">
                                {/* Timeline vertical line */}
                                {index < item.timeline.length - 1 && (
                                    <div className="absolute top-2 -left-px h-full w-0.5 bg-slate-200 dark:bg-zinc-700"></div>
                                )}
                                {/* Timeline dot */}
                                <div className="absolute top-2 -left-2 h-4 w-4 rounded-full bg-white dark:bg-gray-800 border-4 border-slate-300 dark:border-zinc-600"></div>
                                
                                {/* Timeline Content (ml-8 is removed to fix alignment) */}
                                <div className="pl-4">
                                    <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                                        {timelineItem.date}
                                    </p>
                                    <h4 className="text-base font-medium text-zinc-900 dark:text-white mt-1">
                                        {timelineItem.feature}
                                    </h4>
                                    <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                        {timelineItem.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

export default PrepGeniusTimelineCard;