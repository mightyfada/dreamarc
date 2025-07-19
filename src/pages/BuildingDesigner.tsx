import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  Building, 
  Home, 
  Warehouse, 
  ArrowRight, 
  ArrowLeft,
  Layers,
  Palette,
  Ruler,
  Eye,
  Save,
  Share2,
  Sparkles
} from 'lucide-react';

const BuildingDesigner = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedBuildingType, setSelectedBuildingType] = useState('');
  const [designProgress, setDesignProgress] = useState(15);

  const buildingTypes = [
    {
      id: 'residential',
      name: 'Residential Home',
      icon: Home,
      description: 'Single-family homes, apartments, and condos',
      popular: true
    },
    {
      id: 'commercial',
      name: 'Commercial Building',
      icon: Building,
      description: 'Offices, retail spaces, and mixed-use buildings',
      popular: false
    },
    {
      id: 'industrial',
      name: 'Industrial Facility',
      icon: Warehouse,
      description: 'Warehouses, factories, and manufacturing plants',
      popular: false
    }
  ];

  const designSteps = [
    { id: 1, name: 'Building Type', icon: Building, completed: currentStep > 1 },
    { id: 2, name: 'Floor Plan', icon: Layers, completed: currentStep > 2 },
    { id: 3, name: '3D Design', icon: Ruler, completed: currentStep > 3 },
    { id: 4, name: 'Interior Design', icon: Palette, completed: currentStep > 4 },
    { id: 5, name: 'Final Review', icon: Eye, completed: false }
  ];

  const nextStep = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
      setDesignProgress(Math.min(100, designProgress + 20));
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      setDesignProgress(Math.max(0, designProgress - 20));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-background/80">
      {/* Header */}
      <div className="border-b bg-card/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
              <Building className="w-6 h-6" />
              <span className="text-xl font-bold">DreamArc</span>
            </Link>
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Progress:</span>
                <div className="w-24">
                  <Progress value={designProgress} className="h-2" />
                </div>
                <span className="text-sm font-medium">{designProgress}%</span>
              </div>
              <Button variant="outline" size="sm">
                <Save className="w-4 h-4 mr-2" />
                Save
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Link to="/premium">
                <Button variant="premium" size="sm">
                  <Sparkles className="w-4 h-4 mr-2" />
                  AI Premium
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Design Steps */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="text-lg">Design Process</CardTitle>
                <CardDescription>Follow these steps to create your building</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {designSteps.map((step) => {
                  const Icon = step.icon;
                  return (
                    <div
                      key={step.id}
                      className={`flex items-center gap-3 p-3 rounded-lg border transition-colors ${
                        currentStep === step.id
                          ? 'bg-primary/10 border-primary text-primary'
                          : step.completed
                          ? 'bg-green-50 border-green-200 text-green-700'
                          : 'bg-muted/50 border-border text-muted-foreground'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{step.name}</span>
                      {step.completed && (
                        <div className="ml-auto w-2 h-2 bg-green-500 rounded-full"></div>
                      )}
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl">
                      Step {currentStep}: {designSteps[currentStep - 1].name}
                    </CardTitle>
                    <CardDescription>
                      {currentStep === 1 && "Choose the type of building you want to design"}
                      {currentStep === 2 && "Create and customize your floor plan"}
                      {currentStep === 3 && "Design your building in 3D"}
                      {currentStep === 4 && "Choose interior finishes and layouts"}
                      {currentStep === 5 && "Review and finalize your design"}
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={prevStep}
                      disabled={currentStep === 1}
                    >
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Previous
                    </Button>
                    <Button
                      size="sm"
                      onClick={nextStep}
                      disabled={currentStep === 5}
                    >
                      Next
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Tabs value={`step-${currentStep}`} className="w-full">
                  <TabsContent value="step-1" className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {buildingTypes.map((type) => {
                        const Icon = type.icon;
                        return (
                          <Card
                            key={type.id}
                            className={`cursor-pointer transition-all hover:shadow-lg ${
                              selectedBuildingType === type.id
                                ? 'ring-2 ring-primary bg-primary/5'
                                : 'hover:bg-muted/50'
                            }`}
                            onClick={() => setSelectedBuildingType(type.id)}
                          >
                            <CardHeader className="text-center">
                              <div className="mx-auto mb-2 relative">
                                <Icon className="w-12 h-12 text-primary" />
                                {type.popular && (
                                  <Badge className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs">
                                    Popular
                                  </Badge>
                                )}
                              </div>
                              <CardTitle className="text-lg">{type.name}</CardTitle>
                              <CardDescription>{type.description}</CardDescription>
                            </CardHeader>
                          </Card>
                        );
                      })}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="step-2" className="space-y-6">
                    <div className="bg-muted/30 rounded-lg p-8 text-center">
                      <Layers className="w-16 h-16 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-2">Floor Plan Designer</h3>
                      <p className="text-muted-foreground mb-4">
                        Interactive floor plan designer will be loaded here
                      </p>
                      <div className="bg-card border rounded-lg p-8 min-h-[400px] flex items-center justify-center">
                        <p className="text-muted-foreground">Floor plan designer interface coming soon...</p>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="step-3" className="space-y-6">
                    <div className="bg-muted/30 rounded-lg p-8 text-center">
                      <Ruler className="w-16 h-16 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-2">3D Building Designer</h3>
                      <p className="text-muted-foreground mb-4">
                        3D visualization and design tools inspired by Plan7Architect
                      </p>
                      <div className="bg-card border rounded-lg p-8 min-h-[400px] flex items-center justify-center">
                        <p className="text-muted-foreground">3D designer interface coming soon...</p>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="step-4" className="space-y-6">
                    <div className="bg-muted/30 rounded-lg p-8 text-center">
                      <Palette className="w-16 h-16 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-2">Interior Designer</h3>
                      <p className="text-muted-foreground mb-4">
                        Choose materials, colors, and interior layouts
                      </p>
                      <div className="bg-card border rounded-lg p-8 min-h-[400px] flex items-center justify-center">
                        <p className="text-muted-foreground">Interior designer interface coming soon...</p>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="step-5" className="space-y-6">
                    <div className="bg-muted/30 rounded-lg p-8 text-center">
                      <Eye className="w-16 h-16 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-2">Final Review</h3>
                      <p className="text-muted-foreground mb-4">
                        Review your complete building design before finalizing
                      </p>
                      <div className="bg-card border rounded-lg p-8 min-h-[400px] flex items-center justify-center">
                        <p className="text-muted-foreground">Final review interface coming soon...</p>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildingDesigner;