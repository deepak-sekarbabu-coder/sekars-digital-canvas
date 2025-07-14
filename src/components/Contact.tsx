import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Clock, Github, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react';

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
        console.error('EmailJS environment variables are not configured.');
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
      console.error('Error sending email:', error);
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
    window.open(
      import.meta.env.VITE_RESUME_PATH || '/resume/Deepak Sekarbabu_SolutionArchitect_Java.pdf',
      '_blank',
      'noopener,noreferrer'
    );
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
      description: 'Available Mon-Fri, 9AM-6PM CEST',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: import.meta.env.VITE_LOCATION || 'Your Location',
      href: '#',
      description: 'Open to opportunities in UK',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: `linkedin.com/in/${import.meta.env.VITE_LINKEDIN_URL || ''}`,
      href: `https://www.linkedin.com/in/${import.meta.env.VITE_LINKEDIN_URL || ''}/`,
      description: 'Connect with me professionally',
    },
  ];

  const quickLinks = [{ label: 'Schedule a Call', icon: Clock, href: '#' }];

  return (
    <section id="contact" className="bg-background py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-6 text-3xl font-bold sm:text-4xl lg:text-heading">
              Let's <span className="text-gradient">Connect</span>
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
              I'm always interested in new opportunities, collaborations and interesting projects.
              Let's discuss how we can work together to bring your ideas to life.
            </p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-3">
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
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="rounded-full bg-primary/10 p-2">
                      <Send className="h-5 w-5 text-primary" />
                    </div>
                    Send me a message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
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
                      className="w-full sm:w-auto"
                    >
                      <Send className="mr-2 h-4 w-4" />
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
                  <CardHeader>
                    <CardTitle>Get in Touch</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {contactInfo.map((item, index) => (
                      <a
                        key={index}
                        href={item.href}
                        className="group flex items-start gap-4 rounded-lg p-3 transition-colors hover:bg-muted/50"
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        aria-label={`Contact via ${item.label}${item.value ? `: ${item.value}` : ''}${item.href.startsWith('http') ? ' (opens in a new tab)' : ''}`}
                      >
                        <div className="rounded-full bg-primary/10 p-2 transition-colors group-hover:bg-primary/20">
                          <item.icon className="h-4 w-4 text-primary" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h4 className="text-sm font-semibold">{item.label}</h4>
                          <p className="break-all text-sm text-foreground/80">{item.value}</p>
                          <p className="mt-1 text-xs text-muted-foreground">{item.description}</p>
                        </div>
                      </a>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>

              {/* Quick Actions */}
              <motion.div whileHover={{ y: -5, boxShadow: 'var(--shadow-hover)' }}>
                <Card>
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {quickLinks.map((link, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        className="w-full justify-start"
                        asChild
                      >
                        <a
                          href={link.href}
                          aria-label={`Quick action: ${link.label} (opens in new tab)`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <link.icon className="mr-2 h-4 w-4" aria-hidden="true" />
                          {link.label}
                        </a>
                      </Button>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>

              {/* Availability */}
              <motion.div whileHover={{ y: -5, boxShadow: 'var(--shadow-hover)' }}>
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="mb-2 inline-flex items-center gap-2 text-green-600 dark:text-green-400">
                      <div className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
                      <span className="text-sm font-medium">
                        Available for new projects from Dec 2025
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Currently looking for opportunities in UK
                    </p>
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
