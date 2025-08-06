// app/(main)/certificates/page.jsx
import NavLinks from "../../components/NavLinks";
import { certificatesData } from "../../data/index";
import CertificateCard from "../../components/CertificateCard";

export default function CertificatesPage() {
    return (
        <>
            <header className="sticky top-0 z-10 p-6 lg:p-10 pb-6 bg-white/80 dark:bg-[#111111]/80 backdrop-blur-md">
                <NavLinks />
            </header>
            <main className="px-6 lg:px-10 pb-10 pt-8">
                <h2 className="text-2xl font-bold mb-8 text-zinc-900 dark:text-white">Certifications</h2>
                <div className="group/list">
                    {certificatesData.map(cert => (
                        <CertificateCard key={cert.id} certificate={cert} />
                    ))}
                </div>
            </main>
        </>
    )
}