import { useEffect, useRef } from 'react';

const useLazyLoad = (): React.RefObject<HTMLDivElement>[] => {
  const sectionRefs = useRef<React.RefObject<HTMLDivElement>[]>([]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const lazyLoad = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
          const sectionIndex = sectionRefs.current.findIndex((ref) => ref.current === entry.target);
          if (sectionIndex !== -1) {
            sectionRefs.current[sectionIndex].current?.classList.add('loaded');
          }
        }
      });
    };

    const observer = new IntersectionObserver(lazyLoad, options);

    sectionRefs.current.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return sectionRefs.current;
};

export default useLazyLoad;
