
import React from 'react';
import { getContactContent } from '@/utils/cms-loader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Linkedin, MapPin, Languages } from 'lucide-react';

const ContactSection: React.FC = () => {
  const { title, subtitle, email, phone, linkedin, city, ctaText, languages } = getContactContent();

  return (
    <section id="contact" className="section">
      <div className="container mx-auto">
        <h2 className="section-title reveal">{title}</h2>
        <p className="section-subtitle reveal">{subtitle}</p>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 reveal">
          <Card className="border-2 card-hover md:col-span-2">
            <CardHeader>
              <CardTitle className="text-2xl font-heading">Get in Touch</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-3" />
                <a 
                  href={`mailto:${email}`} 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {email}
                </a>
              </div>
              
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-primary mr-3" />
                <a 
                  href={`tel:${phone.replace(/\s/g, '')}`} 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {phone}
                </a>
              </div>
              
              <div className="flex items-center">
                <Linkedin className="h-5 w-5 text-primary mr-3" />
                <a 
                  href={linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  LinkedIn Profile
                </a>
              </div>
              
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-primary mr-3" />
                <span className="text-muted-foreground">{city}</span>
              </div>
              
              <div className="pt-4">
                <Button asChild className="w-full sm:w-auto">
                  <a href={`mailto:${email}?subject=Consulting%20Inquiry`}>
                    {ctaText}
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-2 card-hover">
            <CardHeader>
              <CardTitle className="text-2xl font-heading flex items-center">
                <Languages className="h-6 w-6 text-primary mr-2" />
                Languages
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {languages.map((lang, index) => (
                  <li key={index} className="flex justify-between items-center border-b pb-2">
                    <span className="font-medium">{lang.language}</span>
                    <span className="text-sm text-muted-foreground">{lang.level}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
