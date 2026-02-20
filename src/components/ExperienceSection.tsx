'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';

export function ExperienceSection() {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setContainerHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 10%', 'end 50%'],
  });

  const heightTransform = useTransform(
    scrollYProgress,
    [0, 1],
    [0, containerHeight],
  );
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <section
      className="py-32 w-full font-sans"
      id="experience"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto mb-20 px-4 md:px-8">
        <h2 className="text-4xl md:text-7xl mb-4 text-black dark:text-white max-w-4xl font-bold tracking-tighter">
          Work <span className="text-primary italic">Experience.</span>
        </h2>
        <p className="text-neutral-grey dark:text-neutral-400 text-lg max-w-xl leading-relaxed">
          A track record of shipping production-grade systems and leading
          engineering teams across diverse sectors.
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {portfolioData.experience.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-800 transition-colors duration-500">
                {item.period.split(' — ')[0]}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-700">
                {item.period}
              </h3>
              <div className="space-y-6">
                <div className="flex flex-col gap-2">
                  <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px] block md:hidden">
                    {item.period}
                  </span>
                  <h4 className="text-2xl md:text-5xl font-bold text-black dark:text-white tracking-tight">
                    {item.role}
                  </h4>
                  <div className="text-neutral-grey font-bold text-xl md:text-2xl">
                    {item.company}
                  </div>
                </div>
                <p className="text-neutral-grey dark:text-neutral-400 text-base md:text-xl max-w-2xl leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          </div>
        ))}

        <div
          style={{
            height: containerHeight + 'px',
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-800 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-primary via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </section>
  );
}
