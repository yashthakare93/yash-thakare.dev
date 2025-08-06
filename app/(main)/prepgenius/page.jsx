// app/(main)/til/page.jsx
import NavLinks from "../../components/NavLinks";
import PrepGeniusTimelineCard from "../../components/PrepGeniusTimelineCard";

export default function TilPage() {
    return (
        <>
            <header className="sticky top-0 z-10 lg:p-10 p-6 pb-6 bg-white/80 dark:bg-[#111111]/80 backdrop-blur-md">
                <NavLinks />
            </header>
            <main className="px-10 pb-10">
                <div className="relative">
                    <div className="space-y-8">
                        {/* Render the PrepGeniusTimelineCard once */}
                        <PrepGeniusTimelineCard />
                    </div>
                </div>
            </main>
        </>
    )
}