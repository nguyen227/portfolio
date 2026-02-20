'use client';

import React, { useEffect, useRef } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useInView,
} from 'framer-motion';
import { portfolioData } from '@/data/portfolio';

function AnimatedNumber({ value }: { value: string }) {
  const num = parseInt(value);
  const suffix = value.replace(/[0-9]/g, '');
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });
  const displayValue = useTransform(
    springValue,
    (latest) => Math.round(latest) + suffix,
  );

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (isInView) {
      motionValue.set(num);
    }
  }, [isInView, num, motionValue]);

  return <motion.span ref={ref}>{displayValue}</motion.span>;
}

export function QuickStats() {
  return (
    <section className="grid grid-cols-2 md:grid-cols-3 gap-8 py-6 border-b border-neutral-light/50 dark:border-white/10">
      {portfolioData.stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="text-center md:text-left"
        >
          <div className="text-3xl md:text-5xl font-bold tracking-tighter mb-1 text-black dark:text-white">
            <AnimatedNumber value={stat.value} />
          </div>
          <div className="text-[10px] font-black text-neutral-grey uppercase tracking-[0.2em]">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </section>
  );
}
