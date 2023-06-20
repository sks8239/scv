import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {Question, setQuestions} from '../../Redux/actionReducer'; // 액션 생성 함수 import
import { useNavigate } from 'react-router-dom'; // useNavigate import
import { Button, SelectLanguageContainer, Heading, ButtonContainer, StartButton } from './SelectLanguageStyle';
import axios from "axios";

const SelectLanguageComponent: React.FC = () => {
    const dispatch = useDispatch();
    const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
    const navigate = useNavigate(); // useNavigate 훅 사용

    const handleLanguageSelect = (language: string) => {
        let updatedLanguages = [...selectedLanguages]; // 현재 선택된 언어 배열 복사

        if (updatedLanguages.length > 2) {
            alert('최대 3개의 언어를 선택할 수 있습니다.');
        } else {
            if (updatedLanguages.includes(language)) {
                updatedLanguages = updatedLanguages.filter((lang) => lang !== language);
            } else {
                updatedLanguages.push(language);
            }

            setSelectedLanguages(updatedLanguages);
        }
    };


    const handleSubmit = async () => {
        if (selectedLanguages.length === 0) {
            alert('적어도 한 가지 언어를 선택해야 합니다.'); // 알림 표시
        } else {
            try {
                console.log('선택된 언어:', selectedLanguages);
                console.log(selectedLanguages.includes('C언어') ? 'selected' : '')
                const response = await axios.get('/languages'); // 서버의 API 엔드포인트로 GET 요청
                const languageData: Record<string, Question> = response.data; // 서버에서 받은 언어 정보

                // 언어 데이터를 액션에 담아 dispatch
                const questions = Object.values(languageData); // 언어 데이터에서 문제들만 추출
                dispatch(setQuestions(questions)); // 문제 데이터를 액션의 payload로 설정하여 dispatch

                navigate('/quiz'); // '/quiz' 경로로 이동
            } catch (error) {
                console.error('서버 요청 실패:', error);
                // 에러 처리
            }
        }
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