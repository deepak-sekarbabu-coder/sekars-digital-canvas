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
    <section id="education" className="scroll-offset section-padding bg-background">
      <div className="container mx-auto px-3 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center sm:mb-16"
          >
            <h2 className="mb-4 text-heading-mobile font-bold sm:mb-6 sm:text-3xl lg:text-heading">
              <span className="text-gradient">Education & Qualifications</span>
            </h2>
            <p className="mx-auto max-w-3xl text-body-mobile text-muted-foreground sm:text-base lg:text-lg">
              My academic journey and professional certifications that have shaped my expertise in
              software development and technology.
            </p>
          </motion.div>

          {/* Education Timeline */}
          <div className="mb-12 space-y-6 sm:mb-16 sm:space-y-8">
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
                  <CardContent className="p-4 sm:p-6 lg:p-8">
                    <div className="flex flex-col gap-4 sm:gap-6 lg:flex-row">
                      {/* Left Column - Main Info */}
                      <div className="flex-1">
                        <div className="mb-3 flex items-start gap-3 sm:mb-4 sm:gap-4">
                          <div className="rounded-full bg-primary/10 p-2 sm:p-3">
                            <GraduationCap className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
                          </div>
                          <div>
                            <h3 className="mb-1 text-lg font-bold text-foreground sm:mb-2 sm:text-xl">
                              {edu.degree}
                            </h3>
                            <p className="mb-1 text-sm font-semibold text-primary sm:mb-2 sm:text-base">
                              {edu.institution}
                            </p>
                            <div className="mb-2 flex flex-col gap-2 text-small-mobile text-muted-foreground sm:flex-row sm:gap-4 sm:text-sm">
                              <div className="flex items-center gap-2">
                                <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                                <span>{edu.period}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <MapPin className="h-3 w-3 sm:h-4 sm:w-4" />
                                <span>{edu.location}</span>
                              </div>
                            </div>
                            {edu.gpa ? (
                              <Badge variant="secondary" className="w-fit text-xs sm:text-sm">
                                GPA: {edu.gpa}
                              </Badge>
                            ) : edu.percentage ? (
                              <Badge variant="secondary" className="w-fit text-xs sm:text-sm">
                                Score: {edu.percentage}
                              </Badge>
                            ) : null}
                          </div>
                        </div>

                        {/* Highlights */}
                        <div className="mb-4 sm:mb-6">
                          <h4 className="mb-2 text-base font-semibold sm:mb-3 sm:text-lg">
                            Key Highlights:
                          </h4>
                          <motion.ul
                            className="space-y-1.5 sm:space-y-2"
                            variants={listVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.3 }}
                          >
                            {edu.highlights.map((highlight, idx) => (
                              <motion.li
                                key={idx}
                                className="flex items-start gap-2 text-small-mobile text-foreground/80 sm:gap-3 sm:text-sm"
                                variants={listItemVariants}
                              >
                                <div className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-primary sm:mt-2 sm:h-1.5 sm:w-1.5" />
                                <span>{highlight}</span>
                              </motion.li>
                            ))}
                          </motion.ul>
                        </div>
                      </div>

                      {/* Right Column - Coursework */}
                      <div className="lg:w-64 lg:flex-shrink-0">
                        <h4 className="mb-2 text-base font-semibold sm:mb-3 sm:text-lg">
                          Relevant Coursework:
                        </h4>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
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
            className="grid gap-6 sm:gap-8 lg:grid-cols-2"
          >
            {/* Certifications */}
            <motion.div whileHover={{ y: -5, boxShadow: 'var(--shadow-hover)' }}>
              <Card>
                <CardContent className="p-4 sm:p-6">
                  <div className="mb-4 flex items-center gap-2 sm:mb-6 sm:gap-3">
                    <div className="rounded-full bg-primary/10 p-1.5 sm:p-2">
                      <Award className="h-4 w-4 text-primary sm:h-5 sm:w-5" />
                    </div>
                    <h3 className="text-base font-bold sm:text-xl">Professional Certifications</h3>
                  </div>
                  <div className="space-y-3 sm:space-y-4">
                    {certifications.map((cert, index) => (
                      <div key={index} className="border-l-2 border-primary/20 pl-3 sm:pl-4">
                        <h4 className="text-sm font-semibold text-foreground sm:text-base">
                          {cert.name}
                        </h4>
                        <p className="text-xs font-medium text-primary sm:text-sm">{cert.issuer}</p>
                        <div className="mt-1 flex items-center gap-3 sm:gap-4">
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
                <CardContent className="p-4 sm:p-6">
                  <div className="mb-4 flex items-center gap-2 sm:mb-6 sm:gap-3">
                    <div className="rounded-full bg-primary/10 p-1.5 sm:p-2">
                      <BookOpen className="h-4 w-4 text-primary sm:h-5 sm:w-5" />
                    </div>
                    <h3 className="text-base font-bold sm:text-xl">
                      Academic & Sports Achievements
                    </h3>
                  </div>
                  <motion.div
                    className="space-y-2 sm:space-y-3"
                    variants={listVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                  >
                    {achievements.map((achievement, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start gap-2 sm:gap-3"
                        variants={listItemVariants}
                      >
                        <div className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-primary sm:mt-2 sm:h-1.5 sm:w-1.5" />
                        <span className="text-small-mobile text-foreground/80 sm:text-sm">
                          {achievement}
                        </span>
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
