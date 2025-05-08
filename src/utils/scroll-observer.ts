
type ObserverCallback = (entries: IntersectionObserverEntry[]) => void;

export const createScrollObserver = (callback: ObserverCallback): IntersectionObserver => {
  return new IntersectionObserver(callback, {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  });
};

export const initScrollAnimation = (): void => {
  if (typeof window === 'undefined') return;
  
  const observer = createScrollObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  });

  const elements = document.querySelectorAll('.reveal');
  elements.forEach(element => {
    observer.observe(element);
  });
};
