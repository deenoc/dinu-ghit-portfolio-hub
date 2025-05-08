
import React from 'react';
import { getSkillsContent } from '@/utils/cms-loader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const SkillsSection: React.FC = () => {
  const { title, subtitle, categories, certifications } = getSkillsContent();

  return (
    <section id="skills" className="section bg-muted/30">
      <div className="container mx-auto">
        <h2 className="section-title reveal">{title}</h2>
        <p className="section-subtitle reveal">{subtitle}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 reveal">
          {/* Skills Categories */}
          <div>
            <h3 className="text-2xl font-heading font-bold mb-6 text-center">Expertise Areas</h3>
            <div className="space-y-8">
              {categories.map((category, index) => (
                <Card key={index} className="border-2 card-hover">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl font-heading">{category.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="text-sm py-1 px-3">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-heading font-bold mb-6 text-center">Professional Certifications</h3>
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <div 
                  key={index} 
                  className="p-4 border-2 border-border rounded-lg hover:border-primary/20 transition-all duration-300 card-hover flex justify-between items-center"
                >
                  <div>
                    <h4 className="font-medium">{cert.name}</h4>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  </div>
                  <Badge variant="outline" className="text-primary border-primary">
                    {cert.year}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
