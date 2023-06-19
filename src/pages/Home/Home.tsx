import React, { useEffect, useRef } from 'react';
import LazyLoadedSection from './lazyloadHomeSection/LazyLoadedSection';
import { Section1Wrapper, Section2Wrapper, Section3Wrapper, Section4Wrapper } from './lazyloadHomeSection/HomeStyleComponent/SectionWrapper';
import { ButtonWrapper, DownloadButtonStyle } from "./lazyloadHomeSection/HomeStyleComponent/ButtonWrapper";
import { saveScrollPosition, restoreScrollPosition } from '../../utils/scrollUtils';
import WebButton from "./lazyloadHomeSection/ButtonComponent/WebButton";
import { Download } from "react-bootstrap-icons";
import  Section1  from "./lazyloadHomeSection/HomeSection/Section1";
import  Section2  from "./lazyloadHomeSection/HomeSection/Section2";
import  Section3  from "./lazyloadHomeSection/HomeSection/Section3";
import  Section4  from "./lazyloadHomeSection/HomeSection/Section4";
import Header from "../../components/Header";
import HeaderWrapper from "./lazyloadHomeSection/HomeStyleComponent/HeaderWrapper";

const Home: React.FC = () => {


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
            <Header/>
                <Section1/>
                <Section2/>
                <Section3/>
                <Section4/>
        </div>
    );
};

export default Home;
