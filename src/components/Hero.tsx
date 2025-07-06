import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail, Linkedin } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-section relative"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <div className="mb-8">
            <img
              src="/lovable-uploads/74b389a5-0db8-4479-b31f-d34aa3902dc6.png"
              alt="Deepak Sekarbabu"
              className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full mx-auto object-cover border-4 border-white shadow-section"
            />
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-hero font-bold mb-6">
            Hi, I'm{" "}
            <span className="text-gradient">Deepak Sekarbabu</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8 font-light">
            Professional Software Developer & Technology Enthusiast
          </p>

          {/* Description */}
          <p className="text-base sm:text-lg lg:text-xl text-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Passionate about creating innovative software solutions and building exceptional user experiences. 
            With expertise in modern technologies and a commitment to continuous learning, I help organizations 
            achieve their digital goals through thoughtful engineering and creative problem-solving.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-6 text-lg font-semibold shadow-hover"
              onClick={() => scrollToSection("contact")}
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-6 text-lg font-semibold shadow-card hover:shadow-hover"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 mb-12">
            <a
              href="https://www.linkedin.com/in/deepak-sekarbabu-85b67628/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card shadow-card hover:shadow-hover transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="h-6 w-6 text-primary" />
            </a>
            <a
              href="mailto:deepak@example.com"
              className="p-3 rounded-full bg-card shadow-card hover:shadow-hover transition-all duration-300 hover:scale-110"
            >
              <Mail className="h-6 w-6 text-primary" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button
          onClick={() => scrollToSection("about")}
          className="p-2 rounded-full bg-card/50 backdrop-blur-sm shadow-card hover:shadow-hover transition-all duration-300 animate-bounce"
        >
          <ArrowDown className="h-5 w-5 text-primary" />
        </button>
      </div>
    </section>
  );
};

export default Hero;