import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Mail, Github, Linkedin, ArrowUpRight, MessageCircle } from 'lucide-react';

const contactLinks = [
  {
    Icon: Mail,
    label: 'Email',
    value: 'dennisrua@email.com',
    href: 'mailto:dennisrua@email.com',
    color: 'from-rose-500 to-orange-500',
  },
  {
    Icon: Github,
    label: 'GitHub',
    value: '@dennisrua',
    href: 'https://github.com/dennisrua',
    color: 'from-gray-600 to-gray-800',
  },
  {
    Icon: Linkedin,
    label: 'LinkedIn',
    value: 'Dennis Rua Mazerah',
    href: 'https://linkedin.com/in/dennisrua',
    color: 'from-blue-500 to-blue-700',
  },
];

const ContactSection = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background Glow */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] opacity-20 pointer-events-none"
        style={{ 
          background: 'radial-gradient(ellipse, hsl(38 92% 55% / 0.3) 0%, transparent 70%)'
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Get In Touch
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            I'm always open to discussing new opportunities, creative projects, 
            or just having a conversation about technology and design.
          </p>
        </motion.div>

        {/* CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="card-glass rounded-2xl p-8 md:p-12 text-center mb-12"
        >
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
            <MessageCircle className="w-10 h-10 text-primary" />
          </div>
          <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
            Ready to Build Something Amazing?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Whether you have a project in mind or just want to chat, I'd love to hear from you. 
            Let's create something exceptional together.
          </p>
          <a
            href="mailto:dennisrua@email.com"
            className="btn-primary inline-flex items-center gap-2"
          >
            <Mail className="w-5 h-5" />
            Say Hello
          </a>
        </motion.div>

        {/* Contact Links */}
        <div className="grid md:grid-cols-3 gap-4">
          {contactLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="skill-card group flex items-center gap-4"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${link.color} flex items-center justify-center flex-shrink-0`}>
                <link.Icon className="w-6 h-6 text-foreground" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-sm text-muted-foreground">{link.label}</span>
                <p className="text-foreground font-medium truncate">{link.value}</p>
              </div>
              <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
