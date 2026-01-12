import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Astra Watch Website',
    description: 'A premium e-commerce platform for luxury timepieces featuring an elegant UI, smooth animations, and seamless shopping experience.',
    tech: ['React', 'Tailwind CSS', 'Framer Motion', 'REST API'],
    image: null,
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    title: 'Task Management App',
    description: 'A productivity application with drag-and-drop functionality, real-time updates, and intuitive task organization.',
    tech: ['React', 'TypeScript', 'Zustand', 'Tailwind'],
    image: null,
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
  {
    title: 'Weather Dashboard',
    description: 'A beautiful weather application with location-based forecasts, interactive maps, and stunning visualizations.',
    tech: ['Next.js', 'OpenWeather API', 'Chart.js', 'Geolocation'],
    image: null,
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
  {
    title: 'Portfolio Template',
    description: 'A customizable portfolio template for developers featuring modern animations and responsive design.',
    tech: ['React', 'GSAP', 'Tailwind CSS', 'TypeScript'],
    image: null,
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
];

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="projects" className="section-padding relative">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Featured Work
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Recent <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that showcase my skills and passion for building exceptional digital experiences.
          </p>
        </motion.div>

        {/* Featured Project */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <div className="project-card group">
            <div className="relative h-64 md:h-80 bg-gradient-to-br from-primary/20 via-secondary to-muted flex items-center justify-center">
              <div className="text-center p-8">
                <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full mb-4">
                  Featured Project
                </span>
                <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
                  {projects[0].title}
                </h3>
              </div>
              <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                <a
                  href={projects[0].liveUrl}
                  className="btn-primary flex items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
                <a
                  href={projects[0].githubUrl}
                  className="btn-outline flex items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </div>
            </div>
            <div className="p-6 md:p-8">
              <p className="text-muted-foreground mb-4">{projects[0].description}</p>
              <div className="flex flex-wrap gap-2">
                {projects[0].tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(1).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="project-card group"
            >
              <div className="relative h-48 bg-gradient-to-br from-muted via-secondary to-card flex items-center justify-center">
                <h3 className="font-display text-xl font-bold text-foreground text-center px-4">
                  {project.title}
                </h3>
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <a
                    href={project.liveUrl}
                    className="p-3 rounded-full bg-primary text-primary-foreground hover:scale-110 transition-transform"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View live demo"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="p-3 rounded-full bg-secondary text-secondary-foreground hover:scale-110 transition-transform"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View on GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <div className="p-5">
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 text-muted-foreground text-xs">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
