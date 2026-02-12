import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { SectionTitle } from "./AboutSection";

const projects = [
  {
    title: "Multi-Modal Stock Market Prediction",
    desc: "Hybrid deep learning framework combining Prophet trend forecasting with LSTM residual modeling, achieving ~72% directional accuracy.",
    tech: ["Python", "LSTM", "Prophet", "ARIMA", "Streamlit", "VADER"],
    highlights: [
      "Technical indicators: RSI, MACD, EMA",
      "Anomaly detection with Isolation Forest",
      "Real-time BUY/HOLD/SELL recommendations",
    ],
    github: "#",
  },
  {
    title: "Pose Detection Web App",
    desc: "Real-time pose detection website using PoseNet (ml5.js) and p5.js, deployed on AWS with global CDN delivery.",
    tech: ["ml5.js", "p5.js", "AWS S3", "CloudFront"],
    highlights: [
      "Heatmaps & body measurement tools",
      "Breathing animation features",
      "Low-latency global access via CDN",
    ],
    github: "#",
    live: "#",
  },
  {
    title: "Medical Recommendation System",
    desc: "ML-powered disease prediction system processing symptom inputs to generate predictions and medicine recommendations.",
    tech: ["Flask", "Python", "ML", "HTML/CSS", "JavaScript"],
    highlights: [
      "Symptom-based disease prediction",
      "Personalized medicine recommendations",
      "Data-driven medical insights",
    ],
    github: "#",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="section-padding">
    <div className="max-w-5xl mx-auto">
      <SectionTitle label="Projects" />

      <div className="grid gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className="glass rounded-xl p-6 md:p-8 hover:border-primary/30 transition-colors duration-300 group"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
              <div>
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <p className="text-muted-foreground mt-1">{p.desc}</p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                {p.github && (
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all">
                    <Github size={16} />
                  </a>
                )}
                {p.live && (
                  <a href={p.live} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all">
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>

            <ul className="text-sm text-muted-foreground space-y-1 mb-4">
              {p.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2">
                  <span className="text-primary mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                  {h}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span key={t} className="px-2.5 py-1 text-xs rounded-md bg-secondary text-secondary-foreground font-mono">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
