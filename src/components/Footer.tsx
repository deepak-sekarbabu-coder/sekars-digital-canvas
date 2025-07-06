import { Heart, Code } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-2 text-muted-foreground mb-4 md:mb-0">
            <span>© {currentYear} Deepak Sekarbabu. Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>and</span>
            <Code className="h-4 w-4 text-primary" />
          </div>
          
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a 
              href="#about" 
              className="hover:text-primary transition-colors"
            >
              About
            </a>
            <a 
              href="#projects" 
              className="hover:text-primary transition-colors"
            >
              Projects
            </a>
            <a 
              href="#contact" 
              className="hover:text-primary transition-colors"
            >
              Contact
            </a>
            <a 
              href="#" 
              className="hover:text-primary transition-colors"
            >
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;