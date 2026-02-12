import { motion } from "framer-motion";
import { SectionTitle } from "./AboutSection";

const categories = [
  {
    title: "Programming",
    skills: ["Python", "Java", "C", "JavaScript", "TypeScript", "SQL", "Bash", "OOP", "DSA"],
  },
  {
    title: "AI / ML",
    skills: [
"TensorFlow",
"PyTorch",
"Keras",
"Scikit-Learn",
"CNN",
"LSTM",
"Time Series Forecasting",
"ARIMA",
"Prophet",
"Isolation Forest",
"NLP",
"RAG",
"LLMs",
"Feature Engineering",
"Model Evaluation"
],
  },
  {
    title: "Data Science",
    skills: [
"Pandas",
"NumPy",
"SciPy",
"Matplotlib",
"Seaborn",
"EDA",
"Data Cleaning",
"Data Visualization",
"Statistical Analysis",
"Feature Selection",
"Model Evaluation"
],
  },
  {
    title: "Web & Tools",
    skills: [
"Flask",
"Django",
"Django REST Framework",
"React",
"Tailwind CSS",
"HTML/CSS",
"MySQL",
"MongoDB",
"REST APIs",
"Streamlit",
"AWS S3",
"CloudFront",
"Git",
"Docker"
],
  },
];

const SkillsSection = () => (
  <section id="skills" className="section-padding bg-card/30">
    <div className="max-w-5xl mx-auto">
      <SectionTitle label="Skills" />

      <div className="grid md:grid-cols-2 gap-8">
        {categories.map((cat, ci) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: ci * 0.1 }}
            className="glass rounded-xl p-6"
          >
            <h3 className="text-sm font-mono text-primary uppercase tracking-wider mb-4">
              {cat.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1.5 text-sm rounded-md bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
