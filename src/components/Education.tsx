import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Master of Science in Computer Science",
      institution: "Stanford University",
      location: "Stanford, CA",
      period: "2016 - 2018",
      gpa: "3.8/4.0",
      highlights: [
        "Specialized in Software Engineering and Distributed Systems",
        "Teaching Assistant for Advanced Algorithms course",
        "Led a team project on Machine Learning applications in web development",
        "Published research paper on 'Optimizing Database Performance in Cloud Environments'"
      ],
      coursework: ["Advanced Algorithms", "Distributed Systems", "Machine Learning", "Software Architecture", "Database Systems"]
    },
    {
      degree: "Bachelor of Technology in Information Technology",
      institution: "Indian Institute of Technology",
      location: "Chennai, India",
      period: "2012 - 2016",
      gpa: "8.5/10.0",
      highlights: [
        "Graduated with First Class Honors",
        "Vice President of the Computer Science Society",
        "Winner of Inter-College Programming Competition (2015)",
        "Completed internship at Google India (Summer 2015)"
      ],
      coursework: ["Data Structures", "Computer Networks", "Web Technologies", "Software Engineering", "Object-Oriented Programming"]
    }
  ];

  const certifications = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "AWS-SAA-123456"
    },
    {
      name: "Certified Kubernetes Administrator",
      issuer: "Cloud Native Computing Foundation",
      date: "2022",
      credentialId: "CKA-789012"
    },
    {
      name: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "2022",
      credentialId: "GCP-PD-345678"
    },
    {
      name: "Scrum Master Certified",
      issuer: "Scrum Alliance",
      date: "2021",
      credentialId: "CSM-901234"
    }
  ];

  const achievements = [
    "Dean's List - 4 consecutive semesters",
    "Outstanding Student Award in Computer Science",
    "Best Final Year Project - 'Real-time Collaborative Code Editor'",
    "Google Summer of Code Participant (2015)",
    "ACM ICPC Regional Finalist (2014, 2015)"
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-heading font-bold mb-6">
              Education & <span className="text-gradient">Qualifications</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              My academic journey and professional certifications that have shaped my expertise 
              in software development and technology.
            </p>
          </div>

          {/* Education Timeline */}
          <div className="space-y-8 mb-16">
            {education.map((edu, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Left Column - Main Info */}
                    <div className="flex-1">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-3 bg-primary/10 rounded-full">
                          <GraduationCap className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-foreground mb-2">{edu.degree}</h3>
                          <p className="text-primary font-semibold mb-2">{edu.institution}</p>
                          <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground mb-2">
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4" />
                              <span>{edu.period}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="h-4 w-4" />
                              <span>{edu.location}</span>
                            </div>
                          </div>
                          <Badge variant="secondary" className="w-fit">
                            GPA: {edu.gpa}
                          </Badge>
                        </div>
                      </div>

                      {/* Highlights */}
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3">Key Highlights:</h4>
                        <ul className="space-y-2">
                          {edu.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-foreground/80">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Right Column - Coursework */}
                    <div className="lg:w-64 lg:flex-shrink-0">
                      <h4 className="font-semibold mb-3">Relevant Coursework:</h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course) => (
                          <Badge key={course} variant="outline" className="text-xs">
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certifications & Achievements Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Certifications */}
            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Professional Certifications</h3>
                </div>
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="border-l-2 border-primary/20 pl-4">
                      <h4 className="font-semibold text-foreground">{cert.name}</h4>
                      <p className="text-sm text-primary font-medium">{cert.issuer}</p>
                      <div className="flex items-center gap-4 mt-1">
                        <span className="text-xs text-muted-foreground">{cert.date}</span>
                        <Badge variant="outline" className="text-xs">
                          ID: {cert.credentialId}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Academic Achievements */}
            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <BookOpen className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Academic Achievements</h3>
                </div>
                <div className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-foreground/80">{achievement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;