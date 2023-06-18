import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";

const StyledButton = styled.button`
        position: relative;
        width: 100%;
        height: 150px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: lightgray;
        transition: background-color 0.3s ease-in-out;
        border: none;
        outline: none;
        font-size: 20px;
        cursor: pointer;

        &:hover {
            background-color: darkgray;
        }
    `;
const QuizButton: React.FC = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/Quiz');
    };

    return (
        <StyledButton onClick={handleButtonClick}>퀴즈풀기</StyledButton>
    );
};

export default QuizButton;
