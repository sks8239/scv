// QuizButton.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import {BoxContent} from "../../../SelectPages/SelectPagesStyle";

interface InterviewButtonProps {
    children: React.ReactNode;
    onClick: () => void;
}

const StyledButton = styled.button<InterviewButtonProps>`
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

const InterViewButton: React.FC = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/Interview');
    };

    return (
        <StyledButton onClick={handleButtonClick}>
            면접준비
            <div className="hover-content">다양한 면접 질문에 답하고 서로 의견을 공유해보세요</div>
        </StyledButton>
    );
};

export default InterViewButton;
