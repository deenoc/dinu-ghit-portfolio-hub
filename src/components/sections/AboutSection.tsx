
import React from 'react';
import { getAboutContent } from '@/utils/cms-loader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AboutSection: React.FC = () => {
  const { title, summary, strengths } = getAboutContent();

  return (
    <section id="about" className="section">
      <div className="container mx-auto">
        <h2 className="section-title reveal">{title}</h2>
        
        <div className="max-w-3xl mx-auto text-center mb-16 reveal">
          <p className="text-lg text-muted-foreground leading-relaxed">
            {summary}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal">
          {strengths.map((strength, index) => (
            <Card key={index} className="border-2 card-hover">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-heading">{strength.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {strength.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
