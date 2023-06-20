import React, { useEffect, useRef } from 'react';

import { saveScrollPosition, restoreScrollPosition } from '../utils/scrollUtils';

import  Section1  from "../components/Home/HomeSection/Section1";
import  Section2  from "../components/Home/HomeSection/Section2";
import  Section3  from "../components/Home/HomeSection/Section3";
import  Section4  from "../components/Home/HomeSection/Section4";
import Header from "../components/Common/Header";

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
