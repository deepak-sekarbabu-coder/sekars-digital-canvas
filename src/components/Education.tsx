import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Computer Science & Engineering',
      institution: 'Anna University',
      location: 'Chennai, India',
      period: '2008 - 2012',
      gpa: '7.84/10.0',
      highlights: [
        'Graduated with First Class Honours.',
        'Winner of Inter-College Programming Competition (2009).',
        'Did my final year project on Geo Location alerts using Java.',
      ],
      coursework: [
        'Java',
        'Object-Oriented Programming',
        'Data Structures',
        'Database Systems',
        'Advanced Algorithms',
        'Software Architecture',
        'Distributed Systems',
      ],
    },
    {
      degree: 'High School',
      institution: 'G.R.T.M. Vivekanda Vidyalaya',
      location: 'Chennai, India',
      period: '2006 - 2008',
      percentage: '86%',
      highlights: ['Graduated with First Class Honors.', 'Sports Chairman of the school.'],
      coursework: ['Physics', 'Chemistry', 'Mathematics', 'English', 'Computer Science'],
    },
  ];

  const certifications = [
    {
      name: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: '2024',
      credentialId:
        'https://www.credly.com/badges/3c28f77d-0485-4593-a173-307cca4cd247/linked_in_profile',
    },
    {
      name: 'Certified Safe Practitioner',
      issuer: 'SAFe',
      date: '2024',
      credentialId: 'https://www.credly.com/badges/46acd682-321f-45ea-9fa0-55d794a62138',
    },
    {
      name: 'Oracle Certified Professional, Java SE 6 Programmer',
      issuer: 'Oracle',
      date: '2012',
      credentialId: 'https://www.credly.com/badges/dad27036-9cc4-4be8-90d1-fce1d0064478/public_url',
    },
  ];

  const achievements = [
    'Achieved 80.4% in S.S.L.C (CBSE).',
    'Achieved 85.9% in H.S.C (State Board).',
    'Maintaining a CGPA of 7.9  in B.E. at Prathyusha Institute of Technology & Management',
    'Outstanding Student Award in Computer Science',
    'Runner-up in Kho-Kho at a State Level tournament organized by Anna Sports Fest 2011.',
    'Won many prizes in All India Karate (Martial Arts) Tournaments.',
  ];

  const listVariants = {
    visible: { transition: { staggerChildren: 0.07 } },
    hidden: {},
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section id="education" className="bg-background py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-6 text-3xl font-bold sm:text-4xl lg:text-heading">
              <span className="text-gradient">Education & Qualifications</span>
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
              My academic journey and professional certifications that have shaped my expertise in
              software development and technology.
            </p>
          </motion.div>

          {/* Education Timeline */}
          <div className="mb-16 space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: 'var(--shadow-hover)' }}
              >
                <Card className="h-full">
                  <CardContent className="p-8">
                    <div className="flex flex-col gap-6 lg:flex-row">
                      {/* Left Column - Main Info */}
                      <div className="flex-1">
                        <div className="mb-4 flex items-start gap-4">
                          <div className="rounded-full bg-primary/10 p-3">
                            <GraduationCap className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="mb-2 text-xl font-bold text-foreground">{edu.degree}</h3>
                            <p className="mb-2 font-semibold text-primary">{edu.institution}</p>
                            <div className="mb-2 flex flex-col gap-4 text-sm text-muted-foreground sm:flex-row">
                              <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4" />
                                <span>{edu.period}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <MapPin className="h-4 w-4" />
                                <span>{edu.location}</span>
                              </div>
                            </div>
                            {edu.gpa ? (
                              <Badge variant="secondary" className="w-fit">
                                GPA: {edu.gpa}
                              </Badge>
                            ) : edu.percentage ? (
                              <Badge variant="secondary" className="w-fit">
                                Score: {edu.percentage}
                              </Badge>
                            ) : null}
                          </div>
                        </div>

                        {/* Highlights */}
                        <div className="mb-6">
                          <h4 className="mb-3 font-semibold">Key Highlights:</h4>
                          <motion.ul
                            className="space-y-2"
                            variants={listVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.3 }}
                          >
                            {edu.highlights.map((highlight, idx) => (
                              <motion.li
                                key={idx}
                                className="flex items-start gap-3 text-foreground/80"
                                variants={listItemVariants}
                              >
                                <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                                <span>{highlight}</span>
                              </motion.li>
                            ))}
                          </motion.ul>
                        </div>
                      </div>

                      {/* Right Column - Coursework */}
                      <div className="lg:w-64 lg:flex-shrink-0">
                        <h4 className="mb-3 font-semibold">Relevant Coursework:</h4>
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
              </motion.div>
            ))}
          </div>

          {/* Certifications & Achievements Grid */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="grid gap-8 lg:grid-cols-2"
          >
            {/* Certifications */}
            <motion.div whileHover={{ y: -5, boxShadow: 'var(--shadow-hover)' }}>
              <Card>
                <CardContent className="p-6">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="rounded-full bg-primary/10 p-2">
                      <Award className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Professional Certifications</h3>
                  </div>
                  <div className="space-y-4">
                    {certifications.map((cert, index) => (
                      <div key={index} className="border-l-2 border-primary/20 pl-4">
                        <h4 className="font-semibold text-foreground">{cert.name}</h4>
                        <p className="text-sm font-medium text-primary">{cert.issuer}</p>
                        <div className="mt-1 flex items-center gap-4">
                          <span className="text-xs text-muted-foreground">{cert.date}</span>
                          <a
                            href={cert.credentialId}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-primary hover:underline"
                          >
                            View Credential
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Academic Achievements */}
            <motion.div whileHover={{ y: -5, boxShadow: 'var(--shadow-hover)' }}>
              <Card>
                <CardContent className="p-6">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="rounded-full bg-primary/10 p-2">
                      <BookOpen className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Academic & Sports Achievements</h3>
                  </div>
                  <motion.div
                    className="space-y-3"
                    variants={listVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                  >
                    {achievements.map((achievement, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start gap-3"
                        variants={listItemVariants}
                      >
                        <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                        <span className="text-foreground/80">{achievement}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
