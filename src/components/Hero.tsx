import { Button } from '@/components/ui/button';
import { ArrowDown, Download, Mail, Linkedin, Github } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center bg-gradient-section"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Profile Image */}
          <div className="mb-8">
            <img
              src="/lovable-uploads/Deepak1.png"
              alt="Deepak Sekarbabu"
              className="mx-auto h-32 w-32 rounded-full border-4 border-white object-cover shadow-section sm:h-40 sm:w-40 lg:h-48 lg:w-48"
            />
          </div>

          {/* Main Title */}
          <h1 className="mb-6 text-4xl font-bold sm:text-5xl lg:text-6xl xl:text-hero">
            Hi, I'm <span className="text-gradient">Deepak Sekarbabu</span>
          </h1>

          {/* Subtitle */}
          <p className="mb-8 text-xl font-light text-muted-foreground sm:text-2xl lg:text-3xl">
            Professional Software Developer & Technology Enthusiast
          </p>

          {/* Description */}
          <p className="mx-auto mb-12 max-w-3xl text-base leading-relaxed text-foreground/80 sm:text-lg lg:text-xl">
            Passionate about creating innovative software solutions and building exceptional user
            experiences. With expertise in modern technologies and a commitment to continuous
            learning, I help organizations achieve their digital goals through thoughtful
            engineering and creative problem-solving.
          </p>

          {/* CTA Buttons */}
          <div className="mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
          </div>

          {/* Social Links */}
          <div className="mb-12 flex items-center justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/deepak-sekarbabu-85b67628/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-card p-3 shadow-card transition-all duration-300 hover:scale-110 hover:shadow-hover"
            >
              <Linkedin className="h-6 w-6 text-primary" />
            </a>
            <a
              href="https://github.com/deepak-sekarbabu"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-card p-3 shadow-card transition-all duration-300 hover:scale-110 hover:shadow-hover"
            >
              <Github className="h-5 w-5 text-primary" />
            </a>
            <a
              href="mailto:deepak.sekarbabu@tcs.com"
              className="rounded-full bg-card p-3 shadow-card transition-all duration-300 hover:scale-110 hover:shadow-hover"
            >
              <Mail className="h-6 w-6 text-primary" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 transform">
        <button
          onClick={() => scrollToSection('about')}
          className="animate-bounce rounded-full bg-card/50 p-2 shadow-card backdrop-blur-sm transition-all duration-300 hover:shadow-hover"
        >
          <ArrowDown className="h-5 w-5 text-primary" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
