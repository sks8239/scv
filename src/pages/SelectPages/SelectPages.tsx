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
                    <BoxContent>
                        <div className="box">
                            <div className="hover-content">다양한 언어를 공부해보세요</div>
                            <StudyButton />
                        </div>
                    </BoxContent>
                    <BoxContent>
                        <div className="box">
                            <div className="hover-content">퀴즈를 풀고 개인 랭크를 획득하세요</div>
                            <QuizButton />
                        </div>
                    </BoxContent>
                    <BoxContent>
                        <div className="box">
                            <div className="hover-content">다양한 면접 질문에 답하고 서로 의견을 공유해보세요</div>
                            <InterviewButton />
                        </div>
                    </BoxContent>
                </BoxWrapper>
            </section>
        </div>
    );
};

export default SelectPages;
