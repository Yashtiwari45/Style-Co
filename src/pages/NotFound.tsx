
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-fashion-bg px-4">
      <div className="text-center max-w-lg">
        <div className="mb-6 relative">
          <div className="w-24 h-24 mx-auto bg-gradient-to-br from-fashion-primary to-fashion-secondary rounded-full flex items-center justify-center">
            <span className="text-4xl font-bold text-white">404</span>
          </div>
        </div>
        <h1 className="text-3xl md:text-4xl font-display font-bold mb-4 text-fashion-neutral">
          Style Not Found
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          The fashion piece you're looking for seems to have walked off our runway.
        </p>
        <Button 
          asChild
          className="bg-fashion-primary hover:bg-fashion-primary/90"
          size="lg"
        >
          <a href="/">Return to Style Hub</a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
