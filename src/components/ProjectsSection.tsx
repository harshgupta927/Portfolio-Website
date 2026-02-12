import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { SectionTitle } from "./AboutSection";

const projects = [
  {
  title: "Multi-Modal Stock Market Prediction System",
  desc: "Hybrid deep learning framework combining Prophet trend forecasting with LSTM residual modeling, achieving ~72% directional accuracy for stock movement prediction.",
  tech: [
    "Python",
    "ARIMA",
    "Prophet",
    "LSTM",
    "Streamlit",
    "VADER",
    "Scikit-learn"
  ],
  highlights: [
    "Implemented ARIMA, Prophet, LSTM, and Hybrid LSTM-Prophet models",
    "Integrated technical indicators: RSI, MACD, EMA",
    "VADER-based sentiment analysis for market signals",
    "Anomaly detection using Isolation Forest",
    "Explainable HMCD decision engine for BUY/HOLD/SELL recommendations",
    "Real-time interactive dashboard built with Streamlit"
  ],
  github: "https://github.com/harshgupta927/Multi-Modal-Stock-Market-Prediction-System",
},

{ title: "Pose Detection Web App", desc: "Real-time pose detection website using PoseNet (ml5.js) and p5.js, deployed on AWS with global CDN delivery.", tech: ["ml5.js", "p5.js", "AWS S3", "CloudFront"],
    highlights: [
      "Heatmaps & body measurement tools",
      "Breathing animation features",
      "Low-latency global access via CDN",
    ],
    github: "https://github.com/harshgupta927/pose-detection",
    live: "https://d11gnqv47v3jdy.cloudfront.net/",
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
 {
  title: "Task Dependency Tracker",
  desc: "Full-stack task management system with dependency tracking, circular dependency detection, and real-time status updates using Django REST Framework and React.",
  tech: ["Django", "Django REST Framework", "MySQL", "React", "Tailwind CSS", "JavaScript", "SVG"],
  highlights: [
    "Circular dependency detection algorithm",
    "Automatic task status updates based on dependencies",
    "Interactive SVG-based dependency graph visualization",
    "RESTful API integration with React frontend",
  ],
  github: "https://github.com/harshgupta927/task-dependency-tracker",
},

{
  title: "X-Ray Image Search System",
  desc: "Deep learning–based medical image retrieval system that searches and matches similar X-ray images using feature extraction and CNN models.",
  tech: [
    "Python",
    "TensorFlow/Keras",
    "CNN",
    "OpenCV",
    "NumPy",
    "Flask/Streamlit"
  ],
  highlights: [
    "Feature extraction using pre-trained CNN models",
    "Similarity-based X-ray image retrieval",
    "Efficient image indexing and search mechanism",
    "Medical dataset preprocessing and augmentation",
    "Modular architecture with separate data and model pipelines"
  ],
  github: "https://github.com/harshgupta927/X-Ray-Image-Search",
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
