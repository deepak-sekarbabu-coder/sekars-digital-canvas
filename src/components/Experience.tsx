import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, Calendar, MapPin, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: 'Assistant Technical Consultant',
      company: 'Tata Consultancy Services',
      location: 'Stockholm, Sweden',
      period: '2021 - Till Date',
      type: 'Full-time',
      client: ['Telia Finance'],
      responsibilities: [
        'Acted as a Lead Dev & Security Champion for the team of 6.',
        'Designed a scalable API solution for seamless integration with migrated COBOL code, facilitating communication between legacy COBOL and new migrated code. Implemented a feature toggle to support smooth transition and testing during the go-live phase.',
        "Designed and developed Java-based microservices for Asset, Invoicing and Lifecycle modules, ensuring thorough documentation. These microservices were seamlessly integrated into the company's developer portal to facilitate the smooth onboarding of new customers.",
        'Designed and developed a cutting-edge solution using the latest technologies to replace a COBOL component responsible for parameter configuration and user role management. Implemented robust auditing logs and created alerting dashboards to ensure comprehensive monitoring and security for the application.',
        'Played a key role in the optimization of sales tools, emphasizing a customer-centric approach, by leading initiatives that spanned both front-end and back-end improvements.',
        'Migrated a legacy application responsible for viewing invoices, originally running on Servlet and Lotus Notes to a modern framework. Simultaneously, revamped the user authentication process by implementing Azure Active Directory (Azure AD) for enhanced security and efficiency.',
        'Designed and developed SharePoint APIs to store and retrieve internal financial documents utilized by various internal applications. Implemented this solution using reactive programming techniques, ensuring efficient and responsive document management.',
      ],
      technologies: [
        'Java 21',
        'Spring Boot',
        'Microservices',
        'Spring Batch',
        'Graph QL',
        'Spring AI',
        'Apigee',
        'Docker',
        'Kubernetes',
        'Splunk',
        'Git',
        'GitHub',
        'GitHub Actions',
        'GitHub Copilot',
        'MySQL',
        'MariaDB',
        'PostgreSQL',
        'MongoDB',
        'VMware Tanzu',
        'AWS',
        'SSO',
        'Microsoft Entra AD',
        'HCL Domino Lotus Script',
        'HCL Domino Document Database',
      ],
    },
    {
      title: 'IT Analyst',
      company: 'Tata Consultancy Services',
      location: 'Chennai, India & Helsinki, Finland',
      period: '2017 - 2021',
      type: 'Full-time',
      client: ['JP Morgan Chase(CoreLogic) & Telia Finland'],
      responsibilities: [
        'Significantly elevated DevOps maturity for the B2B Portal project by spearheading the implementation of robust CI/CD pipelines, rigorous Sonar security scanning, comprehensive test automation and real-time stakeholder reporting for every release.',
        "Played a pivotal role in the development of multiple microservices to facilitate integration between diverse systems, adhering to TM Forum's API standards. These efforts contributed to improved interoperability and data exchange across the organization.",
        'Collaborate with cross-functional teams to deliver high-quality software solutions.',
        'Expertly integrated and implemented APIGEE proxies with various end systems, serving as the gateway for seamless integration.',
        'Designed and implemented multiple monitoring dashboards, including Grafana and metrics dashboards, to enhance real-time system visibility. Established proactive alerting mechanisms through Splunk for immediate issue detection and resolution.',
        'Implemented robotic automation for pre-live testing using Robot Framework, consistently reducing manual testing efforts by 2 man-days in each sprint.',
        'Successfully implemented OIDC (OpenID Connect) authentication for the CCUI application using the .NET framework, enhancing security and user access control.',
        'Created LFG data mapping tickets, ensuring accurate and efficient data processing.',
        'Developed a Plan Change feature to extend the scope of responsibilities within our application, enabling seamless integration of new activities and enhancing the application functionality and adaptability.',
        'Addressed HMDA (Home Mortgage Disclosure Act) and UCD (Uniform Closing Dataset) compliance tickets, ensuring adherence to regulatory requirements and maintaining compliance within these critical areas.',
        'Work closely with product managers to translate requirements into technical solutions.',
      ],
      technologies: [
        'Java 11',
        'Spring Boot',
        'Microservices',
        'Apigee',
        'Docker',
        'Kubernetes',
        'Splunk',
        'Git',
        'Jenkins',
        'Robot Framework',
        'OIDC',
        'Python',
        '.NET',
      ],
    },
    {
      title: 'Senior Software Engineer',
      company: 'Infosys Ltd',
      location: 'Chennai, India',
      period: '2015 - 2017',
      type: 'Full-time',
      responsibilities: [
        'Spearheaded a major overhaul of the sales tool to improve the handling of rebate claims within our Promotional Contract Management System. This comprehensive enhancement involved both front-end and back-end modifications, resulting in a more efficient and robust system for managing rebate claims.',
        'Developed Jasper Reports tailored to diverse needs within the agreement management system, catering to Customer Review, Internal Reporting and Bid Allowance tracking for agreements in progress. These additions enhanced reporting capabilities, providing valuable insights and streamlining the agreement management process.',
        'Created a Shell Script for automated email notifications on product price changes and new product additions, ensuring timely and accurate communication.',
        'Introduced an in-row archival process using Oracle 12C to enhance application performance, optimizing data management and retrieval.',
        'Migrated several small internal application from Java 6 to Java 8 to avoid security risk',
      ],
      technologies: [
        'Java 8',
        'Spring Boot',
        'Oracle 12C',
        'Spring MVC',
        'Jasper Reports',
        'Git',
        'Shell Script',
        'Tomcat',
        'Thymeleaf',
        'JSP',
        'JQuery',
        'Weblogic Application Server',
        'Ant',
        'Maven',
      ],
      client: ['PepsiCo'],
    },
    {
      title: 'Software Engineer',
      company: 'Bahwan Cybertek Ltd',
      location: 'Chennai, India',
      period: '2012 - 2015',
      type: 'Full-time',
      responsibilities: [
        'Developed Auto Email Configuration Module, automating the process of sending email statements based on predefined rules.',
        'Worked on developing IP along with DNS for File Transfer mechanisms, ensuring seamless polling and pushing of files.',
        'Developed the Suspect & Reprocessor Module for NCB Channel, facilitating the processing of around 8,000 swift files daily.',
        "Worked on the Pagination Activities of Reports, enhancing the report's user experience and readability.",
        'Involved in Build Deployment activities for offshore and onsite testing, ensuring successful production deployment and providing post-production support.',
      ],
      technologies: [
        'Java 6',
        'Struts Framework',
        'Spring',
        'JSP',
        'Git',
        'Message Broker',
        'JQuery',
        'ApacheMQ',
        'BPMS Suite',
        'FTP/SFTP',
        'JBoss',
        'IBM WAS',
        'GPG/PGP',
        'MS SQL Server 2008-2012',
        'Maven',
      ],
      client: ['HDFC Bank Ltd', 'Telbru', '& NCB Bank'],
    },
  ];

  const listVariants = {
    visible: { transition: { staggerChildren: 0.07 } },
    hidden: {},
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section id="experience" className="scroll-offset section-padding bg-background">
      <div className="container mx-auto px-3 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center sm:mb-16"
          >
            <h2 className="mb-4 text-heading-mobile font-bold sm:mb-6 sm:text-3xl lg:text-heading">
              <span className="text-gradient">Professional Experience</span>
            </h2>
            <p className="mx-auto max-w-3xl text-body-mobile text-muted-foreground sm:text-base lg:text-lg">
              A journey through my professional career, highlighting key roles, responsibilities and
              achievements in software development.
            </p>
          </motion.div>

          {/* Experience Timeline */}
          <div className="space-y-6 sm:space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: 'var(--shadow-hover)' }}
              >
                <Card className="h-full">
                  <CardContent className="p-4 sm:p-6 lg:p-8">
                    <div className="flex flex-col gap-4 sm:gap-6 lg:flex-row lg:items-start lg:justify-between">
                      {/* Left Column - Main Info */}
                      <div className="flex-1">
                        <div className="mb-3 flex flex-col gap-2 sm:mb-4 sm:flex-row sm:items-center sm:gap-4">
                          <div>
                            <h3 className="text-lg font-bold text-foreground sm:text-xl">
                              {exp.title}
                            </h3>
                            <div className="mt-1 flex items-center gap-2 text-small-mobile text-muted-foreground sm:text-sm">
                              <Building className="h-3 w-3 sm:h-4 sm:w-4" />
                              <span className="font-medium">{exp.company}</span>
                            </div>
                          </div>
                          <Badge
                            variant="secondary"
                            className="self-start text-xs sm:self-center sm:text-sm"
                          >
                            {exp.type}
                          </Badge>
                        </div>

                        <div className="mb-4 flex flex-col gap-2 text-small-mobile text-muted-foreground sm:mb-6 sm:flex-row sm:gap-4 sm:text-sm">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-3 w-3 sm:h-4 sm:w-4" />
                            <span>{exp.location}</span>
                          </div>
                          {exp.client && (
                            <div className="flex items-center gap-2">
                              <Users className="h-3 w-3 sm:h-4 sm:w-4" />
                              <span>Clients: {exp.client.join(', ')}</span>
                            </div>
                          )}
                        </div>

                        {/* Responsibilities */}
                        <div className="mb-4 sm:mb-6">
                          <h4 className="mb-2 text-base font-semibold sm:mb-3 sm:text-lg">
                            Key Responsibilities:
                          </h4>
                          <motion.ul
                            className="space-y-1.5 sm:space-y-2"
                            variants={listVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.2 }}
                          >
                            {exp.responsibilities.map((responsibility, idx) => (
                              <motion.li
                                key={idx}
                                className="flex items-start gap-2 text-small-mobile text-foreground/80 sm:gap-3 sm:text-sm"
                                variants={listItemVariants}
                              >
                                <div className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-primary sm:mt-2 sm:h-1.5 sm:w-1.5" />
                                <span>{responsibility}</span>
                              </motion.li>
                            ))}
                          </motion.ul>
                        </div>
                      </div>

                      {/* Right Column - Technologies */}
                      <div className="lg:w-64 lg:flex-shrink-0">
                        <h4 className="mb-2 text-base font-semibold sm:mb-3 sm:text-lg">
                          Technologies Used:
                        </h4>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {exp.technologies.map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
