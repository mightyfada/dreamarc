import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { 
  Building, 
  Sparkles, 
  Zap, 
  Crown, 
  Check, 
  X,
  Wand2,
  Brain,
  Rocket,
  Shield,
  Clock,
  Users
} from 'lucide-react';

const Premium = () => {
  const [isYearly, setIsYearly] = useState(false);

  const features = [
    {
      name: 'AI-Powered Design Generation',
      free: false,
      premium: true,
      description: 'Generate complete building designs with AI'
    },
    {
      name: 'Basic Floor Plans',
      free: true,
      premium: true,
      description: 'Create simple floor plans manually'
    },
    {
      name: 'Advanced 3D Modeling',
      free: false,
      premium: true,
      description: 'Professional 3D modeling tools'
    },
    {
      name: 'Interior Design AI',
      free: false,
      premium: true,
      description: 'AI-powered interior design suggestions'
    },
    {
      name: 'Code & Permit Assistance',
      free: false,
      premium: true,
      description: 'Building code compliance checking'
    },
    {
      name: 'Unlimited Projects',
      free: false,
      premium: true,
      description: 'No limits on project count'
    },
    {
      name: 'Priority Support',
      free: false,
      premium: true,
      description: '24/7 premium customer support'
    },
    {
      name: 'Export to CAD',
      free: false,
      premium: true,
      description: 'Export designs to professional CAD formats'
    }
  ];

  const premiumBenefits = [
    {
      icon: Brain,
      title: 'AI Design Intelligence',
      description: 'Let AI create your entire building design based on your requirements and preferences'
    },
    {
      icon: Wand2,
      title: 'One-Click Generation',
      description: 'Generate complete architectural plans in minutes, not hours'
    },
    {
      icon: Rocket,
      title: 'Advanced Tools',
      description: 'Access professional-grade design and modeling tools'
    },
    {
      icon: Shield,
      title: 'Code Compliance',
      description: 'Ensure your designs meet local building codes and regulations'
    },
    {
      icon: Clock,
      title: 'Save Time',
      description: 'Reduce design time by 80% with AI-powered automation'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Share and collaborate with team members and clients'
    }
  ];

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
              <Link to="/designer">
                <Button variant="outline" size="sm">
                  Back to Designer
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="outline" size="sm">
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Crown className="w-16 h-16 text-primary" />
              <Sparkles className="w-6 h-6 text-yellow-500 absolute -top-1 -right-1" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Supercharge Your Building Design
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Let AI handle the heavy lifting while you focus on creativity. Generate complete building designs 
            in minutes with our premium AI-powered tools.
          </p>
          
          {/* Pricing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className={`text-sm font-medium ${!isYearly ? 'text-primary' : 'text-muted-foreground'}`}>
              Monthly
            </span>
            <Switch
              checked={isYearly}
              onCheckedChange={setIsYearly}
              aria-label="Toggle yearly billing"
            />
            <span className={`text-sm font-medium ${isYearly ? 'text-primary' : 'text-muted-foreground'}`}>
              Yearly
            </span>
            {isYearly && (
              <Badge variant="secondary" className="ml-2">
                Save 20%
              </Badge>
            )}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Free Plan */}
          <Card className="relative">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Free Plan</CardTitle>
              <CardDescription>Perfect for getting started</CardDescription>
              <div className="text-4xl font-bold text-primary mt-4">
                $0
                <span className="text-lg font-normal text-muted-foreground">/month</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Basic floor plan designer</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>3 projects maximum</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Community support</span>
                </li>
                <li className="flex items-center gap-3">
                  <X className="w-5 h-5 text-red-500" />
                  <span className="text-muted-foreground">No AI features</span>
                </li>
                <li className="flex items-center gap-3">
                  <X className="w-5 h-5 text-red-500" />
                  <span className="text-muted-foreground">No 3D modeling</span>
                </li>
              </ul>
              <Button className="w-full" variant="outline">
                Current Plan
              </Button>
            </CardContent>
          </Card>

          {/* Premium Plan */}
          <Card className="relative border-primary shadow-lg">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-primary text-primary-foreground px-4 py-1">
                <Sparkles className="w-4 h-4 mr-1" />
                Most Popular
              </Badge>
            </div>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Premium Plan</CardTitle>
              <CardDescription>Full AI-powered design suite</CardDescription>
              <div className="text-4xl font-bold text-primary mt-4">
                ${isYearly ? '79' : '99'}
                <span className="text-lg font-normal text-muted-foreground">/month</span>
              </div>
              {isYearly && (
                <p className="text-sm text-green-600 font-medium">
                  Save $240 per year
                </p>
              )}
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Everything in Free plan</span>
                </li>
                <li className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-primary" />
                  <span className="font-medium">AI-powered design generation</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Advanced 3D modeling tools</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Unlimited projects</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Priority support</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Export to CAD formats</span>
                </li>
              </ul>
              <Button className="w-full" variant="premium">
                <Sparkles className="w-4 h-4 mr-2" />
                Upgrade to Premium
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Premium Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Premium?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {premiumBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto mb-4 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                    <CardDescription>{benefit.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Feature Comparison */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Feature Comparison
          </h2>
          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-6 font-semibold">Feature</th>
                      <th className="text-center p-6 font-semibold">Free</th>
                      <th className="text-center p-6 font-semibold">Premium</th>
                    </tr>
                  </thead>
                  <tbody>
                    {features.map((feature, index) => (
                      <tr key={index} className="border-b last:border-b-0">
                        <td className="p-6">
                          <div>
                            <div className="font-medium">{feature.name}</div>
                            <div className="text-sm text-muted-foreground">{feature.description}</div>
                          </div>
                        </td>
                        <td className="p-6 text-center">
                          {feature.free ? (
                            <Check className="w-5 h-5 text-green-500 mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-red-500 mx-auto" />
                          )}
                        </td>
                        <td className="p-6 text-center">
                          {feature.premium ? (
                            <Check className="w-5 h-5 text-green-500 mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-red-500 mx-auto" />
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Transform Your Building Design Process?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of architects and designers who have revolutionized their workflow with AI-powered design tools.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="premium">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Start 7-Day Free Trial
                </Button>
                <Button size="lg" variant="outline">
                  Schedule a Demo
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Premium;