import React from 'react';
import { FaLink } from 'react-icons/fa';

const CertificateCard = ({ certificate }) => {
  return (
    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 mb-8">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-100 dark:lg:group-hover:bg-zinc-800/50"></div>
      <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-zinc-500 sm:col-span-2">{certificate.date}</header>
      <div className="z-10 sm:col-span-6">
        <h3 className="font-medium leading-snug text-zinc-800 dark:text-slate-200">
          <div>
            {/* Link the title if a link is provided */}
            {certificate.link ? (
              <a href={certificate.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-baseline font-medium text-zinc-900 dark:text-white hover:text-teal-500 dark:hover:text-teal-400 focus-visible:text-teal-300">
                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                <span>{certificate.title}</span>
                <FaLink className="ml-2 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 motion-reduce:transition-none" />
              </a>
            ) : (
              <span className="inline-block font-medium">{certificate.title}</span>
            )}
          </div>
          <div>
            <div className="text-zinc-500 dark:text-zinc-400" aria-hidden="true">{certificate.issuer}</div>
          </div>
        </h3>
      
        {/* Certificate Description */}
        {certificate.description && (
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            {certificate.description}
          </p>
        )}
        <ul className="mt-2 flex flex-wrap" aria-label="Skills learned:">
          {certificate.skills.map((skill, index) => (
            <li key={index} className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-500 dark:text-teal-300 ">{skill}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CertificateCard;