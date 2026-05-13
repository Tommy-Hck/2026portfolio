import { motion } from "motion/react";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

const FADE_UP = {
  initial:    { opacity: 0, y: 24 },
  animate:    { opacity: 1, y: 0  },
  transition: { duration: 0.6     },
};

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 text-center">
      {/* Badge */}
      <motion.div {...FADE_UP} transition={{ duration: 0.5 }}>
        <span className="inline-block px-4 py-1.5 rounded-full border border-blue-500/40 bg-blue-500/10 text-blue-400 text-sm mb-8 tracking-wide">
          JavaScript · React · Node.js · C++
        </span>
      </motion.div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-5xl md:text-7xl text-white mb-6 leading-tight"
        style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 }}
      >
        Développeur{" "}
        <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Junior
        </span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-10"
      >
        J'aime créer des interfaces intuitives et performantes, et développer des
        applications web de bout en bout. Je développe également mes compétences
        en C++ et en programmation de micro‑contrôleurs afin d'élargir mon champ
        de compétences vers les systèmes embarqués.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex flex-wrap gap-4 justify-center mb-14"
      >
        <a
          href="mailto:contact@example.com"
          className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors text-white text-sm"
        >
          <Mail className="w-4 h-4" />
          Me contacter
        </a>
        <a
          href="#projects"
          className="flex items-center gap-2 px-6 py-3 border border-zinc-700 hover:border-zinc-500 rounded-lg transition-colors text-zinc-300 text-sm"
        >
          Voir les projets
        </a>
      </motion.div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex gap-6 mb-20"
      >
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-500 hover:text-white transition-colors"
          aria-label="GitHub"
        >
          <Github className="w-5 h-5" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-500 hover:text-white transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-5 h-5" />
        </a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="text-zinc-600"
      >
        <ArrowDown className="w-5 h-5" />
      </motion.div>
    </section>
  );
}