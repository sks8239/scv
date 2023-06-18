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

const StudyButton: React.FC = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/Study');
    };

    return (
        <StyledButton onClick={handleButtonClick}>공부하기</StyledButton>
    );
};

export default StudyButton;
