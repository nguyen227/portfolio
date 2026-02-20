'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Database,
  Layers,
  Layout,
  Settings,
  TestTube,
} from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

const iconsMap: Record<string, React.ReactNode> = {
  'Programming Languages': <Code2 className="w-5 h-5" />,
  'DevOps & Tools': <Settings className="w-5 h-5" />,
  'Libraries & Frameworks': <Layers className="w-5 h-5" />,
  'Web Frameworks': <Layout className="w-5 h-5" />,
  'Backend & Databases': <Database className="w-5 h-5" />,
  Testing: <TestTube className="w-5 h-5" />,
};

export function SkillsSection() {
  return (
    <section className="py-32" id="skills">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mb-20 text-center md:text-left"
      >
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6 text-black dark:text-white">
          Technical Skills
        </h2>
        <p className="text-lg text-neutral-grey leading-relaxed">
          Equipped with a diverse range of technologies to build modern,
          scalable, and high-performance applications.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioData.skills.map((item, index) => (
          <motion.div
            key={item.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-10 rounded-[40px] border border-neutral-light dark:border-white/10 bg-white dark:bg-neutral-900/50 shadow-sm hover:shadow-xl transition-all group"
          >
            <div className="w-12 h-12 rounded-2xl bg-black dark:bg-white text-white dark:text-black flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              {iconsMap[item.category] || <Code2 className="w-5 h-5" />}
            </div>
            <h3 className="font-bold text-xl mb-6 text-black dark:text-white">
              {item.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {item.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-xl bg-neutral-light/50 dark:bg-white/5 text-[12px] font-bold text-neutral-grey dark:text-white/60"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
