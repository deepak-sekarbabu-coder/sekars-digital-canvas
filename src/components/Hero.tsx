import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowDown, BookOpen, Download, Github, Linkedin, Mail } from 'lucide-react';
import Scene3D from '@/components/3d/Scene3D';
import Image from '@/components/Image';

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
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-section"
    >
      {/* 3D Background - Temporarily Disabled */}
      {/* <div className="absolute inset-0 z-0">
        <Scene3D className="w-full h-full" />
      </div> */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Profile Image */}
          <motion.div variants={itemVariants} className="mb-6 pt-12 sm:mb-8 sm:pt-16 lg:pt-8">
            <div className="mx-auto h-28 w-28 sm:h-32 sm:w-32 md:h-40 md:w-40 lg:h-48 lg:w-48">
              <Image
                src="./pics/Deepak1.webp"
                alt="Deepak Sekarbabu - Professional Profile Photo"
                width={192}
                height={192}
                priority={true}
                className="rounded-full border-2 border-white p-2 shadow-section sm:border-4 sm:p-3"
                objectFit="cover"
                sizes="(max-width: 640px) 112px, (max-width: 768px) 128px, (max-width: 1024px) 160px, 192px"
                placeholder="blur"
                preload={true}
              />
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            variants={itemVariants}
            className="mb-4 text-hero-mobile font-bold leading-tight sm:mb-6 sm:text-4xl lg:text-5xl xl:text-hero"
          >
            Hi, I'm <span className="text-gradient">Deepak Sekarbabu</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="mb-6 text-lg font-extrabold text-foreground/80 dark:text-muted-foreground sm:mb-8 sm:text-xl lg:text-2xl xl:text-3xl"
          >
            Professional Full Stack Developer & Technology Enthusiast
          </motion.p>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="mx-auto mb-8 max-w-3xl text-body-mobile leading-relaxed text-foreground/80 sm:mb-12 sm:text-base lg:text-lg xl:text-xl"
          >
            Passionate about creating innovative software solutions and building exceptional user
            experiences. With expertise in modern technologies and a commitment to continuous
            learning, I help organizations achieve their digital goals through thoughtful
            engineering and creative problem-solving.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="mb-10 flex flex-col items-center justify-center gap-3 sm:mb-16 sm:flex-row sm:gap-4"
          >
            <Button
              size="lg"
              className="w-full bg-primary px-6 py-5 text-base font-semibold text-primary-foreground shadow-hover hover:bg-primary-hover sm:w-auto sm:px-8 sm:py-6 sm:text-lg"
              onClick={() => scrollToSection('contact')}
            >
              <Mail className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Get In Touch
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full px-6 py-5 text-base font-semibold shadow-card hover:shadow-hover sm:w-auto sm:px-8 sm:py-6 sm:text-lg"
              onClick={() => {
                const resumePath =
                  import.meta.env.VITE_RESUME_PATH ||
                  '/resume/Deepak Sekarbabu_SolutionArchitect_Java.pdf';
                const finalPath = resumePath.startsWith('/') ? `.${resumePath}` : resumePath;
                window.open(finalPath, '_blank');
              }}
            >
              <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Download Resume
            </Button>
          </motion.div>

          {/* Social CTA */}
          <motion.p
            variants={itemVariants}
            className="mb-3 text-small-mobile font-medium text-muted-foreground sm:mb-4 sm:text-base lg:text-lg"
          >
            Follow me on social media for updates and tech insights
          </motion.p>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="mb-8 flex items-center justify-center gap-4 sm:mb-12 sm:gap-6"
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
              href="mailto:deepakinmail@gmail.com"
              className="rounded-full bg-card p-3 shadow-card"
              whileHover={{ scale: 1.15, y: -2, boxShadow: 'var(--shadow-hover)' }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300 }}
              aria-label="Send email to deepakinmail@gmail.com"
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
