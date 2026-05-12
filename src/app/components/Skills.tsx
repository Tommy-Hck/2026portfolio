import { motion } from "motion/react";

type Skill = { name: string; color: string; text: string };
type SkillCategory = { title: string; skills: Skill[] };

// Couleurs converties depuis les classes Tailwind d'origine
const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Langages",
    skills: [
      { name: "HTML5",      color: "#2563eb", text: "#ffffff" },
      { name: "CSS3",       color: "#f97316", text: "#ffffff" },
      { name: "Javascript", color: "#15803d", text: "#ffffff" },
    ],
  },
  {
    title: "Backend & API",
    skills: [
      { name: "Node.js", color: "#7e22ce", text: "#ffffff" },
      { name: "Express", color: "#0891b2", text: "#ffffff" },
      { name: "API REST", color: "#f97316", text: "#ffffff" },
    ],
  },
  {
    title: "Base de données",
    skills: [
      { name: "MongoDB", color: "#dc2626", text: "#ffffff" },
    ],
  },
  {
    title: "Authentification & sécurité",
    skills: [
      { name: "JWT",            color: "#2563eb", text: "#ffffff" },
      { name: "OAuth",          color: "#16a34a", text: "#ffffff" },
      { name: "Mongo-sanitize", color: "#ca8a04", text: "#ffffff" },
    ],
  },
  {
    title: "UI Libraries",
    skills: [
      { name: "React", color: "#0891b2", text: "#ffffff" },
    ],
  },
  {
    title: "Outils & utilitaires",
    skills: [
      { name: "Git",     color: "#1e40af", text: "#ffffff" },
      { name: "Npm",     color: "#f97316", text: "#ffffff" },
      { name: "Postman", color: "#0891b2", text: "#ffffff" },
      { name: "Winston", color: "#7e22ce", text: "#ffffff" },
    ],
  },
];

export function Skills() {
  return (
    <section id="expertise" className="px-6 py-24 bg-zinc-950/60">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl text-white mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 }}
          >
            Compétences Techniques
          </h2>
          <p className="text-zinc-500 max-w-xl mx-auto">
            Les outils et technologies que j'utilise.
          </p>
        </motion.div>

        {/* Categories grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {SKILL_CATEGORIES.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              {/* Category title */}
              <h3
                className="text-blue-400 mb-4"
                style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}
              >
                {category.title}
              </h3>

              {/* Skill badges */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                    whileHover={{ scale: 1.08, y: -2 }}
                    className="px-4 py-2 rounded-lg text-sm cursor-default select-none shadow-md"
                    style={{ backgroundColor: skill.color, color: skill.text }}
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
