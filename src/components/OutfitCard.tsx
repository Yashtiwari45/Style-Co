
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface OutfitCardProps {
  imageUrl: string;
  name: string;
  price?: string;
  tags?: string[];
  rating?: number;
  isTrending?: boolean;
  weatherAppropriate?: boolean;
  onClick?: () => void;
  className?: string;
}

const OutfitCard: React.FC<OutfitCardProps> = ({
  imageUrl,
  name,
  price,
  tags = [],
  rating = 0,
  isTrending = false,
  weatherAppropriate = false,
  onClick,
  className,
}) => {
  return (
    <Card 
      className={cn(
        "overflow-hidden transition-all duration-300 card-hover", 
        className
      )}
    >
      <div className="relative aspect-[3/4] overflow-hidden">
        <img 
          src={imageUrl} 
          alt={name}
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
        />
        {isTrending && (
          <Badge className="absolute top-2 right-2 bg-fashion-secondary hover:bg-fashion-secondary">
            Trending
          </Badge>
        )}
        {weatherAppropriate && (
          <Badge className="absolute top-2 left-2 bg-fashion-accent hover:bg-fashion-accent">
            Weather Match
          </Badge>
        )}
      </div>
      
      <CardContent className="p-4">
        <h3 className="font-medium text-sm line-clamp-2 mb-1">{name}</h3>
        {price && (
          <p className="text-sm font-semibold text-fashion-primary">{price}</p>
        )}
        
        {rating > 0 && (
          <div className="flex items-center mt-1 text-sm">
            <div className="flex">
              {Array(5)
                .fill(null)
                .map((_, i) => (
                  <span key={i} className={i < rating ? "text-yellow-500" : "text-gray-300"}>
                    ★
                  </span>
                ))}
            </div>
          </div>
        )}
      </CardContent>
      
      <CardFooter className="p-4 pt-0 flex-wrap gap-2">
        {tags.map((tag) => (
          <Badge key={tag} variant="secondary" className="text-xs">
            {tag}
          </Badge>
        ))}
        
        <Button variant="outline" size="sm" className="w-full mt-2" onClick={onClick}>
          Try On
        </Button>
      </CardFooter>
    </Card>
  );
};

export default OutfitCard;
