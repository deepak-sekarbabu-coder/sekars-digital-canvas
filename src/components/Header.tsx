import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useActiveSection } from '@/hooks/useActiveSection';

interface HeaderProps {
  toggleDarkMode: () => void;
  isDarkMode: boolean;
}

const Header = ({ toggleDarkMode, isDarkMode }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Experience', id: 'experience' },
    { label: 'Skills', id: 'skills' },
    { label: 'Education', id: 'education' },
    { label: 'Contact', id: 'contact' },
  ];

  // Track active section
  const activeSection = useActiveSection({
    sectionIds: ['hero', ...navItems.map((item) => item.id)],
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Use passive listener for better performance and bfcache compatibility
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  // Check if a navigation item is active
  const isNavItemActive = (itemId: string) => {
    // Special case: when on hero section, highlight "About" as it's the first nav item
    if (activeSection === 'hero' && itemId === 'about') {
      return true;
    }
    return activeSection === itemId;
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'border-b border-border bg-background/80 shadow-card backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4 pr-4 sm:pr-0">
          <div
            className="text-gradient min-w-0 flex-shrink cursor-pointer truncate text-lg font-bold sm:text-xl"
            onClick={() => scrollToSection('hero')}
          >
            Deepak Sekarbabu
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-8 md:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative font-medium transition-all duration-200 ${
                  isNavItemActive(item.id)
                    ? 'font-semibold text-primary'
                    : 'text-foreground hover:text-primary'
                }`}
              >
                {item.label}
                {/* Active indicator */}
                {isNavItemActive(item.id) && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-primary"
                    initial={false}
                    transition={{
                      type: 'spring',
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </button>
            ))}
            <Button
              variant="outline"
              size="icon"
              onClick={toggleDarkMode}
              className="ml-4"
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              <span className="sr-only">
                {isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              </span>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="mr-4 flex items-center gap-2 md:hidden">
            <Button
              variant="outline"
              size="icon"
              onClick={toggleDarkMode}
              className="h-9 w-9 shrink-0"
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              <span className="sr-only">
                {isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              </span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="h-9 w-9 shrink-0"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              <span className="sr-only">{isMenuOpen ? 'Close menu' : 'Open menu'}</span>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 right-0 top-full space-y-1 border-b border-border bg-background/95 py-4 shadow-card backdrop-blur-md md:hidden"
          >
            <div className="container mx-auto px-3 sm:px-6 lg:px-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative block w-full rounded-md px-4 py-3 text-left transition-all duration-200 ${
                    isNavItemActive(item.id)
                      ? 'border-l-2 border-primary bg-primary/10 font-semibold text-primary'
                      : 'text-foreground hover:bg-muted hover:text-primary'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    {item.label}
                    {/* Active indicator for mobile */}
                    {isNavItemActive(item.id) && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="h-2 w-2 rounded-full bg-primary"
                      />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
