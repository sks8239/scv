import LazyLoadedSection from "../../../utils/LazyLoadedSection";
import {Section1Wrapper, Section2Wrapper, Section4Wrapper} from "../HomeStyleComponent/SectionWrapper";
import {ButtonWrapper, DownloadButtonStyle} from "../HomeStyleComponent/ButtonWrapper";
import {Download} from "react-bootstrap-icons";
import WebButton from "../ButtonComponent/WebButton";
import React, {useRef} from "react";

const Section4 = () => {

    return(
        <>
            <LazyLoadedSection backgroundColor="white">
                <Section4Wrapper>
                    <h1>면접 대비 질문에 답변을 달고<br/> 서로 의견을 주고 받으세요.</h1>
                </Section4Wrapper>
            </LazyLoadedSection>
        </>
    )
}
export default Section4;