import React from 'react';
import LazyLoadedSection from './LazyLoadedSection';

const LazyLoadedSectionMain: React.FC = () => {
  return (
    <div>
      <LazyLoadedSection backgroundColor="violet">
        <h1>섹션 1</h1>
        {/* 섹션 1의 내용 */}
        </LazyLoadedSection>

        <LazyLoadedSection backgroundColor="blue">
        <h1>섹션 2</h1>
        {/* 섹션 2의 내용 */}
        </LazyLoadedSection>

        <LazyLoadedSection backgroundColor="green">
        <h1>섹션 3</h1>
        {/* 섹션 3의 내용 */}
        </LazyLoadedSection>

        <LazyLoadedSection backgroundColor="yellow">
        <h1>섹션 4</h1>
        {/* 섹션 4의 내용 */}
        </LazyLoadedSection>

    </div>
  );
};

export default LazyLoadedSectionMain;
