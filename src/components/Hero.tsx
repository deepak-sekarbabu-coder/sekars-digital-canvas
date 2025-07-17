import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowDown, BookOpen, Download, Github, Linkedin, Mail } from 'lucide-react';
import Scene3D from '@/components/3d/Scene3D';

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      } as const,
    },
  } as const;

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1], // Custom easeOutQuint curve
      } as const,
    },
  } as const;

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center bg-gradient-section overflow-hidden"
    >
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Scene3D className="w-full h-full" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Profile Image */}
          <motion.div variants={itemVariants} className="mb-8">
            <picture>
              <source srcSet="/pics/Deepak1.webp" type="image/webp" />
              <img
                src="/pics/Deepak1.webp"
                alt="Deepak Sekarbabu"
                className="mx-auto h-32 w-32 rounded-full border-4 border-white object-cover shadow-section sm:h-40 sm:w-40 lg:h-48 lg:w-48"
                width={192}
                height={192}
                loading="eager"
              />
            </picture>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            variants={itemVariants}
            className="mb-6 text-4xl font-bold sm:text-5xl lg:text-6xl xl:text-hero"
          >
            Hi, I'm <span className="text-gradient">Deepak Sekarbabu</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="mb-8 text-xl font-extrabold text-foreground/80 dark:text-muted-foreground sm:text-2xl lg:text-3xl"
          >
            Professional Full Stack Developer & Technology Enthusiast
          </motion.p>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="mx-auto mb-12 max-w-3xl text-base leading-relaxed text-foreground/80 sm:text-lg lg:text-xl"
          >
            Passionate about creating innovative software solutions and building exceptional user
            experiences. With expertise in modern technologies and a commitment to continuous
            learning, I help organizations achieve their digital goals through thoughtful
            engineering and creative problem-solving.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button
              size="lg"
              className="bg-primary px-8 py-6 text-lg font-semibold text-primary-foreground shadow-hover hover:bg-primary-hover"
              onClick={() => scrollToSection('contact')}
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-6 text-lg font-semibold shadow-card hover:shadow-hover"
              onClick={() =>
                window.open('/resume/Deepak Sekarbabu_SolutionArchitect_Java.pdf', '_blank')
              }
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </motion.div>

          {/* Social CTA */}
          <motion.p
            variants={itemVariants}
            className="mb-4 text-base font-medium text-muted-foreground sm:text-lg"
          >
            Follow me on social media for updates and tech insights
          </motion.p>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="mb-12 flex items-center justify-center gap-6"
          >
            <motion.a
              href="https://www.linkedin.com/in/deepak-sekarbabu-85b67628/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-card p-3 shadow-card"
              whileHover={{ scale: 1.15, y: -2, boxShadow: 'var(--shadow-hover)' }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300 }}
              aria-label="LinkedIn profile (opens in a new tab)"
            >
              <Linkedin className="h-6 w-6 text-primary" />
            </motion.a>
            <motion.a
              href="https://github.com/deepak-sekarbabu"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-card p-3 shadow-card"
              whileHover={{ scale: 1.15, y: -2, boxShadow: 'var(--shadow-hover)' }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300 }}
              aria-label="GitHub profile (opens in a new tab)"
            >
              <Github className="h-5 w-5 text-primary" />
            </motion.a>
            <motion.a
              href="https://technologytrendsinjava.blogspot.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-card p-3 shadow-card"
              whileHover={{ scale: 1.15, y: -2, boxShadow: 'var(--shadow-hover)' }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300 }}
              aria-label="Java technology blog (opens in a new tab)"
            >
              <BookOpen className="h-5 w-5 text-primary" />
            </motion.a>
            <motion.a
              href="mailto:deepak.sekarbabu@tcs.com"
              className="rounded-full bg-card p-3 shadow-card"
              whileHover={{ scale: 1.15, y: -2, boxShadow: 'var(--shadow-hover)' }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300 }}
              aria-label="Send email to deepak.sekarbabu@tcs.com"
            >
              <Mail className="h-6 w-6 text-primary" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-2 left-1/2 -translate-x-1/2 transform"
      >
        <button
          onClick={() => scrollToSection('about')}
          className="animate-bounce rounded-full bg-card/50 p-2 shadow-card backdrop-blur-sm transition-all duration-300 hover:shadow-hover"
          aria-label="Scroll down to next section"
        >
          <ArrowDown className="h-5 w-5 text-primary" />
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;
