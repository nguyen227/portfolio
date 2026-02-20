'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';

export function ContactSection() {
  return (
    <section className="py-32" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-black dark:bg-white text-white dark:text-black rounded-[64px] p-10 md:p-24 overflow-hidden relative shadow-3xl"
      >
        <div className="relative z-10 grid md:grid-cols-2 gap-20">
          <div className="space-y-12">
            <h2 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight italic">
              Let&apos;s build <br />
              together.
            </h2>
            <div className="space-y-6">
              <p className="text-xl text-white/70 dark:text-black/70 leading-relaxed font-medium">
                Have a project in mind? Reach out and let&apos;s create
                something exceptional.
              </p>
              <a
                className="text-2xl md:text-4xl font-bold hover:underline decoration-primary decoration-4 underline-offset-8 transition-all block"
                href={`mailto:${portfolioData.email}`}
              >
                {portfolioData.email}
              </a>
            </div>
            <div className="flex gap-8">
              {Object.entries(portfolioData.socials).map(([key, value]) => (
                <a
                  key={key}
                  className="text-[12px] font-black uppercase tracking-[0.4em] opacity-40 hover:opacity-100 transition-opacity"
                  href={value}
                  target="_blank"
                >
                  {key}
                </a>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-full max-w-[320px] aspect-square bg-white/5 dark:bg-black/5 rounded-full flex flex-col items-center justify-center p-12 text-center border border-white/10 dark:border-black/10 backdrop-blur-md">
              <div className="text-[10px] font-black text-primary uppercase tracking-[0.5em] mb-4">
                Current Local Time
              </div>
              <div className="text-4xl md:text-6xl font-black mb-4 tracking-tighter tabular-nums">
                {new Date().toLocaleTimeString('en-US', {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </div>
              <div className="text-[11px] font-bold opacity-40 uppercase tracking-widest">
                {portfolioData.location}
              </div>
            </div>
          </div>
        </div>
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-20 -right-20 w-[60%] h-[60%] bg-primary/20 blur-[150px] rounded-full"
        ></motion.div>
      </motion.div>
    </section>
  );
}
