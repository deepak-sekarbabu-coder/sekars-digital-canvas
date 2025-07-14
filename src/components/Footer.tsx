import { Heart, Code } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8 }}
      className="border-t border-border bg-muted/30"
    >
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-4 flex items-center gap-2 text-muted-foreground md:mb-0">
            <span>© {currentYear} Deepak Sekarbabu</span>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#about" className="transition-colors hover:text-primary">
              About
            </a>
            <a href="#contact" className="transition-colors hover:text-primary">
              Contact
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              Privacy
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
