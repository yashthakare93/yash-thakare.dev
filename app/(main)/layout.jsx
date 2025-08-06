// app/(main)/layout.jsx
import LeftSidebar from "../components/LeftSidebar";

export default function MainLayout({ children }) {
  return (
    // On mobile, this container grows with content. On desktop, it becomes a fixed frame.
    <div className="min-h-screen lg:h-screen bg-slate-100 dark:bg-black p-4 lg:p-6">
      
      {/*
        THE PERMANENT FIX:
        - `max-w-screen-xl` and `mx-auto` are GONE.
        - The card now has `w-full` to fill the container horizontally.
        - The height is `h-auto` on mobile (to allow scrolling) and `h-full` on desktop.
      */}
      <div className="w-full h-auto lg:h-full lg:flex border border-slate-300 dark:border-zinc-800 rounded-2xl shadow-lg bg-white dark:bg-[#111111] overflow-hidden">
        
        <LeftSidebar />
        
        <div className="border-l border-slate-200 dark:border-zinc-800 hidden lg:block"></div>

        <main className="lg:flex-1 lg:overflow-y-auto hide-scrollbar">
          {children}
        </main>
      </div>
    </div>
  );
}