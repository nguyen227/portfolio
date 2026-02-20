'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, FlaskConical } from 'lucide-react';
import Link from 'next/link';
import { portfolioData } from '@/data/portfolio';
import { SmoothScroll } from '@/components/SmoothScroll';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function LabPage() {
  return (
    <SmoothScroll>
      <div className="min-h-screen font-sans selection:bg-primary/20 bg-white dark:bg-black text-neutral-charcoal dark:text-white transition-colors">
        <Navbar />

        <main className="max-w-7xl mx-auto px-6 pt-40 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-bold text-neutral-grey hover:text-black dark:hover:text-white transition-colors mb-12 uppercase tracking-widest"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                <FlaskConical className="w-6 h-6" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
                Tech <span className="text-primary italic">Lab.</span>
              </h1>
            </div>
            <p className="text-xl text-neutral-grey max-w-2xl leading-relaxed">
              An experimental space for technical prototypes, open-source
              projects, and architectural deep-dives.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.labProjects.map((project, index) => (
              <motion.a
                key={project.title}
                href={project.link}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-8 rounded-[40px] border border-neutral-light dark:border-white/10 bg-white dark:bg-neutral-900/50 shadow-sm hover:shadow-2xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-2xl font-bold tracking-tight text-black dark:text-white group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <ExternalLink className="w-5 h-5 text-neutral-grey group-hover:text-primary transition-colors" />
                  </div>
                  <p className="text-neutral-grey leading-relaxed mb-8">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full bg-neutral-light/30 dark:bg-white/5 text-[10px] font-bold uppercase tracking-wider text-neutral-grey dark:text-white/40"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.a>
            ))}
          </div>
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}
