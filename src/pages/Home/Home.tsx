import React, { useEffect, useRef } from 'react';

import { saveScrollPosition, restoreScrollPosition } from '../../utils/scrollUtils';

import  Section1  from "./lazyloadHomeSection/HomeSection/Section1";
import  Section2  from "./lazyloadHomeSection/HomeSection/Section2";
import  Section3  from "./lazyloadHomeSection/HomeSection/Section3";
import  Section4  from "./lazyloadHomeSection/HomeSection/Section4";
import Header from "./Header";

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
