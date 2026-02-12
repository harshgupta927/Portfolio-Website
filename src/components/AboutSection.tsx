import { motion } from "framer-motion";
import { Target, Zap, Brain } from "lucide-react";

const highlights = [
  { icon: <Brain size={22} />, title: "AI & ML Focus", desc: "Deep expertise in machine learning, NLP, computer vision, and generative AI." },
  { icon: <Zap size={22} />, title: "Full-Stack Capable", desc: "Proficient across Python, Java, JavaScript, and modern cloud tools." },
  { icon: <Target size={22} />, title: "Impact-Driven", desc: "Building scalable solutions that solve real-world problems." },
];

const AboutSection = () => (
  <section id="about" className="section-padding">
    <div className="max-w-5xl mx-auto">
      <SectionTitle label="About Me" />

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto text-center mb-12"
      >
        Enthusiastic and quick-learning Computer Science student with hands-on experience in
        software development, data analysis, AI/ML models, and web applications. Seeking to
        contribute to a growth-oriented IT team and develop scalable, impact-driven technology
        solutions.
      </motion.p>

      <div className="grid md:grid-cols-3 gap-6">
        {highlights.map((h, i) => (
          <motion.div
            key={h.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="glass rounded-xl p-6 hover:border-primary/30 transition-colors duration-300"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
              {h.icon}
            </div>
            <h3 className="font-semibold text-foreground mb-2">{h.title}</h3>
            <p className="text-sm text-muted-foreground">{h.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export const SectionTitle = ({ label }: { label: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="text-center mb-12"
  >
    <h2 className="text-3xl md:text-4xl font-bold text-foreground">{label}</h2>
    <div className="mt-3 mx-auto w-16 h-1 rounded-full bg-primary" />
  </motion.div>
);

export default AboutSection;
