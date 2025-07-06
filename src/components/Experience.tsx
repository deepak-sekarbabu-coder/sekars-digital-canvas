import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Software Developer",
      company: "Tech Solutions Inc.",
      location: "San Francisco, CA",
      period: "2021 - Present",
      type: "Full-time",
      responsibilities: [
        "Lead development of scalable web applications using modern JavaScript frameworks",
        "Collaborate with cross-functional teams to deliver high-quality software solutions",
        "Mentor junior developers and conduct code reviews to ensure best practices",
        "Implement CI/CD pipelines and improve development workflows",
        "Work closely with product managers to translate requirements into technical solutions"
      ],
      technologies: ["React", "Node.js", "TypeScript", "AWS", "Docker", "MongoDB"]
    },
    {
      title: "Full Stack Developer",
      company: "Digital Innovations Ltd.",
      location: "New York, NY",
      period: "2019 - 2021",
      type: "Full-time",
      responsibilities: [
        "Developed and maintained full-stack applications using MERN stack",
        "Optimized application performance and reduced load times by 40%",
        "Integrated third-party APIs and payment gateways",
        "Participated in agile development processes and sprint planning",
        "Contributed to architectural decisions and technical documentation"
      ],
      technologies: ["React", "Express.js", "MySQL", "Redux", "Jest", "Git"]
    },
    {
      title: "Software Developer",
      company: "StartupCo",
      location: "Austin, TX",
      period: "2018 - 2019",
      type: "Full-time",
      responsibilities: [
        "Built responsive web applications from concept to deployment",
        "Collaborated with designers to implement pixel-perfect UI components",
        "Participated in product planning and feature development discussions",
        "Maintained and updated legacy codebases",
        "Contributed to open-source projects and internal tooling"
      ],
      technologies: ["Vue.js", "Python", "PostgreSQL", "SASS", "Webpack", "Linux"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-heading font-bold mb-6">
              Professional <span className="text-gradient">Experience</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A journey through my professional career, highlighting key roles, responsibilities, 
              and achievements in software development.
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    {/* Left Column - Main Info */}
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                          <div className="flex items-center gap-2 text-muted-foreground mt-1">
                            <Building className="h-4 w-4" />
                            <span className="font-medium">{exp.company}</span>
                          </div>
                        </div>
                        <Badge variant="secondary" className="self-start sm:self-center">
                          {exp.type}
                        </Badge>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground mb-6">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      {/* Responsibilities */}
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3">Key Responsibilities:</h4>
                        <ul className="space-y-2">
                          {exp.responsibilities.map((responsibility, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-foreground/80">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                              <span>{responsibility}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Right Column - Technologies */}
                    <div className="lg:w-64 lg:flex-shrink-0">
                      <h4 className="font-semibold mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;