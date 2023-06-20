import LazyLoadedSection from "../LazyLoadedSection";
import {Section1Wrapper, Section2Wrapper} from "../HomeStyleComponent/SectionWrapper";
import {ButtonWrapper, DownloadButtonStyle} from "../HomeStyleComponent/ButtonWrapper";
import {Download} from "react-bootstrap-icons";
import WebButton from "../ButtonComponent/WebButton";
import React, {useRef} from "react";

const Section2 = () => {

    return(
        <>
            <LazyLoadedSection backgroundColor="white">
                <Section2Wrapper>

                    <div className="section2head">Study Code Voyage,<br/>다양한 언어를<br/>한번에</div>

                </Section2Wrapper>
            </LazyLoadedSection>
        </>
    )
}
export default Section2;