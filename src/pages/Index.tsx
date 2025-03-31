
import React from 'react';
import NavBar from '@/components/NavBar';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Server, Laptop, Headphones } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <NavBar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
          <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-4 fade-in">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tighter">
              Welcome to Gabriel Marcelo IT Services
            </h1>
            <p className="max-w-[700px] text-lg md:text-xl text-white/90">
              Professional IT solutions tailored to your business needs. From network setup to cybersecurity, we've got you covered.
            </p>
            <div className="space-x-4">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-white/90">
                <Link to="/services">View Services</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                <Link to="/profile">Meet Gabriel</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Expertise</h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl">
                  With years of experience in IT industry, we deliver solutions that help businesses thrive.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-8">
              <Card className="service-card">
                <CardHeader>
                  <Shield className="h-10 w-10 text-primary" />
                  <CardTitle>Cybersecurity</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Protecting your business from cyber threats with advanced security solutions.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="service-card">
                <CardHeader>
                  <Server className="h-10 w-10 text-primary" />
                  <CardTitle>Network Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Setting up and maintaining reliable network infrastructure for your business.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="service-card">
                <CardHeader>
                  <Laptop className="h-10 w-10 text-primary" />
                  <CardTitle>IT Consulting</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Strategic technology planning and implementation to boost your business efficiency.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="service-card">
                <CardHeader>
                  <Headphones className="h-10 w-10 text-primary" />
                  <CardTitle>Tech Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Responsive technical support for all your IT needs, ensuring minimal downtime.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">What Our Clients Say</h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl">
                  Don't just take our word for it. Here's what our clients have to say.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col space-y-2">
                    <p className="text-gray-500 italic">
                      "Gabriel helped our company secure our digital assets with a comprehensive cybersecurity solution. Extremely professional and knowledgeable."
                    </p>
                    <p className="font-semibold">- Sarah Johnson, CEO</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col space-y-2">
                    <p className="text-gray-500 italic">
                      "Our network infrastructure was completely transformed after working with Gabriel Marcelo IT Services. Highly recommend!"
                    </p>
                    <p className="font-semibold">- Michael Rodriguez, IT Director</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col space-y-2">
                    <p className="text-gray-500 italic">
                      "The tech support we receive is prompt, efficient, and always solves our issues. A reliable partner for all our IT needs."
                    </p>
                    <p className="font-semibold">- Emily Chen, Operations Manager</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 bg-gray-800 text-white">
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

export default Index;
