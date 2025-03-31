
import React from 'react';
import NavBar from '@/components/NavBar';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, Server, Laptop, Headphones, Cloud, Database, Code, Settings, Wifi, HardDrive, Monitor, Lock } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description, 
  features 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string; 
  features: string[];
}) => (
  <Card className="service-card h-full">
    <CardHeader>
      <div className="mb-2">
        <Icon className="h-10 w-10 text-primary" />
      </div>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent>
      <ul className="space-y-2 text-sm">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="h-5 w-5 text-primary flex-shrink-0">✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </CardContent>
    <CardFooter className="pt-2">
      <Button className="w-full">Inquire</Button>
    </CardFooter>
  </Card>
);

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: "Cybersecurity Services",
      description: "Comprehensive protection for your business against cyber threats",
      features: [
        "Security assessment and auditing",
        "Firewall implementation and management",
        "Data encryption solutions",
        "Security awareness training",
        "Incident response planning"
      ]
    },
    {
      icon: Server,
      title: "Network Management",
      description: "Setup and maintenance of reliable network infrastructure",
      features: [
        "Network design and implementation",
        "Router and switch configuration",
        "Network monitoring and optimization",
        "VPN setup and management",
        "Network security implementation"
      ]
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      description: "Leverage the power of cloud for your business operations",
      features: [
        "Cloud migration strategies",
        "AWS/Azure/Google Cloud setup",
        "Cloud security implementation",
        "Cost optimization for cloud resources",
        "Hybrid cloud solutions"
      ]
    },
    {
      icon: Database,
      title: "Data Management",
      description: "Efficient strategies for handling and protecting your business data",
      features: [
        "Database design and implementation",
        "Data backup and recovery solutions",
        "Data migration services",
        "Database performance optimization",
        "Data compliance consulting"
      ]
    },
    {
      icon: Laptop,
      title: "IT Consulting",
      description: "Strategic technology planning to boost your business efficiency",
      features: [
        "IT infrastructure assessment",
        "Technology roadmap development",
        "IT cost optimization",
        "Digital transformation consulting",
        "Vendor selection and management"
      ]
    },
    {
      icon: Code,
      title: "Software Solutions",
      description: "Custom software development and integration",
      features: [
        "Business process automation",
        "Custom application development",
        "Software integration services",
        "Legacy system modernization",
        "Software maintenance and support"
      ]
    },
    {
      icon: Headphones,
      title: "Tech Support",
      description: "Responsive technical support for all your IT needs",
      features: [
        "24/7 helpdesk support",
        "Remote troubleshooting",
        "On-site technical assistance",
        "Hardware repair and maintenance",
        "Software troubleshooting"
      ]
    },
    {
      icon: Settings,
      title: "IT Infrastructure Management",
      description: "Comprehensive management of your entire IT ecosystem",
      features: [
        "Server setup and management",
        "Hardware procurement advice",
        "Infrastructure monitoring",
        "System updates and patches",
        "Capacity planning"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <NavBar />
      
      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6 fade-in">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-2">Our Services</h1>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Comprehensive IT solutions tailored to meet your business needs. From network setup to cybersecurity, we provide end-to-end services to keep your technology running smoothly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
              />
            ))}
          </div>

          <Separator className="my-16" />

          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Need a Custom Solution?</h2>
            <p className="text-gray-600 mb-6">
              Don't see exactly what you're looking for? We specialize in creating custom IT solutions tailored to your unique business challenges. Contact us today to discuss your specific requirements.
            </p>
            <Button size="lg">Contact Us</Button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 bg-gray-800 text-white mt-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Laptop className="h-5 w-5" />
              <span className="font-semibold">Gabriel Marcelo IT Services</span>
            </div>
            <p className="text-sm text-gray-400">
              © 2023 Gabriel Marcelo IT Services. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Services;
