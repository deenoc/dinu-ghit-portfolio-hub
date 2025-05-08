
import React from 'react';
import { getHeroContent } from '@/utils/cms-loader';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  const { name, headline, summary, ctaPrimaryText, ctaPrimaryLink, ctaSecondaryText, ctaSecondaryLink } = getHeroContent();

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-20 pb-16 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <div className="reveal">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight">
              <span className="block">{name}</span>
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{headline}</span>
            </h1>
          </div>
          
          <div className="reveal">
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              {summary}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 reveal">
            <Button asChild size="lg" className="px-8 py-6 text-lg">
              <a href={ctaPrimaryLink}>{ctaPrimaryText}</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="px-8 py-6 text-lg">
              <a href={ctaSecondaryLink}>{ctaSecondaryText}</a>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#services" aria-label="Scroll down">
          <ArrowDown className="text-primary" size={32} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
