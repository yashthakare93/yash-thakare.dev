// app/components/NavLinks.jsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
    { name: 'Projects', href: '/' },
    { name: 'Experience', href: '/experience' },
    { name: 'PrepGenius', href: '/prepgenius' },
    { name: 'Certificates', href: '/certificates' },
];

const NavLinks = () => {
    const pathname = usePathname();

    return (
        <div className="flex items-center space-x-2 border border-slate-300 dark:border-zinc-800 bg-slate-200/50 dark:bg-[#161616] p-1 rounded-lg w-min">
            {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={`py-1 px-2 lg:py-1.5 lg:px-4 rounded-md text-sm font-medium transition-colors ${isActive
                                ? 'bg-zinc-800 text-white'
                                : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
                            }`}
                    >
                        {link.name}
                    </Link>
                );
            })}
        </div>
    );
};

export default NavLinks;
