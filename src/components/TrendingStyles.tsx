
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import OutfitCard from './OutfitCard';

interface TrendingStylesProps {
  category?: string;
}

const TrendingStyles: React.FC<TrendingStylesProps> = ({ category = 'All' }) => {
  // Mock trending outfits
  const trendingOutfits = [
    {
      id: 'trend1',
      imageUrl: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      name: 'Oversized Blazer with Belt',
      price: '$119.99',
      tags: ['Trending', 'Office', 'Fall'],
      rating: 4.9,
      isTrending: true
    },
    {
      id: 'trend2',
      imageUrl: 'https://images.unsplash.com/photo-1582142306909-195724d33ffc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      name: 'High-Waisted Wide Leg Pants',
      price: '$89.50',
      tags: ['Trending', 'Comfort'],
      rating: 4.7,
      isTrending: true
    },
    {
      id: 'trend3',
      imageUrl: 'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      name: 'Chunky Knit Cardigan',
      price: '$75.00',
      tags: ['Cozy', 'Winter'],
      rating: 4.5,
      isTrending: true
    },
    {
      id: 'trend4',
      imageUrl: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      name: 'Relaxed-Fit Denim Jacket',
      price: '$95.00',
      tags: ['Casual', 'Everyday'],
      rating: 4.6,
      isTrending: true
    }
  ];
  
  return (
    <Card className="mb-6">
      <CardHeader className="pb-3">
        <CardTitle>Trending Styles Right Now</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {trendingOutfits.map((outfit) => (
            <OutfitCard
              key={outfit.id}
              imageUrl={outfit.imageUrl}
              name={outfit.name}
              price={outfit.price}
              tags={outfit.tags}
              rating={outfit.rating}
              isTrending={outfit.isTrending}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TrendingStyles;
