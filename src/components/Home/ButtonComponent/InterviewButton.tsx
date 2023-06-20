// QuizButton.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import {BoxContent} from "../../FunctionSelect/SelectPagesStyle";
import StyledButton from '../../FunctionSelect/StyledButton';

const InterViewButton: React.FC = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/Interview');
    };

    return (
        <StyledButton onClick={handleButtonClick}>
            면접준비
            <div className="hover-content">다양한 질문에 답하고<br/>의견을 공유해보세요</div>
        </StyledButton>
    );
};

export default InterViewButton;
