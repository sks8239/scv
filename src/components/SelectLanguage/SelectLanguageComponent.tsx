import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {Question, setQuestions} from '../../Redux/QuizActionReducer'; // 액션 생성 함수 import
import { useNavigate } from 'react-router-dom'; // useNavigate import
import { Button, SelectLanguageContainer, Heading, ButtonContainer, StartButton } from './SelectLanguageStyle';
import axios from "axios";
import {languageData} from '../../utils/Api'; // api.ts에서 가져온 데이터
import { resetScore } from '../../Redux/QuizActionReducer';


const SelectLanguageComponent: React.FC = () => {
    const dispatch = useDispatch();
    const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
    const navigate = useNavigate(); // useNavigate 훅 사용

    const handleLanguageSelect = (language: string) => {
        let updatedLanguages = [...selectedLanguages]; // 현재 선택된 언어 배열 복사

            if (updatedLanguages.includes(language)) {
                updatedLanguages = updatedLanguages.filter((lang) => lang !== language);
            } else {
                if (updatedLanguages.length > 2) {
                    alert('최대 3개의 언어를 선택할 수 있습니다.');
                }else {
                    updatedLanguages.push(language);
                }
            }
            setSelectedLanguages(updatedLanguages);
    };


    const handleSubmit = async () => {
        if (selectedLanguages.length === 0) {
            alert('적어도 한 가지 언어를 선택해야 합니다.'); // Display an alert
        } else {
            try {
                const questions: Question[] = [];
                dispatch(resetScore()); // 스코어 리셋

                const numQuestionsPerLanguage = Math.floor(20 / selectedLanguages.length);
                const remainingQuestions = 20 % selectedLanguages.length;

                selectedLanguages.forEach((language, index) => {
                    const languageQuestions = languageData[language]?.questions || [];
                    const shuffledQuestions = shuffleArray(languageQuestions); // 문제 배열을 랜덤하게 섞어줌

                    let selectedQuestions = shuffledQuestions.slice(0, numQuestionsPerLanguage);

                    // 마지막 언어일 때, 나머지 문제를 추가로 가져옴
                    if (index === selectedLanguages.length - 1 && remainingQuestions > 0) {
                        const remainingLanguageQuestions = shuffledQuestions.slice(numQuestionsPerLanguage, numQuestionsPerLanguage + remainingQuestions);
                        selectedQuestions.push(...remainingLanguageQuestions);
                    }

                    questions.push(...selectedQuestions);
                });

                dispatch(setQuestions(questions));
                navigate('/quiz');
            } catch (error) {
                console.error('서버 요청 실패:', error);
                // Handle the error
            }
        }
    };


// 배열을 랜덤하게 섞어주는 함수
    const shuffleArray = (array: any[]) => {
        const shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    };


    return (
        <SelectLanguageContainer>
            <Heading>언어 선택</Heading>
            <ButtonContainer>
                <Button
                    className={selectedLanguages.includes('C언어') ? 'selected' : ''}
                    onClick={() => handleLanguageSelect('C언어')}
                >
                    C언어
                </Button>
                <Button
                    className={selectedLanguages.includes('Node.js') ? 'selected' : ''}
                    onClick={() => handleLanguageSelect('Node.js')}
                >
                    Node.js
                </Button>
                <Button
                    className={selectedLanguages.includes('JavaScript') ? 'selected' : ''}
                    onClick={() => handleLanguageSelect('JavaScript')}
                >
                    JavaScript
                </Button>
                <Button
                    className={selectedLanguages.includes('React') ? 'selected' : ''}
                    onClick={() => handleLanguageSelect('React')}
                >
                    React
                </Button>
                <Button
                    className={selectedLanguages.includes('Java') ? 'selected' : ''}
                    onClick={() => handleLanguageSelect('Java')}
                >
                    Java
                </Button>
            </ButtonContainer>
            <StartButton onClick={handleSubmit}>시작하기</StartButton>
        </SelectLanguageContainer>
    );
};

export default SelectLanguageComponent;