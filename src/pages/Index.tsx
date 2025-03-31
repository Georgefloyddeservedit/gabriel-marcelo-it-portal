
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-orange-600 to-orange-500 text-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2 space-y-4 text-center md:text-left fade-in">
                <h1 className="text-3xl md:text-5xl font-bold tracking-tighter">
                  We are IT Professionals
                </h1>
                <div className="w-24 h-1 bg-white mx-auto md:mx-0"></div>
                <p className="max-w-[700px] text-lg md:text-xl text-white/90">
                  Professional IT solutions tailored to your business needs. From network setup to cybersecurity, we've got you covered.
                </p>
                <div className="pt-4">
                  <Button asChild size="lg" className="bg-white text-orange-600 hover:bg-white/90">
                    <Link to="/services">Learn More</Link>
                  </Button>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white shadow-xl">
                  <img 
                    src="/lovable-uploads/ac4b9f5c-13ae-46c0-a250-f9aa2f0a0e9c.png" 
                    alt="Gabriel Marcelo" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "https://via.placeholder.com/400x400.png?text=Gabriel+Marcelo";
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="container px-4 md:px-6 mx-auto mt-8">
            <p className="text-center text-white/80 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod
            </p>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="flex flex-col items-center text-center p-6 border border-gray-100 rounded-lg shadow-sm bg-white transition-transform hover:-translate-y-1 hover:shadow-md">
                <div className="p-3 rounded-full bg-orange-100 text-orange-600 mb-4">
                  <Shield className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Cybersecurity</h3>
                <p className="text-gray-600 text-sm">Protecting your business from modern threats</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-6 border border-gray-100 rounded-lg shadow-sm bg-white transition-transform hover:-translate-y-1 hover:shadow-md">
                <div className="p-3 rounded-full bg-orange-100 text-orange-600 mb-4">
                  <Server className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Network Solutions</h3>
                <p className="text-gray-600 text-sm">Building reliable infrastructure for your business</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-6 border border-gray-100 rounded-lg shadow-sm bg-white transition-transform hover:-translate-y-1 hover:shadow-md">
                <div className="p-3 rounded-full bg-orange-100 text-orange-600 mb-4">
                  <Laptop className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">IT Consulting</h3>
                <p className="text-gray-600 text-sm">Strategic technology planning for business growth</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-6 border border-gray-100 rounded-lg shadow-sm bg-white transition-transform hover:-translate-y-1 hover:shadow-md">
                <div className="p-3 rounded-full bg-orange-100 text-orange-600 mb-4">
                  <Headphones className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Tech Support</h3>
                <p className="text-gray-600 text-sm">Responsive support for all your IT needs</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-100 py-12">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to get started?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Get in touch with us today to see how we can help transform your business with our IT services.
            </p>
            <Button className="bg-orange-500 hover:bg-orange-600">Get Started - It's Free</Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 bg-gray-800 text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Laptop className="h-5 w-5" />
              <span className="font-semibold">Gabriel Marcelo IT Services</span>
            </div>
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Gabriel Marcelo IT Services. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
