
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Sun, Cloud } from 'lucide-react';

const Navbar: React.FC = () => {
  const [location, setLocation] = useState('New York');
  const [weather, setWeather] = useState({ temp: '72°F', condition: 'Sunny' });

  return (
    <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-10 px-6 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 md:hidden">
          <Button variant="ghost" size="icon" className="md:hidden">
            <span className="sr-only">Toggle sidebar</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
        
        <form className="hidden md:flex-1 md:flex md:max-w-sm md:mx-auto">
          <div className="relative w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <Input
              type="search"
              placeholder="Search for items..."
              className="w-full pl-8 rounded-full bg-background"
            />
          </div>
        </form>
        
        <div className="flex items-center gap-4 md:gap-6 ml-auto">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            {weather.condition === 'Sunny' ? (
              <Sun className="h-4 w-4 text-yellow-500" />
            ) : (
              <Cloud className="h-4 w-4 text-blue-400" />
            )}
            <span>{location}, {weather.temp}</span>
          </div>
          
          <Avatar>
            <AvatarImage src="" alt="User" />
            <AvatarFallback className="bg-fashion-primary text-white">SM</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
