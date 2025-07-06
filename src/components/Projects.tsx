import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Play, Star } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with modern UI, secure payments, and real-time inventory management. Features include user authentication, product catalog, shopping cart, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS", "Docker"],
      features: [
        "User authentication & authorization",
        "Real-time inventory management", 
        "Secure payment processing",
        "Admin dashboard with analytics",
        "Mobile-responsive design"
      ],
      liveUrl: "#",
      githubUrl: "#",
      status: "Live",
      highlight: true
    },
    {
      title: "Task Management System",
      description: "A collaborative project management tool with real-time updates, team collaboration features, and advanced task tracking. Built for modern development teams.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io", "Tailwind"],
      features: [
        "Real-time collaboration",
        "Advanced task filtering & sorting",
        "Team workspace management",
        "Progress tracking & analytics",
        "File attachments & comments"
      ],
      liveUrl: "#",
      githubUrl: "#",
      status: "Live"
    },
    {
      title: "Weather Analytics Dashboard",
      description: "A comprehensive weather analytics platform that aggregates data from multiple sources and provides detailed insights with interactive visualizations.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      technologies: ["Vue.js", "Python", "FastAPI", "Chart.js", "Redis"],
      features: [
        "Multi-source data aggregation",
        "Interactive data visualizations",
        "Historical weather analysis",
        "Custom alerting system",
        "Export functionality"
      ],
      liveUrl: "#",
      githubUrl: "#",
      status: "Beta"
    },
    {
      title: "Real-time Chat Application",
      description: "A modern chat application with end-to-end encryption, file sharing, and group messaging capabilities. Built with performance and security in mind.",
      image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=600&h=400&fit=crop",
      technologies: ["React", "Socket.io", "Express.js", "MongoDB", "JWT"],
      features: [
        "End-to-end encryption",
        "Real-time messaging",
        "File & media sharing",
        "Group chat functionality",
        "Message history & search"
      ],
      liveUrl: "#",
      githubUrl: "#",
      status: "Development"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live": return "bg-green-500";
      case "Beta": return "bg-yellow-500";
      case "Development": return "bg-blue-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-heading font-bold mb-6">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A showcase of my recent work, demonstrating my skills in full-stack development, 
              problem-solving, and creating user-centered solutions.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className={`card-hover overflow-hidden ${project.highlight ? 'ring-2 ring-primary/20' : ''}`}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className={`${getStatusColor(project.status)} text-white`}>
                      {project.status}
                    </Badge>
                  </div>
                  {project.highlight && (
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-primary text-primary-foreground">
                        <Star className="h-3 w-3 mr-1" />
                        Featured
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
                    <h4 className="font-semibold mb-2 text-sm">Technologies Used:</h4>
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
                    <h4 className="font-semibold mb-2 text-sm">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <Button size="sm" className="flex-1">
                      <Play className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Github className="h-4 w-4 mr-2" />
                      Source Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Projects CTA */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Want to see more of my work? Check out my GitHub profile for additional projects and contributions.
            </p>
            <Button variant="outline" size="lg">
              <Github className="h-5 w-5 mr-2" />
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;