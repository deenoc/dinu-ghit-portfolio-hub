
import heroData from '../content/hero.json';
import servicesData from '../content/services.json';
import aboutData from '../content/about.json';
import skillsData from '../content/skills.json';
import testimonialsData from '../content/testimonials.json';
import hobbyData from '../content/hobby.json';
import contactData from '../content/contact.json';
import navigationData from '../content/navigation.json';
import settingsData from '../content/settings.json';

export const getHeroContent = () => {
  return heroData;
};

export const getServicesContent = () => {
  return servicesData;
};

export const getAboutContent = () => {
  return aboutData;
};

export const getSkillsContent = () => {
  return skillsData;
};

export const getTestimonialsContent = () => {
  return testimonialsData;
};

export const getHobbyContent = () => {
  return hobbyData;
};

export const getContactContent = () => {
  return contactData;
};

export const getNavigationContent = () => {
  return navigationData;
};

export const getSiteSettings = () => {
  return settingsData;
};
