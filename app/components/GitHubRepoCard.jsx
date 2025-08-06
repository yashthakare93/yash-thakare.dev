// app/components/GitHubRepoCard.jsx
import React from 'react';
import { FaRegStar, FaCodeBranch, FaEye } from 'react-icons/fa';

// A map of language colors for the visual bar
const languageColorMap = {
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Python: '#3572A5',
  Java: '#b07219',
  Shell: '#89e051',
  C: '#555555',
  'C++': '#f34b7d',
  // Add more languages and their hex colors as needed
  default: '#6e7681'
};

const LanguageBar = ({ languages }) => {
  const totalBytes = Object.values(languages).reduce((acc, bytes) => acc + bytes, 0);
  if (totalBytes === 0) return null;

  return (
    <div className="w-full flex h-2 rounded-full overflow-hidden mt-4 bg-slate-200 dark:bg-zinc-700">
      {Object.entries(languages).map(([lang, bytes]) => {
        const percentage = (bytes / totalBytes) * 100;
        const color = languageColorMap[lang] || languageColorMap.default;
        return (
          <div
            key={lang}
            className="h-full"
            style={{ width: `${percentage}%`, backgroundColor: color }}
            title={`${lang}: ${percentage.toFixed(1)}%`}
          />
        );
      })}
    </div>
  );
};

const GitHubRepoCard = ({ repo }) => {
  // Format large numbers (e.g., 1500 -> 1.5k)
  const formatStat = (num) => {
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}k`;
    }
    return num;
  };

  return (
    <div className="border border-slate-200 dark:border-zinc-800 rounded-lg p-6 h-full flex flex-col hover:border-slate-300 dark:hover:border-zinc-700 transition-colors">
      <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
        <h3 className="font-bold text-zinc-900 dark:text-white text-lg hover:text-teal-500 dark:hover:text-teal-400 transition-colors">{repo.name}</h3>
      </a>
      
      <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 flex-grow">
        {repo.description || 'No description provided.'}
      </p>

      {/* Language Bar */}
      {repo.languages && Object.keys(repo.languages).length > 0 && <LanguageBar languages={repo.languages} />}
      
      {/* Stats */}
      <div className="flex items-center text-sm text-zinc-500 mt-4 space-x-6">
        <a href={`${repo.html_url}/stargazers`} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-teal-500 dark:hover:text-teal-400 transition-colors">
          <FaRegStar className="mr-1.5" /> {formatStat(repo.stargazers_count)}
        </a>
        <a href={`${repo.html_url}/forks`} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-teal-500 dark:hover:text-teal-400 transition-colors">
          <FaCodeBranch className="mr-1.5" /> {formatStat(repo.forks_count)}
        </a>
        <div className="flex items-center">
          <FaEye className="mr-1.5" /> {formatStat(repo.watchers_count)}
        </div>
      </div>
    </div>
  );
};

export default GitHubRepoCard;