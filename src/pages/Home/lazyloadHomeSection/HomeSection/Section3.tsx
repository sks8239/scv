import LazyLoadedSection from "../LazyLoadedSection";
import {Section1Wrapper, Section2Wrapper, Section3Wrapper} from "../HomeStyleComponent/SectionWrapper";
import {ButtonWrapper, DownloadButtonStyle} from "../HomeStyleComponent/ButtonWrapper";
import {Download} from "react-bootstrap-icons";
import WebButton from "../ButtonComponent/WebButton";
import React, {useRef} from "react";

const Section3 = () => {

    return(
        <>
            <LazyLoadedSection backgroundColor="#F9FAFB">
                <Section3Wrapper>
                    <div className="section3head">학교 랭크를 통해 경쟁하고,<br/>개인 랭크를 통해 본인의 실력을 파악하세요.</div>
                </Section3Wrapper>
            </LazyLoadedSection>
        </>
    )
}
export default Section3;