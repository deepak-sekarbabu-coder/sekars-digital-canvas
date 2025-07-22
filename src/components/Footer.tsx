import { Heart, Code } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 0.8 }}
      className="border-t border-border bg-muted/30"
    >
      <div className="container mx-auto px-3 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
          <div className="mb-2 flex items-center gap-2 text-small-mobile text-muted-foreground md:mb-0 md:text-sm">
            <span>© {currentYear} Deepak Sekarbabu</span>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex items-center gap-4 text-small-mobile text-muted-foreground sm:gap-6 sm:text-sm">
              <li>
                <a
                  href="#about"
                  className="transition-colors hover:text-primary"
                  aria-label="Navigate to About section"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="transition-colors hover:text-primary"
                  aria-label="Navigate to Contact section"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
