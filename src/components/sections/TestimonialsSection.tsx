
import React from 'react';
import { getTestimonialsContent } from '@/utils/cms-loader';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Linkedin, Quote } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const TestimonialsSection: React.FC = () => {
  const { title, subtitle, testimonialItems } = getTestimonialsContent();

  return (
    <section id="testimonials" className="section bg-slate-50/50">
      <div className="container mx-auto">
        <h2 className="section-title reveal">{title}</h2>
        <p className="section-subtitle reveal">{subtitle}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {testimonialItems.map((item, index) => (
            <Card key={index} className="border-2 card-hover reveal flex flex-col h-full">
              <CardContent className="pt-6 flex-grow">
                <Quote className="h-10 w-10 text-primary/20 mb-4" />
                <p className="italic text-muted-foreground mb-6">"{item.quote}"</p>
              </CardContent>
              <CardFooter className="flex justify-between items-center border-t pt-4">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback className="bg-primary/10 text-primary">
                      {item.name.split(' ').map(part => part[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-muted-foreground">{item.role}</p>
                  </div>
                </div>
                {item.linkedin && (
                  <a 
                    href={item.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={`LinkedIn profile of ${item.name}`}
                    className="text-primary hover:text-accent transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
