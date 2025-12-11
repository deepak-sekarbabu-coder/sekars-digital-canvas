import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { motion } from 'framer-motion';
import { Brain, Cloud, Code, Database, Settings } from 'lucide-react';
import { memo, useMemo } from 'react';
import SectionHeading from '@/components/SectionHeading';

const Skills = memo(() => {
  const skillCategories = useMemo(
    () => [
      {
        title: 'Backend Development',
        icon: Database,
        color: 'text-green-500',
        id: 'backend',
        skills: [
          { name: 'Java', level: 85 },
          { name: 'Microservices', level: 75 },
          { name: 'Spring Boot', level: 80 },
          { name: 'Spring Batch', level: 80 },
          { name: 'GraphQL', level: 70 },
          { name: 'Python', level: 40 },
          { name: 'REST APIs', level: 90 },
          { name: 'Syncronous API', level: 80 },
          { name: 'Asyncronous API Reactive', level: 60 },
        ],
      },
      {
        title: 'Frontend Development',
        icon: Code,
        color: 'text-blue-500',
        id: 'frontend',
        skills: [
          { name: 'React/Next.js', level: 60 },
          { name: 'TypeScript', level: 60 },
          { name: 'JavaScript (ES6+)', level: 65 },
          { name: 'HTML5 & CSS3', level: 90 },
          { name: 'Tailwind CSS', level: 60 },
          { name: 'JSP', level: 60 },
          { name: 'Bootstrap', level: 60 },
          { name: 'Thymeleaf', level: 60 },
        ],
      },
      {
        title: 'Database & Storage',
        icon: Database,
        color: 'text-purple-500',
        id: 'database',
        skills: [
          { name: 'Oracle', level: 85 },
          { name: 'PostgreSQL', level: 80 },
          { name: 'MySQL', level: 75 },
          { name: 'MariaDB', level: 70 },
          { name: 'SQL Server', level: 70 },
          { name: 'Domino NotesDB', level: 60 },
          { name: 'Mongo', level: 40 },
        ],
      },
      {
        title: 'Cloud & DevOps',
        icon: Cloud,
        color: 'text-orange-500',
        id: 'devops',
        skills: [
          { name: 'Docker', level: 75 },
          { name: 'Docker Compose', level: 60 },
          { name: 'CI/CD Pipelines', level: 80 },
          { name: 'Linux/Unix', level: 85 },
          { name: 'Kubernetes', level: 80 },
          { name: 'Jenkins', level: 70 },
          { name: 'AWS Services', level: 70 },
        ],
      },
    ],
    []
  );

  const tools = useMemo(
    () => [
      'Git & GitHub',
      'GitLab',
      'Bitbucket',
      'IntelliJ',
      'Eclipse',
      'STS',
      'GitHub Copilot',
      'VS Code',
      'Figma',
      'Postman',
      'Jira',
      'Slack',
      'Apigee',
      'DBeawer',
      'Vite',
      'ESLint',
      'Prettier',
    ],
    []
  );

  const softSkills = useMemo(
    () => [
      'Problem Solving',
      'Team Leadership',
      'Communication',
      'Agile/Scrum',
      'Project Management',
      'Mentoring',
      'Code Review',
      'Technical Writing',
    ],
    []
  );

  const gridVariants = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 },
      },
    }),
    []
  );

  const itemVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    }),
    []
  );

  return (
    <section id="skills" className="scroll-offset section-padding bg-gradient-section">
      <div className="container mx-auto px-3 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Section Header */}
          <SectionHeading
            title="Skills & Expertise"
            description="A comprehensive overview of my technical skills, tools and technologies I use to build
              exceptional software solutions."
          />

          {/* Technical Skills Grid */}
          <motion.div
            className="mb-8 grid gap-6 sm:mb-12 sm:gap-8 lg:grid-cols-2"
            variants={gridVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="h-full">
                  <CardHeader className="px-4 py-4 sm:px-6 sm:py-6">
                    <CardTitle className="flex items-center gap-2 text-base sm:gap-3 sm:text-lg">
                      <div className={`rounded-lg bg-muted p-1.5 sm:p-2 ${category.color}`}>
                        <category.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                      </div>
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 px-4 pb-4 sm:space-y-4 sm:px-6 sm:pb-6">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        className="space-y-2"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.9 }}
                        transition={{ duration: 0.4, delay: skillIndex * 0.05 }}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-small-mobile font-medium sm:text-sm">
                            {skill.name}
                          </span>
                          <span className="text-xs text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="relative">
                          <Progress
                            value={skill.level}
                            className="h-1.5 sm:h-2"
                            aria-label={`${skill.name} skill level: ${skill.level}%`}
                            aria-valuenow={skill.level}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            role="progressbar"
                          />
                        </div>
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Tools & Technologies */}
          <motion.div
            className="grid gap-6 sm:gap-8 md:grid-cols-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div whileHover={{ y: -5, boxShadow: 'var(--shadow-hover)' }}>
              <Card>
                <CardHeader className="px-4 py-4 sm:px-6 sm:py-6">
                  <CardTitle className="flex items-center gap-2 text-base sm:gap-3 sm:text-lg">
                    <div className="rounded-lg bg-muted p-1.5 text-cyan-500 sm:p-2">
                      <Settings className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>
                    Tools & Technologies
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-4 pb-4 sm:px-6 sm:pb-6">
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {tools.map((tool) => (
                      <motion.div key={tool} whileHover={{ scale: 1.1 }}>
                        <Badge variant="secondary" className="text-xs" aria-label={`Tool: ${tool}`}>
                          {tool}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div whileHover={{ y: -5, boxShadow: 'var(--shadow-hover)' }}>
              <Card>
                <CardHeader className="px-4 py-4 sm:px-6 sm:py-6">
                  <CardTitle className="flex items-center gap-2 text-base sm:gap-3 sm:text-lg">
                    <div className="rounded-lg bg-muted p-1.5 text-pink-500 sm:p-2">
                      <Brain className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>
                    Soft Skills
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-4 pb-4 sm:px-6 sm:pb-6">
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {softSkills.map((skill) => (
                      <motion.div key={skill} whileHover={{ scale: 1.1 }}>
                        <Badge variant="outline" className="text-xs" aria-label={`Skill: ${skill}`}>
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Certifications & Learning */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -5, boxShadow: 'var(--shadow-hover)' }}
          >
            <Card className="mt-6 sm:mt-8">
              <CardHeader className="px-4 py-4 sm:px-6 sm:py-6">
                <CardTitle className="text-center text-base sm:text-lg">
                  <span className="text-gradient">Continuous Learning & Growth</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="px-4 pb-4 text-center sm:px-6 sm:pb-6">
                <p className="mb-4 text-body-mobile text-muted-foreground sm:mb-6 sm:text-base">
                  I believe in continuous learning and staying updated with the latest technologies
                  and industry trends. Currently exploring AI/ML integration in web development and
                  advanced cloud architectures.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <Badge variant="secondary" aria-label="AWS Certified">
                    AWS Certified
                  </Badge>
                  <Badge variant="secondary" aria-label="Agile Practitioner">
                    Agile Practitioner
                  </Badge>
                  <Badge variant="secondary" aria-label="Open Source Contributor">
                    Open Source Contributor
                  </Badge>
                  <Badge variant="secondary" aria-label="Tech Community Speaker">
                    Tech Community Speaker
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

Skills.displayName = 'Skills';

export default Skills;
