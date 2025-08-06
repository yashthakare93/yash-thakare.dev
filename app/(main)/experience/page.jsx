// app/(main)/experience/page.jsx
import NavLinks from "../../components/NavLinks";
import { experienceData } from "../../data/index";
import ExperienceItem from "../../components/ExperienceItem";

export default function ExperiencePage() {
    return (
        <>
            <header className="sticky top-0 z-10 p-6 lg:p-10 pb-6 bg-white/80 dark:bg-[#111111]/80 backdrop-blur-md">
                <NavLinks />
            </header>
            <main className="px-10 pt-8 pb-10">
                {experienceData.map(job => (
                    <ExperienceItem key={job.id} job={job} />
                ))}
            </main>
        </>
    )
}