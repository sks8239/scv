// QuizButton.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";

interface QuizButtonProps {
    children: React.ReactNode;
    onClick: () => void;
}

const StyledButton = styled.button<QuizButtonProps>`
  position: relative;
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f1f5f8;
  transition: background-color 0.3s ease-in-out;
  border: none;
  outline: none;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    background-color: darkgray;
  }

  .hover-content {
    position: absolute;
    bottom: -50px;
    left: 0;
    width: 100%;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  &:hover .hover-content {
    opacity: 1;
  }
`;

const QuizButton: React.FC = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/Quiz');
    };

    return (
        <StyledButton onClick={handleButtonClick}>
            퀴즈풀기
            <div className="hover-content">퀴즈를 풀고 개인 랭크를 획득하세요</div>
        </StyledButton>
    );
};

export default QuizButton;
