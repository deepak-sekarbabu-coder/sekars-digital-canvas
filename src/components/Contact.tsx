import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Linkedin, Github, Send, Clock, Globe } from 'lucide-react';

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

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: 'Message Sent!',
        description: "Thank you for your message. I'll get back to you soon!",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const downloadResume = () => {
    window.open(
      '/resume/Deepak Sekarbabu_SolutionArchitect_Java.pdf',
      '_blank',
      'noopener,noreferrer'
    );
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'deepak.sekarbabu@tcs.com',
      href: 'mailto:deepak.sekarbabu@tcs.com',
      description: 'Send me an email anytime',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+46 767486520',
      href: 'tel:+46 767486520',
      description: 'Available Mon-Fri, 9AM-6PM CEST',
    },
    {
      icon: Phone,
      label: 'WhatsApp',
      value: '+91 9789801844',
      href: 'tel:+91 9789801844',
      description: 'Available Mon-Fri, 9AM-6PM CEST',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Stockholm, Sweden',
      href: '#',
      description: 'Open to remote opportunities',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/deepak-sekarbabu-85b67628',
      href: 'https://www.linkedin.com/in/deepak-sekarbabu-85b67628/',
      description: 'Connect with me professionally',
    },
  ];

  const quickLinks = [
    { label: 'Schedule a Call', icon: Clock, href: '#' },
    { label: 'Download Resume', icon: Send, href: '#' },
  ];

  return (
    <section id="contact" className="bg-background py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-3xl font-bold sm:text-4xl lg:text-heading">
              Let's <span className="text-gradient">Connect</span>
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
              I'm always interested in new opportunities, collaborations, and interesting projects.
              Let's discuss how we can work together to bring your ideas to life.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="card-hover">
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
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Resume Download */}
              <Card className="card-hover">
                <Button variant="outline" onClick={downloadResume} className="w-full">
                  <Send className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
              </Card>

              {/* Contact Details */}
              <Card className="card-hover">
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

              {/* Quick Actions */}
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <Button key={index} variant="outline" className="w-full justify-start" asChild>
                      <a href={link.href}>
                        <link.icon className="mr-2 h-4 w-4" />
                        {link.label}
                      </a>
                    </Button>
                  ))}
                </CardContent>
              </Card>

              {/* Availability */}
              <Card className="card-hover">
                <CardContent className="p-6 text-center">
                  <div className="mb-2 inline-flex items-center gap-2 text-green-600 dark:text-green-400">
                    <div className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
                    <span className="text-sm font-medium">Available for new projects</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Currently accepting freelance and full-time opportunities
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Social Media Footer */}
          <div className="mt-16 border-t border-border pt-8 text-center">
            <p className="mb-6 text-muted-foreground">
              Follow me on social media for updates and tech insights
            </p>
            <div className="flex items-center justify-center gap-4">
              <a
                href="https://www.linkedin.com/in/deepak-sekarbabu-85b67628/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-card p-3 shadow-card transition-all duration-300 hover:scale-110 hover:shadow-hover"
              >
                <Linkedin className="h-5 w-5 text-primary" />
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
                <Mail className="h-5 w-5 text-primary" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
