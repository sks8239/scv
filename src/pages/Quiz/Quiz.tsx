import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../Redux/ReduxStore';
import { setAnswers, updateScore } from '../../Redux/actionReducer';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { QuestionContainer, ChoicesContainer, StyledButton, NextButton } from './QuizStyledComponent';

const QuizComponent: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const questions = useSelector((state: RootState) => state.quiz.questions);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedChoice, setSelectedChoice] = useState('');

    const handleChoiceSelect = (choice: string) => {
        setSelectedChoice(choice);
    };

    useEffect(() => {
        // 선택된 답이 있고 마지막 문제가 아닌 경우 다음 문제로 넘어감
        if (selectedChoice && currentQuestionIndex < questions.length - 1) {
            handleNextQuestion();
        }
    }, [selectedChoice, currentQuestionIndex]); // 답이나 문제번호가 변경될 때마다 실행

    const handleNextQuestion = async () => {
        dispatch(
            updateScore(selectedChoice === questions[currentQuestionIndex].correctAnswer ? 5 : 0)
        );
        setSelectedChoice('');
        setCurrentQuestionIndex(currentQuestionIndex + 1);
    };

    useEffect(() => {
        const sendScoreToServer = async () => {
            try {
                const score = useSelector((state: RootState) => state.quiz.score);
                // 서버에 id와 점수를 전송하는 POST 요청
                await axios.post('/score', { id: 'user_id', score });
                navigate('/result'); // 결과 페이지로 이동
            } catch (error) {
                console.error('서버 요청 실패:', error);
                // 에러 처리
            }
        };

        // 모든 문제를 푼 경우 결과 페이지로 이동
        if (currentQuestionIndex === questions.length) {
            sendScoreToServer();
        }
    }, [currentQuestionIndex]); // currentQuestionIndex가 변경될 때마다 실행

    return (
        <>
            {questions.length > 0 && currentQuestionIndex < questions.length && (
                <QuestionContainer>
                    <h2>{questions[currentQuestionIndex].question}</h2>
                    <ChoicesContainer>
                        {questions[currentQuestionIndex].choices.map((choice, index) => (
                            <StyledButton
                                key={index}
                                selected={selectedChoice === choice}
                                onClick={() => handleChoiceSelect(choice)}
                            >
                                {choice}
                            </StyledButton>
                        ))}
                    </ChoicesContainer>
                    <NextButton disabled={!selectedChoice} onClick={handleNextQuestion}>
                        다음 문제
                    </NextButton>
                </QuestionContainer>
            )}
        </>
    );
};

export default QuizComponent;
