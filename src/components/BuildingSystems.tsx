import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Layers, Zap, Shield, Wrench } from 'lucide-react';

const BuildingSystems = () => {
  const systems = [
    {
      title: 'Standardized Components',
      description: 'Our building systems use standardized components that ensure quality, reduce waste, and speed up construction.',
      icon: Layers,
      benefits: ['Consistent quality', 'Reduced construction time', 'Cost-effective'],
    },
    {
      title: 'Easy Installation',
      description: 'Designed for simple assembly, our systems require minimal specialized tools and can be installed quickly.',
      icon: Wrench,
      benefits: ['Simple assembly process', 'Minimal tools required', 'Clear instructions'],
    },
    {
      title: 'Durable Materials',
      description: 'We use only the highest quality materials that are built to last and withstand harsh weather conditions.',
      icon: Shield,
      benefits: ['Weather resistant', 'Long-lasting', 'Low maintenance'],
    },
    {
      title: 'Energy Efficient',
      description: 'Our building systems are designed with energy efficiency in mind, helping you save on long-term costs.',
      icon: Zap,
      benefits: ['Superior insulation', 'Energy savings', 'Eco-friendly'],
    },
  ];

  return (
    <section id="systems" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Building Systems
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our innovative building systems simplify both planning and construction, making your building project efficient and hassle-free.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {systems.map((system, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-card">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-primary p-3 rounded-full">
                    <system.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-primary">{system.title}</CardTitle>
                  </div>
                </div>
                <CardDescription className="text-muted-foreground mt-4">
                  {system.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3">
                  {system.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-muted-foreground">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Start Building?
          </h3>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Let us help you turn your vision into reality with our proven building systems and expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl">
              Get Started Today
            </Button>
            <Button variant="outline" size="xl" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              Download Brochure
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildingSystems;