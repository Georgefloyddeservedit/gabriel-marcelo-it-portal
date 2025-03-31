
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Laptop, User, Home } from 'lucide-react';

const NavBar = () => {
  const location = useLocation();
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex items-center">
          <Link to="/" className="flex items-center gap-2">
            <Laptop className="h-6 w-6 text-primary" />
            <span className="hidden font-bold sm:inline-block">Gabriel Marcelo IT Services</span>
          </Link>
        </div>
        <nav className="flex flex-1 items-center justify-end space-x-4">
          <Button
            variant={location.pathname === '/' ? 'default' : 'ghost'}
            asChild
          >
            <Link to="/" className="flex items-center gap-2">
              <Home className="h-4 w-4" />
              <span>Home</span>
            </Link>
          </Button>
          <Button
            variant={location.pathname === '/profile' ? 'default' : 'ghost'}
            asChild
          >
            <Link to="/profile" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>Profile</span>
            </Link>
          </Button>
          <Button
            variant={location.pathname === '/services' ? 'default' : 'ghost'}
            asChild
          >
            <Link to="/services" className="flex items-center gap-2">
              <Laptop className="h-4 w-4" />
              <span>Services</span>
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
