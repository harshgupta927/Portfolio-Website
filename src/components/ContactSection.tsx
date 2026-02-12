import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Linkedin, Github } from "lucide-react";
import { SectionTitle } from "./AboutSection";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Open mailto as fallback
    window.location.href = `mailto:harshgupta9029@gmail.com?subject=Portfolio Contact from ${form.name}&body=${form.message}`;
    setSent(true);
  };

  return (
    <section id="contact" className="section-padding bg-card/30">
      <div className="max-w-5xl mx-auto">
        <SectionTitle label="Get In Touch" />

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-muted-foreground">
              I'm always open to discussing new projects, opportunities, or collaborations. Feel free to reach out!
            </p>

            <div className="space-y-4">
              <ContactInfo icon={<Mail size={18} />} label="harshgupta9029@gmail.com" href="mailto:harshgupta9029@gmail.com" />
              <ContactInfo icon={<MapPin size={18} />} label="Bengaluru, Karnataka" />
              <ContactInfo icon={<Linkedin size={18} />} label="LinkedIn" href="https://linkedin.com/in/" />
              <ContactInfo icon={<Github size={18} />} label="GitHub" href="https://github.com/" />
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="glass rounded-xl p-6 space-y-4"
          >
            <input
              type="text"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors text-sm"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors text-sm"
            />
            <textarea
              placeholder="Your Message"
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors text-sm resize-none"
            />
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity glow-sm"
            >
              <Send size={16} /> {sent ? "Message Sent!" : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

const ContactInfo = ({ icon, label, href }: { icon: React.ReactNode; label: string; href?: string }) => (
  <div className="flex items-center gap-3">
    <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">{icon}</div>
    {href ? (
      <a href={href} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">{label}</a>
    ) : (
      <span className="text-sm text-muted-foreground">{label}</span>
    )}
  </div>
);

export default ContactSection;
