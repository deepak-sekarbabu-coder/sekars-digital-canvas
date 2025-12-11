import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  description?: string;
  subtitle?: string;
  centered?: boolean;
  withUnderline?: boolean;
}

const SectionHeading = ({
  title,
  description,
  subtitle,
  centered = true,
  withUnderline = true,
}: SectionHeadingProps) => {
  const containerClass = centered ? 'text-center' : '';
  const maxWidthClass = centered ? 'mx-auto max-w-3xl' : '';

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.1, ease: 'easeOut' },
    },
  };

  const descriptionVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, delay: 0.2, ease: 'easeOut' },
    },
  };

  return (
    <div className={`mb-12 sm:mb-16 ${containerClass}`}>
      {subtitle && (
        <motion.p
          className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary sm:mb-4"
          variants={subtitleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          {subtitle}
        </motion.p>
      )}

      <motion.h2
        className={`mb-4 text-heading-mobile font-bold sm:mb-6 sm:text-3xl lg:text-heading ${
          withUnderline ? 'heading-underline' : ''
        }`}
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <span className="text-gradient">{title}</span>
      </motion.h2>

      {description && (
        <motion.p
          className={`text-body-mobile text-muted-foreground sm:text-base lg:text-lg ${maxWidthClass}`}
          variants={descriptionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeading;
