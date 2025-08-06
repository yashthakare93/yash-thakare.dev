const ExperienceItem = ({ job }) => (
    <div className="mb-12">
        <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4">
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-100 dark:lg:group-hover:bg-zinc-800/50"></div>
            <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-zinc-500 sm:col-span-2">{job.date}</header>
            <div className="z-10 sm:col-span-6">
                <h3 className="font-medium leading-snug text-zinc-800 dark:text-slate-200">
                    <div>
                        {job.certificateLink ? (
                            <a href={job.certificateLink} target="_blank" rel="noopener noreferrer" className="inline-block font-medium hover:text-teal-500">{job.title} · {job.company}</a>
                        ) : (
                            <span className="inline-block font-medium">{job.title} · {job.company}</span>
                        )}
                    </div>
                </h3>
                <ul className="mt-2 list-disc list-inside text-zinc-600 dark:text-zinc-400 space-y-1">
                    {job.details.map((detail, i) => <li key={i}>{detail}</li>)}
                </ul>
                <ul className="mt-2 flex flex-wrap" aria-label="Technologies used:">
                    {job.tags.map((tag, index) => (
                        <li key={index} className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-500 dark:text-teal-300 ">{tag}</div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
);
export default ExperienceItem;