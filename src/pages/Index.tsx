
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from "@/hooks/use-toast";
import WebcamCapture from '@/components/WebcamCapture';
import BodyTypeDetection from '@/components/BodyTypeDetection';
import WeatherOutfitSuggestions from '@/components/WeatherOutfitSuggestions';
import TrendingStyles from '@/components/TrendingStyles';
import RecommendationSection from '@/components/RecommendationSection';

const Index = () => {
  const { toast } = useToast();
  const [poseData, setPoseData] = useState(null);
  const [activeTab, setActiveTab] = useState('camera');
  
  // Mock data for personalized outfits
  const personalizedOutfits = [
    {
      id: 'pers1',
      imageUrl: 'https://images.unsplash.com/photo-1601762603339-fd61e28b698a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      name: 'Tailored Suit Ensemble',
      price: '$249.99',
      tags: ['Formal', 'Business'],
      rating: 4.8,
      weatherAppropriate: true
    },
    {
      id: 'pers2',
      imageUrl: 'https://images.unsplash.com/photo-1512353087810-25dfcd100962?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      name: 'Relaxed Fit Casual Set',
      price: '$129.50',
      tags: ['Casual', 'Comfortable'],
      rating: 4.6
    },
    {
      id: 'pers3',
      imageUrl: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      name: 'Summer Evening Outfit',
      price: '$89.95',
      tags: ['Summer', 'Evening'],
      rating: 4.5,
      weatherAppropriate: true
    },
    {
      id: 'pers4',
      imageUrl: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      name: 'Street Style Collection',
      price: '$159.99',
      tags: ['Trendy', 'Urban'],
      rating: 4.7,
      isTrending: true
    }
  ];
  
  const handlePoseDetected = (pose: any) => {
    setPoseData(pose);
  };
  
  const handleCapture = (imageData: string) => {
    toast({
      title: "Image captured!",
      description: "Your pose has been analyzed for personalized outfit recommendations.",
    });
  };
  
  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-fashion-neutral">
            AI Stylist Mirror
          </h1>
          <p className="text-muted-foreground mt-2">
            Get personalized outfit recommendations based on your body type, weather, and current trends.
          </p>
        </header>
        
        <Tabs 
          defaultValue="camera" 
          className="mb-8"
          value={activeTab}
          onValueChange={setActiveTab}
        >
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="camera">Camera</TabsTrigger>
            <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
            <TabsTrigger value="trends">Trends</TabsTrigger>
          </TabsList>
          
          <TabsContent value="camera" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              <div className="md:col-span-3">
                <Card>
                  <CardContent className="p-6">
                    <WebcamCapture 
                      onCapture={handleCapture}
                      onPoseDetected={handlePoseDetected}
                    />
                    <div className="mt-4 flex items-center justify-between">
                      <p className="text-sm text-muted-foreground">
                        Stand in front of the camera so we can analyze your body type
                      </p>
                      <Button 
                        onClick={() => setActiveTab('recommendations')}
                        className="bg-fashion-primary hover:bg-fashion-primary/90"
                      >
                        Get Recommendations
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="md:col-span-2">
                <BodyTypeDetection poseData={poseData} />
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-medium text-lg mb-4">How it works</h3>
                    <ol className="space-y-4 text-sm">
                      <li className="flex gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-fashion-primary/20 text-fashion-primary flex items-center justify-center">1</div>
                        <div>
                          <p className="font-medium">Stand in front of the camera</p>
                          <p className="text-muted-foreground">Make sure your full body is visible</p>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-fashion-primary/20 text-fashion-primary flex items-center justify-center">2</div>
                        <div>
                          <p className="font-medium">AI analyzes your body type</p>
                          <p className="text-muted-foreground">We identify your shape and measurements</p>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-fashion-primary/20 text-fashion-primary flex items-center justify-center">3</div>
                        <div>
                          <p className="font-medium">Get personalized recommendations</p>
                          <p className="text-muted-foreground">Based on your body type, current weather, and trends</p>
                        </div>
                      </li>
                    </ol>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="recommendations" className="animate-fade-in">
            <div className="space-y-8">
              <BodyTypeDetection poseData={poseData} />
              <WeatherOutfitSuggestions />
              <RecommendationSection
                title="Personalized for You"
                description="These outfits are tailored to your body type and style preferences"
                outfits={personalizedOutfits}
              />
            </div>
          </TabsContent>
          
          <TabsContent value="trends" className="animate-fade-in">
            <div className="space-y-8">
              <TrendingStyles />
              
              <section className="mb-8">
                <h2 className="text-2xl font-display font-semibold mb-4 text-fashion-neutral">
                  Season's Must-Haves
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="overflow-hidden card-hover">
                    <div className="aspect-[16/9]">
                      <img
                        src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                        alt="Seasonal fashion"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-medium text-lg mb-1">Summer Essentials</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Light fabrics and breathable designs for hot days
                      </p>
                      <Button variant="outline" size="sm">Explore</Button>
                    </CardContent>
                  </Card>
                  
                  <Card className="overflow-hidden card-hover">
                    <div className="aspect-[16/9]">
                      <img
                        src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                        alt="Closet basics"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-medium text-lg mb-1">Closet Staples</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Essential items that work with any outfit
                      </p>
                      <Button variant="outline" size="sm">Explore</Button>
                    </CardContent>
                  </Card>
                  
                  <Card className="overflow-hidden card-hover">
                    <div className="aspect-[16/9]">
                      <img
                        src="https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                        alt="Accessories"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-medium text-lg mb-1">Statement Accessories</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Elevate your looks with the right finishing touches
                      </p>
                      <Button variant="outline" size="sm">Explore</Button>
                    </CardContent>
                  </Card>
                </div>
              </section>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Index;
