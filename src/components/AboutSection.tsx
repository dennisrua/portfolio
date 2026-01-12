import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Code2, Palette, Zap, Users } from 'lucide-react';

const highlights = [
  {
    Icon: Code2,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable code that stands the test of time.',
  },
  {
    Icon: Palette,
    title: 'UI/UX Focus',
    description: 'Crafting intuitive interfaces that users love to interact with.',
  },
  {
    Icon: Zap,
    title: 'Performance',
    description: 'Building fast, optimized applications that load in milliseconds.',
  },
  {
    Icon: Users,
    title: 'User-Centric',
    description: 'Putting user experience at the heart of every design decision.',
  },
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            About Me
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Turning Ideas Into{' '}
            <span className="text-gradient">Digital Reality</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I'm a passionate Frontend Engineer with expertise in building modern, 
              responsive web applications. My journey in software development has been 
              driven by a deep curiosity for creating seamless user experiences.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              With a strong foundation in <span className="text-foreground font-medium">React</span>, 
              <span className="text-foreground font-medium"> React Native</span>, and the modern 
              JavaScript ecosystem, I specialize in transforming complex requirements into 
              elegant, intuitive interfaces.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I believe great software is born from the intersection of technical excellence 
              and creative design. Every line of code I write is crafted with attention to 
              detail, accessibility, and performance in mind.
            </p>
          </motion.div>

          {/* Highlight Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map(({ Icon, title, description }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="skill-card"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground">{description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
