import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowDown, BookOpen, Download, Github, Linkedin, Mail } from 'lucide-react';

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
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-gradient-section px-4"
    >
      <div className="container relative z-10 mx-auto px-2 sm:px-4 lg:px-8">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            className="mb-4 pt-16 sm:mb-6 sm:pt-20 md:pt-16 lg:pt-8"
          >
            <div className="mx-auto h-24 w-24 sm:h-28 sm:w-28 md:h-36 md:w-36 lg:h-44 lg:w-44 xl:h-48 xl:w-48">
              <Image
                src="./pics/Deepak1.webp"
                alt="Deepak Sekarbabu - Professional Profile Photo"
                width={192}
                height={192}
                priority={true}
                className="sm:border-3 rounded-full border-2 border-white p-1.5 shadow-section sm:p-2 lg:border-4 lg:p-3"
                objectFit="cover"
                sizes="(max-width: 375px) 96px, (max-width: 640px) 112px, (max-width: 768px) 128px, (max-width: 1024px) 144px, 192px"
                placeholder="blur"
                preload={true}
              />
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            variants={itemVariants}
            className="mb-3 text-[1.75rem] font-bold leading-tight sm:mb-4 sm:text-3xl md:text-4xl lg:text-5xl xl:text-fluid-hero"
          >
            Hi, I'm <span className="text-gradient">Deepak Sekarbabu</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="mb-4 text-base font-semibold text-foreground/80 dark:text-muted-foreground sm:mb-6 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl"
          >
            Professional Full Stack Developer & Technology Enthusiast
          </motion.p>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="mx-auto mb-6 max-w-3xl px-2 text-sm leading-relaxed text-foreground/80 sm:mb-8 sm:px-4 sm:text-base md:text-base lg:text-lg xl:text-xl"
          >
            Passionate about creating innovative software solutions and building exceptional user
            experiences. With expertise in modern technologies and a commitment to continuous
            learning, I help organizations achieve their digital goals through thoughtful
            engineering and creative problem-solving.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="mb-8 flex flex-col items-center justify-center gap-2.5 sm:mb-10 sm:flex-row sm:gap-4"
          >
            <Button
              size="lg"
              className="w-full max-w-[280px] bg-primary px-5 py-4 text-sm font-semibold text-primary-foreground shadow-hover hover:bg-primary-hover sm:w-auto sm:px-6 sm:py-5 sm:text-base"
              onClick={() => scrollToSection('contact')}
            >
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full max-w-[280px] px-5 py-4 text-sm font-semibold shadow-card hover:shadow-hover sm:w-auto sm:px-6 sm:py-5 sm:text-base"
              onClick={() => {
                const resumePath =
                  import.meta.env.VITE_RESUME_PATH ||
                  '/resume/Deepak Sekarbabu_SolutionArchitect_Java.pdf';
                const finalPath = resumePath.startsWith('/') ? `.${resumePath}` : resumePath;
                window.open(finalPath, '_blank');
              }}
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </motion.div>

          {/* Social CTA */}
          <motion.p
            variants={itemVariants}
            className="mb-3 text-xs font-medium text-muted-foreground sm:mb-4 sm:text-sm lg:text-base"
          >
            Follow me on social media for updates and tech insights
          </motion.p>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="mb-6 flex items-center justify-center gap-3 sm:mb-8 sm:gap-4 md:gap-5"
          >
            <motion.a
              href="https://www.linkedin.com/in/deepak-sekarbabu-85b67628/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-card p-2.5 shadow-card sm:p-3"
              whileHover={{ scale: 1.15, y: -2, boxShadow: 'var(--shadow-hover)' }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300 }}
              aria-label="LinkedIn profile (opens in a new tab)"
            >
              <Linkedin className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
            </motion.a>
            <motion.a
              href="https://github.com/deepak-sekarbabu"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-card p-2.5 shadow-card sm:p-3"
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
              className="rounded-full bg-card p-2.5 shadow-card sm:p-3"
              whileHover={{ scale: 1.15, y: -2, boxShadow: 'var(--shadow-hover)' }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300 }}
              aria-label="Java technology blog (opens in a new tab)"
            >
              <BookOpen className="h-5 w-5 text-primary" />
            </motion.a>
            <motion.a
              href="mailto:deepakinmail@gmail.com"
              className="rounded-full bg-card p-2.5 shadow-card sm:p-3"
              whileHover={{ scale: 1.15, y: -2, boxShadow: 'var(--shadow-hover)' }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300 }}
              aria-label="Send email to deepakinmail@gmail.com"
            >
              <Mail className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 transform sm:bottom-6 lg:bottom-8"
      >
        <button
          onClick={() => scrollToSection('about')}
          className="animate-bounce rounded-full bg-card/50 p-2 shadow-card backdrop-blur-sm transition-all duration-300 hover:shadow-hover sm:p-2.5"
          aria-label="Scroll down to next section"
        >
          <ArrowDown className="h-4 w-4 text-primary sm:h-5 sm:w-5" />
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;
