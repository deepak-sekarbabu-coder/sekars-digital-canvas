import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Code, 
  Database, 
  Cloud, 
  Smartphone, 
  GitBranch, 
  Settings,
  Palette,
  Brain
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      color: "text-blue-500",
      skills: [
        { name: "React/Next.js", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "JavaScript (ES6+)", level: 95 },
        { name: "HTML5 & CSS3", level: 90 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Vue.js", level: 75 }
      ]
    },
    {
      title: "Backend Development",
      icon: Database,
      color: "text-green-500",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Python", level: 80 },
        { name: "Express.js", level: 85 },
        { name: "REST APIs", level: 90 },
        { name: "GraphQL", level: 70 },
        { name: "Microservices", level: 75 }
      ]
    },
    {
      title: "Database & Storage",
      icon: Database,
      color: "text-purple-500",
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "MySQL", level: 75 },
        { name: "Redis", level: 70 },
        { name: "Firebase", level: 75 }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      color: "text-orange-500",
      skills: [
        { name: "AWS Services", level: 80 },
        { name: "Docker", level: 75 },
        { name: "CI/CD Pipelines", level: 80 },
        { name: "Linux/Unix", level: 85 },
        { name: "Kubernetes", level: 65 }
      ]
    }
  ];

  const tools = [
    "Git & GitHub", "VS Code", "Figma", "Postman", "Jira", "Slack", 
    "Jest", "Cypress", "Webpack", "Vite", "ESLint", "Prettier"
  ];

  const softSkills = [
    "Problem Solving", "Team Leadership", "Communication", "Agile/Scrum",
    "Project Management", "Mentoring", "Code Review", "Technical Writing"
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-heading font-bold mb-6">
              Skills & <span className="text-gradient">Expertise</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A comprehensive overview of my technical skills, tools, and technologies 
              I use to build exceptional software solutions.
            </p>
          </div>

          {/* Technical Skills Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {skillCategories.map((category, index) => (
              <Card key={index} className="card-hover">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-muted ${category.color}`}>
                      <category.icon className="h-5 w-5" />
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Tools & Technologies */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-muted text-cyan-500">
                    <Settings className="h-5 w-5" />
                  </div>
                  Tools & Technologies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool) => (
                    <Badge key={tool} variant="secondary" className="text-xs">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-muted text-pink-500">
                    <Brain className="h-5 w-5" />
                  </div>
                  Soft Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {softSkills.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Certifications & Learning */}
          <Card className="card-hover mt-8">
            <CardHeader>
              <CardTitle className="text-center">Continuous Learning & Growth</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-6">
                I believe in continuous learning and staying updated with the latest technologies and industry trends. 
                Currently exploring AI/ML integration in web development and advanced cloud architectures.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Badge variant="secondary">AWS Certified</Badge>
                <Badge variant="secondary">Agile Practitioner</Badge>
                <Badge variant="secondary">Open Source Contributor</Badge>
                <Badge variant="secondary">Tech Community Speaker</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;