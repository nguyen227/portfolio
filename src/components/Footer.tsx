import React from 'react';
import { portfolioData } from '@/data/portfolio';

export function Footer() {
  return (
    <footer className="py-24 text-center border-t border-neutral-light/50 dark:border-white/5 mt-20">
      <p className="text-[10px] font-black text-neutral-grey dark:text-white/40 uppercase tracking-[0.8em]">
        Copyright © {new Date().getFullYear()} {portfolioData.name} —{' '}
        {portfolioData.role}
      </p>
    </footer>
  );
}
