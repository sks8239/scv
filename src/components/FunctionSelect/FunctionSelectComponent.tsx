import React from 'react';
import { BoxWrapper, BoxContent, GroupWrapper, ImageWrapper, ButtonWrapper } from './SelectPagesStyle';
import StudyButton from './StudyButton';
import QuizButton from './QuizButton';
import InterviewButton from '../Home/ButtonComponent/InterviewButton';
import studyImage from "../../resource/studyImage.png";
import quizImage from "../../resource/quizImage.png";
import interviewImage from "../../resource/interviewImage.png";

const FunctionSelectPage: React.FC = () => {
    return (
        <div>
            <section>
                <h1>선택 페이지</h1>
                <BoxWrapper>
                    <BoxContent>
                        <GroupWrapper>
                            <ImageWrapper>
                                <img src={studyImage} alt="Study Image" />
                                <div className="hover-content">
                                    C언어, Node.js, JavaScript, React, Java 등<br/>
                                    다양한 언어를<br/>
                                    학습해보세요.
                                </div>
                            </ImageWrapper>
                            <ButtonWrapper>
                                <StudyButton />
                            </ButtonWrapper>
                        </GroupWrapper>
                        <GroupWrapper>
                            <ImageWrapper>
                                <img src={quizImage} alt="Quiz Image" />
                                <div className="hover-content">
                                    퀴즈를 통해<br/> 실력을 파악하세요
                                </div>
                            </ImageWrapper>
                            <ButtonWrapper>
                                <QuizButton />
                            </ButtonWrapper>
                        </GroupWrapper>
                        <GroupWrapper>
                            <ImageWrapper>
                                <img src={interviewImage} alt="Interview Image" />
                                <div className="hover-content">
                                    다양한 면접 질문을 통해<br/> 면접을 대비해보세요
                                </div>
                            </ImageWrapper>
                            <ButtonWrapper>
                                <InterviewButton />
                            </ButtonWrapper>
                        </GroupWrapper>
                    </BoxContent>
                </BoxWrapper>
            </section>
        </div>
    );
};
export default FunctionSelectPage;