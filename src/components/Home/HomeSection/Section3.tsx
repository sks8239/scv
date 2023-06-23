import LazyLoadedSection from "../../../utils/LazyLoadedSection";
import {Section1Wrapper, Section2Wrapper, Section3Wrapper} from "../HomeStyleComponent/SectionWrapper";
import {ButtonWrapper, DownloadButtonStyle} from "../HomeStyleComponent/ButtonWrapper";
import {Download} from "react-bootstrap-icons";
import WebButton from "../ButtonComponent/WebButton";
import React, {useRef} from "react";

const Section3 = () => {

    return(
        <>
            <LazyLoadedSection backgroundColor="#F4F7FC">
                <Section3Wrapper>
                    <div className="section3head">퀴즈를 풀고 랭크를 획득하세요.<br/></div>
                    <div>개인 랭크를 통해 본인의 실력을 파악하세요.</div>
                    <div>학교끼리 경쟁하세요</div>
                </Section3Wrapper>
            </LazyLoadedSection>
        </>
    )
}
export default Section3;