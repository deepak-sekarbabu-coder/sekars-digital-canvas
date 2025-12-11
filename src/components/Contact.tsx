import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { BookOpen, Clock, Github, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);

    // Basic form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: 'Error',
        description: 'Please fill in all required fields.',
        variant: 'destructive',
      });
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: 'Error',
        description: 'Please enter a valid email address.',
        variant: 'destructive',
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // Get EmailJS configuration from environment variables
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        if (import.meta.env.DEV) {
          console.error('EmailJS environment variables are not configured.');
        }
        toast({
          title: 'Configuration Error',
          description:
            'The email service is not configured correctly. Please contact the site administrator.',
          variant: 'destructive',
        });
        setIsSubmitting(false);
        return;
      }

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        to_name: 'Deepak',
        subject: formData.subject || 'Message from your Website',
        message: formData.message,
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      toast({
        title: 'Message Sent!',
        description: "Thank you for your message. I'll get back to you soon!",
      });

      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      if (import.meta.env.DEV) {
        console.error('Error sending email:', error);
      }
      toast({
        title: 'Error',
        description: 'Failed to send message. Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const downloadResume = () => {
    // Get the resume path from environment or use default
    const resumePath =
      import.meta.env.VITE_RESUME_PATH || '/resume/Deepak Sekarbabu_SolutionArchitect_Java.pdf';

    // Convert absolute path to relative for GitHub Pages compatibility
    const finalPath = resumePath.startsWith('/') ? `.${resumePath}` : resumePath;

    window.open(finalPath, '_blank', 'noopener,noreferrer');
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: import.meta.env.VITE_CONTACT_EMAIL || '',
      href: `mailto:${import.meta.env.VITE_CONTACT_EMAIL || ''}`,
      description: 'Send me an email anytime',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: import.meta.env.VITE_PHONE_NUMBER || '',
      href: `tel:${import.meta.env.VITE_PHONE_NUMBER || ''}`,
      description: 'Available Mon-Fri, 9AM-6PM CEST',
    },
    {
      icon: Phone,
      label: 'WhatsApp',
      value: import.meta.env.VITE_WHATSAPP_NUMBER || '',
      href: `tel:${import.meta.env.VITE_WHATSAPP_NUMBER || ''}`,
      description: 'Available anytime via WhatsApp',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: import.meta.env.VITE_LOCATION || 'Your Location',
      href: '#',
      description: 'Open to opportunities in Chennai, India or Remote',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: `linkedin.com/in/${import.meta.env.VITE_LINKEDIN_URL || ''}`,
      href: `https://www.linkedin.com/in/${import.meta.env.VITE_LINKEDIN_URL || ''}/`,
      description: 'Connect with me professionally',
    },
  ];

  const scrollToPhone = () => {
    const phoneSection = document.getElementById('phone-section');
    if (phoneSection) {
      phoneSection.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

  const quickLinks = [
    {
      label: 'Schedule a Call',
      icon: Clock,
      onClick: scrollToPhone,
    },
  ];

  return (
    <section id="contact" className="scroll-offset section-padding bg-background">
      <div className="container mx-auto px-3 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center sm:mb-16"
          >
            <h2 className="mb-4 text-heading-mobile font-bold sm:mb-6 sm:text-3xl lg:text-heading">
              Let's <span className="text-gradient">Connect</span>
            </h2>
            <p className="mx-auto max-w-3xl text-body-mobile text-muted-foreground sm:text-base lg:text-lg">
              I'm always interested in new opportunities, collaborations and interesting projects.
              Let's discuss how we can work together to bring your ideas to life.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:gap-8 lg:grid-cols-3">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -5, boxShadow: 'var(--shadow-hover)' }}
              className="lg:col-span-2"
            >
              <Card className="h-full">
                <CardHeader className="px-4 py-4 sm:px-6 sm:py-6">
                  <CardTitle className="flex items-center gap-2 text-base sm:gap-3 sm:text-lg">
                    <div className="rounded-full bg-primary/10 p-1.5 sm:p-2">
                      <Send className="h-4 w-4 text-primary sm:h-5 sm:w-5" />
                    </div>
                    Send me a message
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-4 pb-4 sm:px-6 sm:pb-6">
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="What's this about?"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me about your project or opportunity..."
                        rows={6}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="h-10 w-full text-sm sm:h-11 sm:w-auto sm:text-base"
                    >
                      <Send className="mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6"
            >
              {/* Resume Download */}
              <motion.div whileHover={{ y: -5, boxShadow: 'var(--shadow-hover)' }}>
                <Card>
                  <Button variant="outline" onClick={downloadResume} className="w-full">
                    <Send className="mr-2 h-4 w-4" />
                    Download Resume
                  </Button>
                </Card>
              </motion.div>

              {/* Contact Details */}
              <motion.div whileHover={{ y: -5, boxShadow: 'var(--shadow-hover)' }}>
                <Card>
                  <CardHeader className="px-4 py-4 sm:px-6 sm:py-6">
                    <CardTitle className="text-base sm:text-lg">Get in Touch</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 px-4 pb-4 sm:space-y-4 sm:px-6 sm:pb-6">
                    {contactInfo.map((item, index) => (
                      <a
                        key={index}
                        id={item.label === 'Phone' ? 'phone-section' : undefined}
                        href={item.href}
                        className="group flex items-start gap-4 rounded-lg p-3 transition-colors hover:bg-muted/50"
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        aria-label={`Contact via ${item.label}${item.value ? `: ${item.value}` : ''}${item.href.startsWith('http') ? ' (opens in a new tab)' : ''}`}
                      >
                        <div className="rounded-full bg-primary/10 p-1.5 transition-colors group-hover:bg-primary/20 sm:p-2">
                          <item.icon className="h-3.5 w-3.5 text-primary sm:h-4 sm:w-4" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h4 className="text-small-mobile font-semibold sm:text-sm">
                            {item.label}
                          </h4>
                          <p className="break-all text-small-mobile text-foreground/80 sm:text-sm">
                            {item.value}
                          </p>
                          <p className="mt-0.5 text-xs text-muted-foreground sm:mt-1">
                            {item.description}
                          </p>
                        </div>
                      </a>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>

              {/* Quick Actions */}
              <motion.div whileHover={{ y: -5, boxShadow: 'var(--shadow-hover)' }}>
                <Card>
                  <CardHeader className="px-4 py-4 sm:px-6 sm:py-6">
                    <CardTitle className="text-base sm:text-lg">Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 px-4 pb-4 sm:space-y-3 sm:px-6 sm:pb-6">
                    {quickLinks.map((link, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        className="w-full justify-start"
                        onClick={link.onClick}
                        aria-label={`Quick action: ${link.label}`}
                      >
                        <link.icon className="mr-2 h-4 w-4" aria-hidden="true" />
                        {link.label}
                      </Button>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>

          {/* Social Media Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-16 border-t border-border pt-8 text-center"
          >
            <p className="mb-6 text-muted-foreground">
              Follow me on social media for updates and tech insights
            </p>
            <div className="flex items-center justify-center gap-4">
              <motion.a
                href={`https://www.linkedin.com/in/${import.meta.env.VITE_LINKEDIN_URL || ''}/`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-card p-3 shadow-card"
                whileHover={{ scale: 1.15, y: -2, boxShadow: 'var(--shadow-hover)' }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300 }}
                aria-label="LinkedIn profile (opens in a new tab)"
              >
                <Linkedin className="h-5 w-5 text-primary" />
              </motion.a>
              <motion.a
                href={`https://github.com/${import.meta.env.VITE_GITHUB_URL || ''}`}
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
                href={`mailto:${import.meta.env.VITE_CONTACT_EMAIL || ''}`}
                className="rounded-full bg-card p-3 shadow-card"
                whileHover={{ scale: 1.15, y: -2, boxShadow: 'var(--shadow-hover)' }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300 }}
                aria-label={`Send email to ${import.meta.env.VITE_CONTACT_EMAIL || ''}`}
              >
                <Mail className="h-5 w-5 text-primary" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
