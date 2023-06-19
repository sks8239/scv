import React from 'react';
import { BoxWrapper, BoxContent } from './SelectPagesStyle';
import Header from '../../components/Header';
import StudyButton from '../Home/lazyloadHomeSection/ButtonComponent/StudyButton';
import QuizButton from '../Home/lazyloadHomeSection/ButtonComponent/QuizButton';
import InterviewButton from '../Home/lazyloadHomeSection/ButtonComponent/InterviewButton';

const SelectPages: React.FC = () => {
    return (
        <div>
            <Header />
            <section>
                <h1>선택 페이지</h1>
                <BoxWrapper>
                <StudyButton/>
                <QuizButton/>
                <InterviewButton />
                </BoxWrapper>

            </section>
        </div>
    );
};

export default SelectPages;
