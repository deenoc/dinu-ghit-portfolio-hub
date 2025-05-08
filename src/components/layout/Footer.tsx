
import React from 'react';
import { getNavigationContent, getContactContent, getSiteSettings } from '@/utils/cms-loader';
import { Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const { menuItems } = getNavigationContent();
  const contact = getContactContent();
  const settings = getSiteSettings();

  return (
    <footer className="bg-primary/10 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-heading font-bold mb-4">
              <span className="text-primary">Dinu</span> 
              <span className="text-accent">Ghit</span>
            </h3>
            <p className="text-muted-foreground mb-4">
              {settings.siteDescription}
            </p>
            <div className="flex space-x-4">
              <a 
                href={contact.linkedin} 
                className="text-primary hover:text-accent transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href={`mailto:${contact.email}`} 
                className="text-primary hover:text-accent transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-xl font-heading font-bold mb-4">Site Map</h3>
            <ul className="space-y-2">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.link} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-xl font-heading font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-primary" />
                <a 
                  href={`mailto:${contact.email}`}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {contact.email}
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-primary" />
                <a 
                  href={`tel:${contact.phone.replace(/\s/g, '')}`}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {contact.phone}
                </a>
              </li>
              <li className="flex items-center">
                <MapPin size={18} className="mr-2 text-primary" />
                <span className="text-muted-foreground">{contact.city}</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-6 text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} {contact.name || "Dinu Ghit"}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
