import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import { SectionTitle } from "./AboutSection";

const EducationSection = () => (
  <section id="education" className="section-padding">
    <div className="max-w-5xl mx-auto">
      <SectionTitle label="Education & Achievements" />

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-xl p-6"
        >
          <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
            <GraduationCap size={22} />
          </div>
          <h3 className="font-bold text-foreground">B.Tech in Computer Science & Engineering</h3>
          <p className="text-primary font-mono text-sm mt-1">Dayananda Sagar University, Bengaluru</p>
          <div className="flex items-center gap-4 mt-3 text-sm text-muted-foreground">
            <span>CGPA: <span className="text-foreground font-semibold">8.16</span></span>
            <span>2022 – 2026</span>
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="glass rounded-xl p-6"
        >
          <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
            <Award size={22} />
          </div>
          <h3 className="font-bold text-foreground mb-3">Achievements</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
              Reliance Foundation Scholarship – Top 4000 students in India
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
              Active chess player enhancing strategic thinking
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
              Strong organizational skills managing multiple projects
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  </section>
);

export default EducationSection;
