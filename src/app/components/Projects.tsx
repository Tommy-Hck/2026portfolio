import { motion } from "motion/react";
import { Code, SearchCheck, Eye, Smartphone, ExternalLink } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Project = {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  tags: string[];
  gradient: string;
  url: string;
};

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Intégration de maquette d'un site de vacances",
    description:
      "Réalisation de l'intégration de la maquette d'un site de planification de vacances Reservia.",
    icon: Code,
    tags: ["HTML5", "CSS3", "Git", "GitHub"],
    gradient: "from-blue-500 to-cyan-500",
    url: "https://tommy-hck.github.io/ThomasHuylebroeck_2_06042021/",
  },
  {
    id: 2,
    title: "Optimisation SEO d'un site web",
    description:
      "Amélioration du référencement naturel d'un site web en optimisant les balises meta, les titres, et en améliorant la structure du contenu.",
    icon: SearchCheck,
    tags: ["SEO", "Aria Labels", "Minification", "BlackHat SEO"],
    gradient: "from-purple-500 to-pink-500",
    url: "https://tommy-hck.github.io/ThomasHuylebroeck_2_14062022/",
  },
  {
    id: 3,
    title: "Développer le back-end d'un site en API Rest sécurisée",
    description:
      "Initialisation du serveur, mise en place de token pour une authentification sécurisée, intégration d'une base de données.",
    icon: Eye,
    tags: ["Node.js", "Express", "Mongoose", "JsonWebToken"],
    gradient: "from-orange-500 to-red-500",
    url: "https://github.com/Tommy-Hck/ThomasHuylebroeck_6_14102023",
  },
  {
    id: 4,
    title: "Développer un site web mobile first",
    description:
      "Création d'un site web responsive pour référencer les menus gastronomiques, avec une interface utilisateur optimisée pour les appareils mobiles.",
    icon: Smartphone,
    tags: ["HTML5", "CSS3", "Responsive design"],
    gradient: "from-green-500 to-emerald-500",
    url: "https://tommy-hck.github.io/ThomasHuylebroeck_3_11012022/",
  },
];

export function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
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
            Projets
          </h2>
          <p className="text-zinc-500 max-w-xl mx-auto">
            Quelques projets réalisés durant ma formation.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.a
                key={project.id}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-zinc-900/60 backdrop-blur-sm rounded-2xl p-6 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 hover:shadow-2xl block"
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-5`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Title */}
                <h3
                  className="text-white mb-3"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-zinc-400 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-zinc-800 text-zinc-400 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link indicator */}
                <div className="mt-5 flex items-center gap-1 text-xs text-zinc-600 group-hover:text-blue-400 transition-colors">
                  <ExternalLink className="w-3 h-3" />
                  <span>Voir le projet</span>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
