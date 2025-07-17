import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Brain, Code, Cloud, Database, GitBranch, Palette, Settings } from 'lucide-react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';
import InteractiveSkillsOrb from '@/components/3d/InteractiveSkillsOrb';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Backend Development',
      icon: Database,
      color: 'text-green-500',
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
  ];

  const tools = [
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
  ];

  const softSkills = [
    'Problem Solving',
    'Team Leadership',
    'Communication',
    'Agile/Scrum',
    'Project Management',
    'Mentoring',
    'Code Review',
    'Technical Writing',
  ];

  const skillsFor3D = [
    { name: 'React', color: '#61dafb' },
    { name: 'Java', color: '#f89820' },
    { name: 'Spring', color: '#6db33f' },
    { name: 'Docker', color: '#0db7ed' },
    { name: 'AWS', color: '#ff9900' },
    { name: 'PostgreSQL', color: '#336791' },
    { name: 'TypeScript', color: '#3178c6' },
    { name: 'GraphQL', color: '#e10098' },
  ];

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="bg-gradient-section py-20">
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
              <span className="text-gradient">Skills & Expertise</span>
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
              A comprehensive overview of my technical skills, tools and technologies I use to build
              exceptional software solutions.
            </p>
          </motion.div>

          {/* Technical Skills Grid */}
          <motion.div
            className="mb-12 grid gap-8 lg:grid-cols-2"
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
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className={`rounded-lg bg-muted p-2 ${category.color}`}>
                        <category.icon className="h-5 w-5" />
                      </div>
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
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
                          <span className="text-sm font-medium">{skill.name}</span>
                          <span className="text-xs text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="relative">
                          <Progress
                            value={skill.level}
                            className="h-2"
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

          {/* 3D Skills Visualization */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle className="text-center">
                  <span className="text-gradient">Interactive Skills Universe</span>
                </CardTitle>
                <p className="text-center text-sm text-muted-foreground">
                  Explore my core technologies in 3D space. Click and drag to interact!
                </p>
              </CardHeader>
              <CardContent className="p-0">
                <div className="h-96 w-full">
                  <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
                    <Suspense fallback={null}>
                      <ambientLight intensity={0.5} />
                      <pointLight position={[10, 10, 10]} intensity={1} />
                      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#6366f1" />
                      <InteractiveSkillsOrb 
                        skills={skillsFor3D}
                        onSkillClick={(skill) => console.log(`Clicked on ${skill}`)}
                      />
                      <OrbitControls 
                        enableZoom={true}
                        enablePan={false}
                        autoRotate
                        autoRotateSpeed={1}
                        minDistance={5}
                        maxDistance={15}
                      />
                    </Suspense>
                  </Canvas>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Tools & Technologies */}
          <motion.div
            className="grid gap-8 md:grid-cols-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div whileHover={{ y: -5, boxShadow: 'var(--shadow-hover)' }}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="rounded-lg bg-muted p-2 text-cyan-500">
                      <Settings className="h-5 w-5" />
                    </div>
                    Tools & Technologies
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
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
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="rounded-lg bg-muted p-2 text-pink-500">
                      <Brain className="h-5 w-5" />
                    </div>
                    Soft Skills
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
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
            <Card className="mt-8">
              <CardHeader>
                <CardTitle className="text-center">
                  <span className="text-gradient">Continuous Learning & Growth</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="mb-6 text-muted-foreground">
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
};

export default Skills;
