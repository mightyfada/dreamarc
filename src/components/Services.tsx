import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Home, Car, Building, Warehouse, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import garageImage from '@/assets/garage-construction.jpg';
import cottageImage from '@/assets/cottage-construction.jpg';
import machineHallImage from '@/assets/machine-hall.jpg';

const Services = () => {
  const services = [
    {
      title: 'Garages',
      description: 'Custom-designed garages with our innovative building systems. Perfect for protecting your vehicles and providing extra storage space.',
      icon: Car,
      image: garageImage,
      features: ['Weather-resistant materials', 'Customizable sizes', 'Easy installation'],
    },
    {
      title: 'Cottages',
      description: 'Beautiful cottages and cabins for your perfect getaway. Built with sustainable materials and modern techniques.',
      icon: Home,
      image: cottageImage,
      features: ['Eco-friendly design', 'Energy efficient', 'Fully customizable'],
    },
    {
      title: 'Machine Halls',
      description: 'Large-scale industrial buildings designed for heavy machinery and equipment storage with optimal functionality.',
      icon: Warehouse,
      image: machineHallImage,
      features: ['Heavy-duty construction', 'Large span capabilities', 'Industrial-grade materials'],
    },
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We specialize in creating high-quality, customizable buildings using our innovative standardized building systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-card">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-primary/90 text-primary-foreground p-2 rounded-full">
                  <service.icon className="h-6 w-6" />
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-2xl text-primary">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button variant="outline" className="w-full group" asChild>
                  <Link to="/designer">
                    Start Building
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button variant="premium" size="xl" asChild>
            <Link to="/designer">
              Start Building Now
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;