
import React from 'react';
import { getHobbyContent } from '@/utils/cms-loader';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Image, Dice6, ChartPie, Map } from 'lucide-react';

const HobbySection: React.FC = () => {
  const { title, subtitle, projectItems } = getHobbyContent();

  // Function to get the appropriate icon based on project title
  const getProjectIcon = (projectTitle: string) => {
    switch (projectTitle) {
      case 'Thumbmagic':
        return <Image className="h-6 w-6 text-primary" />;
      case 'PokerAce':
        return <Dice6 className="h-6 w-6 text-primary" />;
      case 'Finance Tracker':
        return <ChartPie className="h-6 w-6 text-primary" />;
      case 'Tourism Dashboard (Romania)':
        return <Map className="h-6 w-6 text-primary" />;
      default:
        return <ExternalLink className="h-6 w-6 text-primary" />;
    }
  };

  return (
    <section id="hobby" className="section bg-muted/30">
      <div className="container mx-auto">
        <h2 className="section-title reveal">{title}</h2>
        <p className="section-subtitle reveal">{subtitle}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {projectItems.map((project, index) => (
            <Card key={index} className="border-2 card-hover reveal">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  {getProjectIcon(project.title)}
                  <CardTitle className="text-xl font-heading">{project.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {project.description}
                </p>
              </CardContent>
              {project.url && (
                <CardFooter>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Visit Project
                    </a>
                  </Button>
                </CardFooter>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HobbySection;
