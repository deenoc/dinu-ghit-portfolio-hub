
import React from 'react';
import { getServicesContent } from '@/utils/cms-loader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LayoutDashboard, Calendar, Code, Users } from 'lucide-react';

const iconMap = {
  'layout-dashboard': LayoutDashboard,
  'calendar': Calendar,
  'code': Code,
  'users': Users,
};

const ServicesSection: React.FC = () => {
  const { title, subtitle, serviceItems } = getServicesContent();

  const getIcon = (iconName: string) => {
    const IconComponent = iconMap[iconName as keyof typeof iconMap] || LayoutDashboard;
    return <IconComponent className="h-10 w-10 text-primary" />;
  };

  return (
    <section id="services" className="section bg-muted/30">
      <div className="container mx-auto">
        <h2 className="section-title reveal">{title}</h2>
        <p className="section-subtitle reveal">{subtitle}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {serviceItems.map((service, index) => (
            <Card key={index} className="border-2 border-border hover:border-primary/20 transition-all duration-300 card-hover reveal">
              <CardHeader className="pb-2">
                <div className="mb-4">{getIcon(service.icon)}</div>
                <CardTitle className="text-2xl font-heading">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
