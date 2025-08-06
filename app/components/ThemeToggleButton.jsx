// app/components/ThemeToggleButton.jsx
'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { IoSunnyOutline } from "react-icons/io5";
import { HiOutlineMoon } from "react-icons/hi";
export const ThemeToggleButton = () => {
    const [mounted, setMounted] = useState(false);
    // Using `resolvedTheme` is more robust as it gives you the actual theme ('light' or 'dark')
    // even if the user's setting is 'system'.
    const { setTheme, resolvedTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    // We show a placeholder until the component is mounted on the client
    if (!mounted) {
        return <div className="w-8 h-8 rounded-lg bg-slate-200 dark:bg-zinc-800 animate-pulse" />;
    }

    return (
        <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-zinc-800 transition-colors"
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
        >
            {resolvedTheme === 'dark' ? (
                <HiOutlineMoon className="h-5 w-5 text-white" />
            ) : (
                <IoSunnyOutline className="h-5 w-5 text-black" />
            )}
        </button>
    );
};