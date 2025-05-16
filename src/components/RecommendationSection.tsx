
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import OutfitCard from './OutfitCard';

interface RecommendationSectionProps {
  title: string;
  description?: string;
  outfits: Array<{
    id: string;
    imageUrl: string;
    name: string;
    price?: string;
    tags?: string[];
    rating?: number;
    isTrending?: boolean;
    weatherAppropriate?: boolean;
  }>;
}

const RecommendationSection: React.FC<RecommendationSectionProps> = ({
  title,
  description,
  outfits
}) => {
  return (
    <section className="mb-8">
      <div className="mb-4">
        <h2 className="text-2xl font-display font-semibold text-fashion-neutral">{title}</h2>
        {description && <p className="text-muted-foreground">{description}</p>}
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {outfits.map((outfit) => (
          <OutfitCard
            key={outfit.id}
            imageUrl={outfit.imageUrl}
            name={outfit.name}
            price={outfit.price}
            tags={outfit.tags}
            rating={outfit.rating}
            isTrending={outfit.isTrending}
            weatherAppropriate={outfit.weatherAppropriate}
          />
        ))}
      </div>
    </section>
  );
};

export default RecommendationSection;
