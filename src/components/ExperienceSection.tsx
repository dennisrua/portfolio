import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: 'Frontend Developer Intern',
    company: 'Quickkopa Micro Enterprises Ltd',
    location: 'Nairobi, Kenya',
    period: '2023 - Present',
    description: [
      'Developed and maintained responsive web applications using React and Tailwind CSS',
      'Collaborated with the design team to implement pixel-perfect UI components',
      'Optimized application performance resulting in 40% faster load times',
      'Participated in code reviews and contributed to team best practices',
    ],
    current: true,
  },
  {
    title: 'Freelance Web Developer',
    company: 'Self-Employed',
    location: 'Remote',
    period: '2022 - 2023',
    description: [
      'Built custom websites for small businesses and startups',
      'Implemented responsive designs with focus on mobile-first approach',
      'Integrated third-party APIs and payment gateways',
      'Managed client relationships and project timelines',
    ],
    current: false,
  },
  {
    title: 'Computer Science Student',
    company: 'University',
    location: 'Kenya',
    period: '2020 - 2024',
    description: [
      'Studied Data Structures, Algorithms, and Software Engineering',
      'Completed multiple projects in web and mobile development',
      'Active member of the coding club and hackathon participant',
    ],
    current: false,
  },
];

const ExperienceSection = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="experience" className="section-padding bg-secondary/20 relative">
      <div className="max-w-4xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Career Journey
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey in software development, from learning to creating impact.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="timeline-line" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                className="relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-8"
              >
                {/* Timeline Dot */}
                <div className="absolute left-2.5 md:left-1/2 md:-translate-x-1/2 top-0">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isVisible ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.15 }}
                    className="timeline-dot"
                  />
                </div>

                {/* Content */}
                <div className={`md:${index % 2 === 0 ? 'text-right pr-12' : 'col-start-2 pl-12'}`}>
                  <div className={`skill-card ${exp.current ? 'border-primary/30' : ''}`}>
                    {exp.current && (
                      <span className="inline-block px-2 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full mb-3">
                        Current
                      </span>
                    )}
                    
                    <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                      {exp.title}
                    </h3>
                    
                    <div className="flex items-center gap-2 text-primary font-medium mb-3">
                      <Briefcase className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </span>
                    </div>
                    
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                          <span className="text-primary mt-1.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
