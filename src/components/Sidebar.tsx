
import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Home', path: '/', icon: 'home' },
  { name: 'Virtual Try-On', path: '/try-on', icon: 'camera' },
  { name: 'My Wardrobe', path: '/wardrobe', icon: 'shirt' },
  { name: 'Recommendations', path: '/recommendations', icon: 'wand' },
  { name: 'Weather Looks', path: '/weather', icon: 'cloud' },
  { name: 'Fashion Trends', path: '/trends', icon: 'trending-up' },
  { name: 'Settings', path: '/settings', icon: 'settings' },
];

const Sidebar: React.FC = () => {
  const [active, setActive] = React.useState('Home');
  
  return (
    <aside className="hidden md:flex md:w-64 lg:w-72 flex-col border-r bg-white">
      <div className="flex h-14 items-center border-b px-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-fashion-primary to-fashion-secondary flex items-center justify-center">
            <span className="text-white font-semibold text-sm">AS</span>
          </div>
          <span className="font-display text-lg font-medium">AI Stylist</span>
        </div>
      </div>
      <nav className="flex-1 overflow-auto py-4 px-2">
        <div className="space-y-1">
          {navItems.map((item) => (
            <Button
              key={item.name}
              variant="ghost"
              className={cn(
                "w-full justify-start text-left font-normal",
                active === item.name && "bg-primary/10 text-primary font-medium"
              )}
              onClick={() => setActive(item.name)}
            >
              <IconComponent name={item.icon} className="mr-2 h-4 w-4" />
              {item.name}
            </Button>
          ))}
        </div>
      </nav>
      <div className="p-4 border-t">
        <div className="rounded-lg bg-gradient-to-br from-fashion-primary/20 via-fashion-secondary/20 to-fashion-accent/20 p-4">
          <h4 className="font-medium text-sm">Upgrade to Pro</h4>
          <p className="text-xs text-muted-foreground mt-1">
            Get unlimited outfit suggestions and exclusive trendy picks.
          </p>
          <Button size="sm" className="w-full mt-3 bg-fashion-primary hover:bg-fashion-primary/90">
            Go Pro
          </Button>
        </div>
      </div>
    </aside>
  );
};

// Simple icon component to render various icons
const IconComponent = ({ name, className }: { name: string; className?: string }) => {
  switch (name) {
    case 'home':
      return (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className={className} 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      );
    case 'camera':
      return (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className={className} 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
          <circle cx="12" cy="13" r="3" />
        </svg>
      );
    case 'shirt':
      return (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className={className} 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
        </svg>
      );
    case 'wand':
      return (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className={className} 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M15 4V2" />
          <path d="M15 16v-2" />
          <path d="M8 9h2" />
          <path d="M20 9h2" />
          <path d="M17.8 11.8 19 13" />
          <path d="M15 9h0" />
          <path d="M17.8 6.2 19 5" />
          <path d="M3 21l9-9" />
          <path d="M12.2 6.2 11 5" />
        </svg>
      );
    case 'cloud':
      return (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className={className} 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
        </svg>
      );
    case 'trending-up':
      return (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className={className} 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
          <polyline points="17 6 23 6 23 12" />
        </svg>
      );
    case 'settings':
      return (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className={className} 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    default:
      return null;
  }
};

export default Sidebar;
