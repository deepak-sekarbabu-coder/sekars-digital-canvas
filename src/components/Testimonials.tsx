import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      image: '/pics/testimonials/Testimonial1.png',
      alt: 'Testimonial 1',
      width: 600,
      height: 400,
    },
    {
      id: 2,
      image: '/pics/testimonials/Testimonial2.png',
      alt: 'Testimonial 2',
      width: 600,
      height: 400,
    },
  ];

  const listVariants = {
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
    hidden: {},
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="testimonials" className="scroll-offset section-padding bg-muted/30">
      <div className="container mx-auto px-3 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center sm:mb-16"
          >
            <h2 className="mb-4 text-heading-mobile font-bold sm:mb-6 sm:text-3xl lg:text-heading">
              <span className="text-gradient">Testimonials</span>
            </h2>
            <p className="mx-auto max-w-3xl text-body-mobile text-muted-foreground sm:text-base lg:text-lg">
              What colleagues and clients say about working with me and the impact of my
              contributions.
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <motion.div
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-8 md:grid-cols-2"
          >
            {testimonials.map((testimonial) => (
              <motion.div key={testimonial.id} variants={itemVariants} className="h-full">
                <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-0">
                    <div className="relative flex aspect-[3/2] w-full items-center justify-center bg-white">
                      <img
                        src={testimonial.image}
                        alt={testimonial.alt}
                        className="h-full w-full object-contain p-4"
                        loading={testimonial.id === 1 ? 'eager' : 'lazy'}
                      />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
