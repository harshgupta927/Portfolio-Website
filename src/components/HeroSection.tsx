import { motion } from "framer-motion";
import { Download, Linkedin, Github, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-primary font-mono text-sm tracking-widest uppercase mb-4"
        >
          Hello, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-5xl md:text-7xl font-black tracking-tight mb-4"
        >
          <span className="text-gradient">Harsh Gupta</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground font-medium mb-3"
        >
          AI/ML Engineer · Data Science Enthusiast · Software Developer
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 }}
          className="text-muted-foreground max-w-xl mx-auto mb-8"
        >
          Building intelligent, scalable technology solutions that make an impact.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="/Harsh_Gupta_Resume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity glow-sm"
          >
            <Download size={18} /> Download Resume
          </a>

          <div className="flex items-center gap-3">
            <SocialIcon href="https://linkedin.com/in/" icon={<Linkedin size={20} />} />
            <SocialIcon href="https://github.com/" icon={<Github size={20} />} />
            <SocialIcon href="mailto:harshgupta9029@gmail.com" icon={<Mail size={20} />} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const SocialIcon = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-11 h-11 rounded-lg border border-border bg-card/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-200"
  >
    {icon}
  </a>
);

export default HeroSection;
