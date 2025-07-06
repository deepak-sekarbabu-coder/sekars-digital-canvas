import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Send,
  Clock,
  Globe
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "deepak@example.com",
      href: "mailto:deepak@example.com",
      description: "Send me an email anytime"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
      description: "Available Mon-Fri, 9AM-6PM PST"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      href: "#",
      description: "Open to remote opportunities"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/deepak-sekarbabu-85b67628",
      href: "https://www.linkedin.com/in/deepak-sekarbabu-85b67628/",
      description: "Connect with me professionally"
    }
  ];

  const quickLinks = [
    { label: "Schedule a Call", icon: Clock, href: "#" },
    { label: "View Portfolio", icon: Globe, href: "#projects" },
    { label: "Download Resume", icon: Send, href: "#" }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-heading font-bold mb-6">
              Let's <span className="text-gradient">Connect</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              I'm always interested in new opportunities, collaborations, and interesting projects. 
              Let's discuss how we can work together to bring your ideas to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-full">
                      <Send className="h-5 w-5 text-primary" />
                    </div>
                    Send me a message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
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
                      <Send className="h-4 w-4 mr-2" />
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
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
                      className="flex items-start gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      <div className="p-2 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                        <item.icon className="h-4 w-4 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-sm">{item.label}</h4>
                        <p className="text-sm text-foreground/80 break-all">{item.value}</p>
                        <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
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
                    <Button
                      key={index}
                      variant="outline"
                      className="w-full justify-start"
                      asChild
                    >
                      <a href={link.href}>
                        <link.icon className="h-4 w-4 mr-2" />
                        {link.label}
                      </a>
                    </Button>
                  ))}
                </CardContent>
              </Card>

              {/* Availability */}
              <Card className="card-hover">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center gap-2 text-green-600 dark:text-green-400 mb-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
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
          <div className="text-center mt-16 pt-8 border-t border-border">
            <p className="text-muted-foreground mb-6">
              Follow me on social media for updates and tech insights
            </p>
            <div className="flex items-center justify-center gap-4">
              <a
                href="https://www.linkedin.com/in/deepak-sekarbabu-85b67628/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card shadow-card hover:shadow-hover transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="h-5 w-5 text-primary" />
              </a>
              <a
                href="#"
                className="p-3 rounded-full bg-card shadow-card hover:shadow-hover transition-all duration-300 hover:scale-110"
              >
                <Github className="h-5 w-5 text-primary" />
              </a>
              <a
                href="mailto:deepak@example.com"
                className="p-3 rounded-full bg-card shadow-card hover:shadow-hover transition-all duration-300 hover:scale-110"
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