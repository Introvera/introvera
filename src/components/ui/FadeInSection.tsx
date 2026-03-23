"use client";

import { motion } from "framer-motion";

export default function FadeInSection({ 
  children, 
  className = "",
  id
}: { 
  children: React.ReactNode; 
  className?: string;
  id?: string;
}) {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.1 }}
      className={className}
      id={id}
    >
      {children}
    </motion.section>
  );
}
