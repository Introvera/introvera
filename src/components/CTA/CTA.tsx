"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.1 }}
      className="relative w-full bg-black py-16 sm:py-20" 
      id="cta"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 lg:gap-20">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
          className="flex-1 flex flex-col items-start text-left"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-[50px] font-medium leading-[1.15] text-white tracking-tight mb-10 mt-6 lg:mt-0">
            Let&apos;s Build Something<br />
            Great Together
          </h2>
          
          <div className="flex flex-wrap items-center justify-start gap-4">
            <span className="inline-flex rounded-full p-[6px] border border-[var(--color-accent)] bg-[var(--color-accent)]/40 transition-all duration-300">
              <Link
                href="/projects"
                className="inline-flex items-center gap-4 px-4 py-2 bg-[var(--color-accent)] text-white text-sm font-medium rounded-full transition-all duration-300 hover:bg-[var(--color-accent-hover)]"
              >
                View Our Work
                <ArrowUpRight size={22} />
              </Link>
            </span>

            <span className="inline-flex rounded-full p-[6px] border border-white bg-white/30 transition-all duration-300">
              <Link
                href="/contact"
                className="inline-flex items-center gap-4 px-4 py-2 bg-white text-[var(--color-accent)] text-sm font-medium rounded-full transition-all duration-300"
              >
                Start Your Project Now
                <ArrowUpRight size={22} />
              </Link>
            </span>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, margin: "-50px" }}
          className="w-full lg:w-1/2 flex justify-start lg:justify-end mb-6 lg:mb-0"
        >
          <div className="relative w-full max-w-[600px] aspect-[21/9] sm:aspect-[2/1] rounded-3xl overflow-hidden">
            <Image
              src="/images/backgrounds/cta.png" 
              alt="Bulb Idea"
              fill
              className="object-cover object-center"
            />
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
}
