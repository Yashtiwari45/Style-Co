
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

interface BodyTypeDetectionProps {
  poseData?: any;
}

interface BodyMetrics {
  bodyType: string;
  confidence: number;
  measurements: {
    [key: string]: {
      value: number;
      label: string;
    };
  };
}

const BodyTypeDetection: React.FC<BodyTypeDetectionProps> = ({ poseData }) => {
  const [bodyMetrics, setBodyMetrics] = useState<BodyMetrics | null>(null);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    if (!poseData) return;
    
    setLoading(true);
    
    // Simulate AI processing with a delay
    const timer = setTimeout(() => {
      // This is a simplified mock calculation that would be replaced by actual AI processing
      const mockBodyTypeAnalysis = analyzePoseData(poseData);
      setBodyMetrics(mockBodyTypeAnalysis);
      setLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, [poseData]);
  
  // Mock function to analyze pose data
  const analyzePoseData = (poseData: any): BodyMetrics => {
    // This would be replaced with actual body measurements and AI analysis
    // For now, we'll just return mock data
    const bodyTypes = ["Hourglass", "Rectangle", "Triangle", "Inverted Triangle", "Oval"];
    const randomIndex = Math.floor(Math.random() * bodyTypes.length);
    
    return {
      bodyType: bodyTypes[randomIndex],
      confidence: 0.75 + Math.random() * 0.2,
      measurements: {
        shoulderWidth: {
          value: 40 + Math.floor(Math.random() * 10),
          label: "cm"
        },
        chestWidth: {
          value: 90 + Math.floor(Math.random() * 20),
          label: "cm"
        },
        waistWidth: {
          value: 70 + Math.floor(Math.random() * 20),
          label: "cm"
        },
        hipWidth: {
          value: 95 + Math.floor(Math.random() * 15),
          label: "cm"
        },
      }
    };
  };
  
  if (loading) {
    return (
      <Card className="mb-6">
        <CardContent className="p-6">
          <h3 className="text-lg font-medium mb-4">Analyzing your body type...</h3>
          <Progress value={67} className="h-2 mb-2" />
          <p className="text-sm text-muted-foreground">Please hold still while we process your measurements</p>
        </CardContent>
      </Card>
    );
  }
  
  if (!bodyMetrics) {
    return (
      <Card className="mb-6">
        <CardContent className="p-6">
          <h3 className="text-lg font-medium mb-4">Body Type Detection</h3>
          <p className="text-sm text-muted-foreground">
            Stand in front of the camera to analyze your body type and get personalized outfit recommendations.
          </p>
        </CardContent>
      </Card>
    );
  }
  
  return (
    <Card className="mb-6 animate-fade-in">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
          <div>
            <h3 className="text-lg font-medium mb-1">Your Body Type</h3>
            <div className="flex items-end gap-2">
              <span className="text-2xl font-semibold text-fashion-primary">{bodyMetrics.bodyType}</span>
              <span className="text-sm text-muted-foreground mb-1">
                ({Math.round(bodyMetrics.confidence * 100)}% confidence)
              </span>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Based on your measurements, we've determined your body type. Our recommendations are tailored specifically for your shape.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-3 min-w-[180px]">
            {Object.entries(bodyMetrics.measurements).map(([key, data]) => (
              <div key={key} className="bg-muted/50 rounded-lg p-2 text-center">
                <p className="text-xs text-muted-foreground capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                <p className="font-medium">{data.value}{data.label}</p>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BodyTypeDetection;
