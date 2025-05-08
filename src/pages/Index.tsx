
import React, { useEffect } from 'react';
import { useToast } from "@/components/ui/use-toast";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import AboutSection from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import HobbySection from '@/components/sections/HobbySection';
import ContactSection from '@/components/sections/ContactSection';
import { getSiteSettings } from '@/utils/cms-loader';
import { initScrollAnimation } from '@/utils/scroll-observer';

const Index = () => {
  const { toast } = useToast();
  const settings = getSiteSettings();

  useEffect(() => {
    // Set page title
    document.title = settings.siteTitle;
    
    // Initialize scroll reveal animations
    initScrollAnimation();
    
    // Add identity widget initialization for Netlify CMS
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on("init", user => {
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/";
          });
        }
      });
    }
    
    // Show welcome toast 
    toast({
      title: "Welcome to Dinu Ghit's Portfolio",
      description: "Explore my services and expertise in project & program management",
      duration: 5000,
    });
  }, [toast, settings.siteTitle]);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-grow">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <SkillsSection />
        <TestimonialsSection />
        <HobbySection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
