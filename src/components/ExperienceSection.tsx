import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { SectionTitle } from "./AboutSection";

const ExperienceSection = () => (
  <section id="experience" className="section-padding bg-card/30">
    <div className="max-w-5xl mx-auto">
      <SectionTitle label="Experience" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass rounded-xl p-6 md:p-8 max-w-3xl mx-auto"
      >
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
            <Briefcase size={22} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-foreground">Intern – Conversational Data Analysis</h3>
            <p className="text-primary font-mono text-sm">VOIS for Tech</p>
            <p className="text-xs text-muted-foreground mt-1 mb-4">Sep 2025 – Oct 2025</p>

            <ul className="space-y-2 text-sm text-muted-foreground">
              {[
                "Worked on Conversational Data Analytics using Large Language Models (LLMs).",
                "Analyzed real-world datasets and generated insights using AI-driven tools.",
                "Performed data preprocessing, visualization, and exploratory data analysis (EDA).",
                "Applied prompt engineering to improve accuracy and relevance of model responses.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ExperienceSection;
