'use client';

import { portfolioData } from '@/data/portfolio';
import { ThemeToggle } from './ThemeToggle';
import { Terminal } from 'lucide-react';

export function Navbar() {
  const navItems = [
    'Home',
    'Skills',
    'Experience',
    'Projects',
    'Contact',
    'Lab',
  ];

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-[100] bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md border border-neutral-light/50 dark:border-white/10 rounded-2xl shadow-xl shadow-black/5">
      <div className="px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-black dark:bg-white rounded-lg flex items-center justify-center">
            <Terminal className="w-4 h-4 text-white dark:text-black" />
          </div>
          <span className="text-lg font-bold tracking-tight text-black dark:text-white">
            {portfolioData.name}
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isLab = item === 'Lab';
            const href = isLab ? '/tech-lab' : `/#${item.toLowerCase()}`;
            return (
              <a
                key={item}
                className="text-[12px] font-bold text-neutral-grey hover:text-black dark:hover:text-white transition-colors tracking-widest uppercase"
                href={href}
              >
                {item}
              </a>
            );
          })}
          <div className="h-4 w-px bg-neutral-light dark:bg-white/10"></div>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
