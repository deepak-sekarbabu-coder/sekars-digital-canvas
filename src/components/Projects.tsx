import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Play, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'A full-stack e-commerce solution with modern UI, secure payments, and real-time inventory management. Features include user authentication, product catalog, shopping cart, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS', 'Docker'],
      features: [
        'User authentication & authorization',
        'Real-time inventory management',
        'Secure payment processing',
        'Admin dashboard with analytics',
        'Mobile-responsive design',
      ],
      liveUrl: '#',
      githubUrl: 'https://github.com/deepak-sekarbabu',
      status: 'Live',
      highlight: true,
    },
    {
      title: 'Task Management System',
      description:
        'A collaborative project management tool with real-time updates, team collaboration features, and advanced task tracking. Built for modern development teams.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Socket.io', 'Tailwind'],
      features: [
        'Real-time collaboration',
        'Advanced task filtering & sorting',
        'Team workspace management',
        'Progress tracking & analytics',
        'File attachments & comments',
      ],
      liveUrl: '#',
      githubUrl: 'https://github.com/deepak-sekarbabu',
      status: 'Live',
    },
    {
      title: 'Weather Analytics Dashboard',
      description:
        'A comprehensive weather analytics platform that aggregates data from multiple sources and provides detailed insights with interactive visualizations.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop',
      technologies: ['Vue.js', 'Python', 'FastAPI', 'Chart.js', 'Redis'],
      features: [
        'Multi-source data aggregation',
        'Interactive data visualizations',
        'Historical weather analysis',
        'Custom alerting system',
        'Export functionality',
      ],
      liveUrl: '#',
      githubUrl: 'https://github.com/deepak-sekarbabu',
      status: 'Beta',
    },
    {
      title: 'Real-time Chat Application',
      description:
        'A modern chat application with end-to-end encryption, file sharing, and group messaging capabilities. Built with performance and security in mind.',
      image: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=600&h=400&fit=crop',
      technologies: ['React', 'Socket.io', 'Express.js', 'MongoDB', 'JWT'],
      features: [
        'End-to-end encryption',
        'Real-time messaging',
        'File & media sharing',
        'Group chat functionality',
        'Message history & search',
      ],
      liveUrl: '#',
      githubUrl: 'https://github.com/deepak-sekarbabu',
      status: 'Development',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live':
        return 'bg-green-500';
      case 'Beta':
        return 'bg-yellow-500';
      case 'Development':
        return 'bg-blue-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <section id="projects" className="bg-gradient-section py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-6 text-3xl font-bold sm:text-4xl lg:text-heading">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
              A showcase of my recent work, demonstrating my skills in full-stack development,
              problem-solving, and creating user-centered solutions.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid gap-8 lg:grid-cols-2">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                whileHover={{ scale: 1.03, y: -5 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card
                  className={`group h-full overflow-hidden ${project.highlight ? 'ring-2 ring-primary/20' : ''}`}
                >
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute right-4 top-4">
                      <span className="sr-only">Project status:</span>
                      <Badge className={`${getStatusColor(project.status)} text-white`}>
                        {project.status}
                      </Badge>
                    </div>
                    {project.highlight && (
                      <div className="absolute left-4 top-4">
                        <Badge className="bg-primary text-primary-foreground">
                          <Star className="mr-1 h-3 w-3" aria-hidden="true" />
                          <span className="sr-only">Featured Project:</span>
                          <span aria-hidden="true">Featured</span>
                        </Badge>
                      </div>
                    )}
                  </div>

                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>{project.title}</span>
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{project.description}</p>

                    {/* Technologies */}
                    <div>
                      <h4 className="mb-2 text-sm font-semibold">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Key Features */}
                    <div>
                      <h4 className="mb-2 text-sm font-semibold">Key Features:</h4>
                      <ul className="space-y-1">
                        {project.features.slice(0, 3).map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <div className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-4">
                      <Button
                        asChild
                        size="sm"
                        className="flex-1"
                        aria-label={`View live demo of ${project.title}`}
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <Play className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="flex-1"
                        aria-label={`View source code for ${project.title} on GitHub`}
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Source Code
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Additional Projects CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <p className="mb-6 text-muted-foreground">
              Want to see more of my work? Check out my GitHub profile for additional projects and
              contributions.
            </p>
            <motion.a
              href="https://github.com/deepak-sekarbabu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              aria-label="View all projects on GitHub (opens in a new tab)"
            >
              <Github className="mr-2 h-5 w-5" />
              View All Projects on GitHub
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
