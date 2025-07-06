import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Zap, Users, Target } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Technical Excellence",
      description: "Passionate about writing clean, efficient, and maintainable code using best practices and modern technologies."
    },
    {
      icon: Zap,
      title: "Innovation Driven",
      description: "Always exploring new technologies and methodologies to deliver cutting-edge solutions."
    },
    {
      icon: Users,
      title: "Collaborative Spirit",
      description: "Strong team player with excellent communication skills and experience in cross-functional teams."
    },
    {
      icon: Target,
      title: "Results Focused",
      description: "Committed to delivering high-quality solutions that meet business objectives and user needs."
    }
  ];

  const values = ["Problem Solving", "Continuous Learning", "Quality Focus", "Team Collaboration", "Innovation"];

  return (
    <section id="about" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-heading font-bold mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              I'm a dedicated software developer with a passion for creating meaningful technology solutions. 
              My journey in software development has been driven by curiosity, creativity, and a commitment to excellence.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Bio Content */}
            <div>
              <h3 className="text-2xl font-bold mb-6">My Journey</h3>
              <div className="space-y-4 text-foreground/80">
                <p>
                  With several years of experience in software development, I've had the opportunity to work 
                  on diverse projects ranging from web applications to complex enterprise systems. My expertise 
                  spans both frontend and backend technologies, allowing me to build comprehensive solutions.
                </p>
                <p>
                  I believe in the power of technology to solve real-world problems and improve people's lives. 
                  Whether I'm architecting scalable systems, optimizing performance, or collaborating with 
                  cross-functional teams, I bring a strategic mindset and attention to detail to every project.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                  projects, or mentoring fellow developers. I'm always eager to learn and share knowledge 
                  with the tech community.
                </p>
              </div>

              {/* Core Values */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4">Core Values</h4>
                <div className="flex flex-wrap gap-2">
                  {values.map((value) => (
                    <Badge key={value} variant="secondary" className="px-3 py-1">
                      {value}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Professional Image */}
            <div className="relative">
              <Card className="card-hover">
                <CardContent className="p-0">
                  <img
                    src="/lovable-uploads/74b389a5-0db8-4479-b31f-d34aa3902dc6.png"
                    alt="Deepak Sekarbabu - Professional"
                    className="w-full h-80 object-cover rounded-lg"
                  />
                </CardContent>
              </Card>
            </div>
          </div>

          {/* What I Bring */}
          <div>
            <h3 className="text-2xl font-bold text-center mb-12">What I Bring to the Table</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {highlights.map((item, index) => (
                <Card key={index} className="card-hover text-center">
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold mb-3">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;