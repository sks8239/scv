import React, { useEffect, useRef } from 'react';
import LazyLoadedSection from './LazyLoadedSection';
import { Section1Wrapper, Section2Wrapper, Section3Wrapper, Section4Wrapper } from './HomeStyleComponent/SectionWrapper';
import { WebButtonStyle, ButtonWrapper, DownloadButtonStyle } from "./HomeStyleComponent/ButtonWrapper";
import { saveScrollPosition, restoreScrollPosition } from '../../../utils/scrollUtils';
import WebButton from "./ButtonComponent/WebButton";

const LazyLoadedSectionMain: React.FC = () => {
    const section2Ref = useRef<HTMLDivElement>(null);

    const scrollToSection = () => {
        const section2Element = document.getElementById("section2");
        if (section2Element) {
            section2Element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        restoreScrollPosition();

        const handleBeforeUnload = () => {
            saveScrollPosition();
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, []);

    return (
        <div>
            <LazyLoadedSection backgroundColor="#00cec9">
                <Section1Wrapper>
                    <h1>공부부터 면접까지<br/>SCV에서</h1>
                    <ButtonWrapper>
                        <DownloadButtonStyle>앱 다운로드</DownloadButtonStyle>
                        <WebButton>웹에서 이용하기</WebButton>
                    </ButtonWrapper>
                    <button className="scroll-to-section2" onClick={scrollToSection}>
                        아래로 이동
                    </button>
                </Section1Wrapper>
            </LazyLoadedSection>

            <div id="section2" ref={section2Ref} />
            <LazyLoadedSection backgroundColor="white">
                <Section2Wrapper>
                    <h1>Study Code Voyage<br/>SCV에서 다양한 언어를 공부하고 확인해보세요.</h1>

                </Section2Wrapper>
            </LazyLoadedSection>

            <LazyLoadedSection backgroundColor="gray">
                <Section3Wrapper>
                    <h1>학교 랭크를 통해 경쟁하고,<br/>개인 랭크를 통해 본인의 실력을 파악하세요.</h1>
                </Section3Wrapper>
            </LazyLoadedSection>

            <LazyLoadedSection backgroundColor="white">
                <Section4Wrapper>
                    <h1>면접 대비 질문에 답변을 달고<br/> 서로 의견을 주고 받으세요.</h1>
                </Section4Wrapper>
            </LazyLoadedSection>
        </div>
    );
};

export default LazyLoadedSectionMain;
