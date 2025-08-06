'use client';
import { useState, useEffect } from 'react';
import ProjectCard from "../components/ProjectCard";
import GitHubRepoCard from "../components/GitHubRepoCard";
import NavLinks from '../components/NavLinks';
import { projectsData } from "../data";

export default function HomePage() {
    const [dataSource, setDataSource] = useState('Projects');
    const [searchQuery, setSearchQuery] = useState('');
    const [githubRepos, setGithubRepos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    // Your GitHub username for the contribution graph
    const githubUsername = 'yashthakare93';

    useEffect(() => {
        if (dataSource === 'GitHub') {
            const fetchReposAndLanguages = async () => {
                setIsLoading(true);
                setError(null);
                try {
                    const repoRes = await fetch('https://api.github.com/users/yashthakare93/repos?sort=pushed&per_page=12');
                    if (!repoRes.ok) throw new Error('Failed to fetch GitHub repositories.');
                    let repos = await repoRes.json();
                    const reposWithLanguages = await Promise.all(
                        repos.map(async (repo) => {
                            try {
                                const langRes = await fetch(repo.languages_url);
                                if (!langRes.ok) return { ...repo, languages: {} };
                                const languages = await langRes.json();
                                return { ...repo, languages };
                            } catch (langError) { return { ...repo, languages: {} }; }
                        })
                    );
                    setGithubRepos(reposWithLanguages);
                } catch (err) { setError(err.message); } finally { setIsLoading(false); }
            };
            fetchReposAndLanguages();
        }
    }, [dataSource]);

    // Enhanced filtering logic for featured projects
    const filteredProjects = projectsData.filter(p => {
        const query = searchQuery.toLowerCase();
        // Check if query is in title
        const matchesTitle = p.title.toLowerCase().includes(query);
        // Check if query is in description
        const matchesDescription = p.description.toLowerCase().includes(query);
        // Check if any tag includes the query
        const matchesTags = p.tags.some(tag => tag.toLowerCase().includes(query));
        return matchesTitle || matchesDescription || matchesTags;
    });

    // The filtering for GitHub repos remains the same since they don't have descriptions in the same format
    const filteredRepos = githubRepos.filter(r => r.name.toLowerCase().includes(searchQuery.toLowerCase()));

    return (
        <>
            {/* On desktop, this header is sticky. On mobile, it scrolls with the page. */}
            <header className="lg:sticky top-0 z-30 p-6 lg:p-10 pb-6 bg-white/80 dark:bg-[#111111]/80 backdrop-blur-md">
                <div className="mb-8">
                    <NavLinks />
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                    <input type="text" placeholder="Search projects..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="flex-grow bg-slate-100 dark:bg-zinc-800 border border-slate-300 dark:border-zinc-700 rounded-md px-4 py-2 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500" />
                    <select value={dataSource} onChange={(e) => { setDataSource(e.target.value); setSearchQuery(''); }} className="bg-slate-100 dark:bg-zinc-800 border border-slate-300 dark:border-zinc-700 rounded-md px-4 py-2 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500">
                        <option value="Projects">Featured</option>
                        <option value="GitHub">GitHub</option>
                    </select>
                </div>
            </header>

            <main className="px-6 lg:px-10 pb-10 ">
                {dataSource === 'Projects' && (
                    <div className="group/list">{filteredProjects.map(project => (<ProjectCard key={project.id} project={project} />))}</div>
                )}
                {dataSource === 'GitHub' && (
                    <div>
                        {/* GitHub Contribution Graph */}
                        <div className="mb-8 p-4 bg-slate-50 dark:bg-zinc-800 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-4">GitHub Contributions</h3>
                            {/* Using ghchart.rshah.org for the contribution graph image */}
                            <img
                                src={`https://ghchart.rshah.org/${githubUsername}`}
                                alt="GitHub Contribution Graph"
                                className="w-full h-auto rounded-md border border-zinc-200 dark:border-zinc-700"
                            />
                            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-2 text-center">
                                Data powered by <a href="https://ghchart.rshah.org/" target="_blank" rel="noopener noreferrer" className="underline hover:text-teal-500">ghchart.rshah.org</a>
                            </p>
                        </div>

                        {/* Top Languages Card */}
                        <div className="mb-8 p-4 bg-slate-50 dark:bg-zinc-800 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-4">Top Languages</h3>
                            <img
                                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUsername}&layout=compact&theme=dark&hide_border=true`}
                                alt="Top Languages"
                                className="w-full h-auto rounded-md border border-zinc-200 dark:border-zinc-700"
                            />
                             <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-2 text-center">
                                Languages powered by <a href="https://github.com/anuraghazra/github-readme-stats" target="_blank" rel="noopener noreferrer" className="underline hover:text-teal-500">github-readme-stats</a>
                            </p>
                        </div>

                        {isLoading && <p className="text-zinc-500">Loading GitHub repos...</p>}
                        {error && <p className="text-red-500">Error: {error}</p>}
                        {!isLoading && !error && (<div className="grid grid-cols-1 md:grid-cols-2 gap-4">{filteredRepos.map(repo => (<GitHubRepoCard key={repo.id} repo={repo} />))}</div>)}
                    </div>
                )}
            </main>
        </>
    );
}