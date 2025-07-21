import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Zap, Users, Target } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Technical Excellence',
      description:
        'Passionate about writing clean, efficient and maintainable code using best practices and modern technologies.',
    },
    {
      icon: Zap,
      title: 'Innovation Driven',
      description:
        'Always exploring new technologies and methodologies to deliver cutting-edge solutions.',
    },
    {
      icon: Users,
      title: 'Collaborative Spirit',
      description:
        'Strong team player with excellent communication skills and experience in cross-functional teams.',
    },
    {
      icon: Target,
      title: 'Result Focused',
      description:
        'Committed to delivering high-quality solutions that meet business objectives and user needs.',
    },
  ];

  const values = [
    'Problem Solving',
    'Continuous Learning',
    'Quality Focus',
    'Team Collaboration',
    'Innovation',
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
  } as const;

  const cardGridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  } as const;

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1], // Custom easeOutQuint curve
      },
    },
  } as const;

  return (
    <motion.section
      id="about"
      className="bg-gradient-section py-20"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-3xl font-bold sm:text-4xl lg:text-heading">
              <span className="text-gradient">About Me</span>
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
              I'm a dedicated software developer with a passion for creating meaningful technology
              solutions. My journey in software development has been driven by curiosity,
              creativity, and a commitment to excellence.
            </p>
          </div>

          <div className="mb-16 grid items-center gap-12 lg:grid-cols-2">
            {/* Bio Content */}
            <div>
              <h3 className="mb-6 text-2xl font-bold">My Journey</h3>
              <div className="space-y-4 text-foreground/80">
                <p>
                  With more than 12 years of experience in software development, I've had the
                  opportunity to work on diverse projects ranging from web applications to complex
                  enterprise systems. My expertise spans both frontend and backend technologies,
                  allowing me to build comprehensive solutions.
                </p>
                <p>
                  I believe in the power of technology to solve real-world problems and improve
                  people lives. Whether I'm architecting scalable systems, optimizing performance,
                  or collaborating with cross-functional teams, I bring a strategic mindset and
                  attention to detail to every project.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to
                  open-source projects, or mentoring fellow developers. I'm always eager to learn
                  and share my knowledge with the tech community.
                </p>
              </div>

              {/* Core Values */}
              <div className="mt-8">
                <h4 className="mb-4 text-lg font-semibold">Core Values</h4>
                <div className="flex flex-wrap gap-2">
                  {values.map((value) => (
                    <motion.div key={value} whileHover={{ scale: 1.1 }}>
                      <Badge variant="secondary" className="px-3 py-1">
                        {value}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Professional Image */}
            <motion.div
              className="relative"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Card>
                <CardContent className="p-0">
                  <picture>
                    <source srcSet="./pics/Deepak1.webp" type="image/webp" />
                    <img
                      src="./pics/Deepak1.webp"
                      alt="Deepak Sekarbabu - Professional"
                      className="h-50 w-full rounded-lg object-right-bottom"
                      width={800}
                      height={600}
                      loading="lazy"
                    />
                  </picture>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* What I Bring */}
          <div>
            <h3 className="mb-12 text-center text-2xl font-bold">What I Bring to the Table</h3>
            <motion.div
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
              variants={cardGridVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ y: -5, scale: 1.03 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="h-full text-center">
                    <CardContent className="p-6">
                      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                        <item.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h4 className="mb-3 text-lg font-semibold">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
