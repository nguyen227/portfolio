'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

export function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-12 py-8">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="flex-1 space-y-10 max-w-2xl text-center md:text-left"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-100 dark:border-emerald-500/20 text-[11px] font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mx-auto md:mx-0">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
          {portfolioData.hero.availability}
        </div>

        <h1 className="text-6xl md:text-6xl font-bold tracking-tighter leading-[0.9] text-black dark:text-white">
          {portfolioData.hero.title.split(' ').slice(0, -2).join(' ')} <br />
          <span className="text-primary italic">
            {portfolioData.hero.title.split(' ').slice(-2).join(' ')}
          </span>
        </h1>

        <h2 className="text-lg md:text-xl font-medium text-neutral-grey dark:text-slate-400 leading-relaxed max-w-xl mx-auto md:mx-0">
          {portfolioData.hero.subtitle}
        </h2>

        <div className="flex flex-wrap justify-center md:justify-start gap-5">
          <button className="bg-black dark:bg-white dark:text-black text-white px-8 py-4 rounded-full font-bold text-sm hover:scale-105 transition-all shadow-xl shadow-black/10 flex items-center gap-2">
            Download Resume
            <Download className="w-4 h-4" strokeWidth={3} />
          </button>
          <a
            className="bg-white dark:bg-neutral-900 border border-neutral-light dark:border-white/10 px-8 py-4 rounded-full font-bold text-sm hover:bg-neutral-light/50 dark:hover:bg-white/10 transition-all shadow-sm flex items-center gap-2 text-black dark:text-white"
            href="#projects"
          >
            View Projects
          </a>
        </div>

        <div className="flex justify-center md:justify-start gap-4">
          <a
            href={portfolioData.socials.github}
            target="_blank"
            className="w-12 h-12 rounded-2xl border border-neutral-light dark:border-white/10 flex items-center justify-center text-neutral-grey hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white transition-all shadow-sm bg-white dark:bg-black"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={portfolioData.socials.linkedin}
            target="_blank"
            className="w-12 h-12 rounded-2xl border border-neutral-light dark:border-white/10 flex items-center justify-center text-neutral-grey hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white transition-all shadow-sm bg-white dark:bg-black"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${portfolioData.email}`}
            className="w-12 h-12 rounded-2xl border border-neutral-light dark:border-white/10 flex items-center justify-center text-neutral-grey hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white transition-all shadow-sm bg-white dark:bg-black"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        className="relative group mx-auto md:mx-0"
      >
        <div className="w-[300px] h-[300px] md:w-[420px] md:h-[420px] rounded-full overflow-hidden border-8 border-white dark:border-neutral-900 shadow-2xl relative z-10 transition-transform duration-500 group-hover:scale-[1.02]">
          <Image
            src="/images/avatar.jpg"
            alt={portfolioData.name}
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
      </motion.div>
    </section>
  );
}
