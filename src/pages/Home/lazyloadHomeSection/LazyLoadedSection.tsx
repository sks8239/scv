import React, { ReactNode } from 'react';
import styled, { css, keyframes } from 'styled-components';

const fadeInAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const SectionWrapper = styled.div<{ backgroundColor: string }>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: 60vh;
  opacity: 0;
  visibility: hidden;
`;

const AnimatedSectionWrapper = styled(SectionWrapper)<{ loaded: boolean }>`
  ${({ loaded }) =>
    loaded &&
    css`
      opacity: 1;
      visibility: visible;
      animation: ${fadeInAnimation} 1s ease-in-out forwards;
      animation-delay: 0.5s;
    `}
`;

interface LazyLoadedSectionProps {
  children: ReactNode;
  backgroundColor: string;
}

const LazyLoadedSection: React.FC<LazyLoadedSectionProps> = ({ children,  backgroundColor }) => {
  const [loaded, setLoaded] = React.useState(false);

  const sectionRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setLoaded(true);
          observer.unobserve(entry.target);
        }
      });
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <AnimatedSectionWrapper loaded={loaded} backgroundColor={backgroundColor} ref={sectionRef}>
      {children}
    </AnimatedSectionWrapper>
  );
};

export default LazyLoadedSection;
