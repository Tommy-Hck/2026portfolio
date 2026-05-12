import { motion } from "motion/react";
import { Mail, MapPin, Github, Linkedin, Download } from "lucide-react";

const CONTACT_CARDS = [
  {
    id: "email",
    icon: Mail,
    title: "Email",
    content: "contact@example.com",
    href: "mailto:contact@example.com",
  },
  {
    id: "location",
    icon: MapPin,
    title: "Localisation",
    content: "Paris, France",
    href: null,
    sub: "Disponible en remote",
  },
];

const SOCIAL_LINKS = [
  { label: "GitHub",   icon: Github,   href: "https://github.com"   },
  { label: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
];

export function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2
            className="text-4xl md:text-5xl text-white mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 }}
          >
            Construisons quelque chose
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              de spatial
            </span>
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto">
            Disponible pour des projets freelance et des opportunités en temps plein
            dans le spatial computing, la 3D et les technologies géospatiales.
          </p>
        </motion.div>

        {/* Contact cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid sm:grid-cols-2 gap-4 mb-10"
        >
          {CONTACT_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className="bg-zinc-900/60 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8 hover:border-zinc-700 transition-colors"
              >
                <Icon className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <p
                  className="text-white mb-1"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}
                >
                  {card.title}
                </p>
                {card.href ? (
                  <a
                    href={card.href}
                    className="text-zinc-400 hover:text-blue-400 transition-colors text-sm"
                  >
                    {card.content}
                  </a>
                ) : (
                  <p className="text-zinc-400 text-sm">{card.content}</p>
                )}
                {card.sub && (
                  <p className="text-zinc-600 text-xs mt-1">{card.sub}</p>
                )}
              </div>
            );
          })}
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-4 mb-10"
        >
          {SOCIAL_LINKS.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 border border-zinc-800 hover:border-zinc-600 rounded-lg text-zinc-400 hover:text-white transition-all text-sm"
              >
                <Icon className="w-4 h-4" />
                {link.label}
              </a>
            );
          })}
        </motion.div>

        {/* Download CV */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 rounded-xl transition-all text-white text-sm shadow-lg shadow-blue-500/20">
            <Download className="w-4 h-4" />
            Télécharger le CV
          </button>
        </motion.div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-zinc-700 text-xs mt-16"
        >
          © {new Date().getFullYear()} — Spatial Developer Portfolio
        </motion.p>
      </div>
    </section>
  );
}
