import React from 'react';
import { useNavigate } from 'react-router-dom';
import StyledButton from './StyledButton';

const StudyButton: React.FC = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/Study');
    };

    return (
        <StyledButton onClick={handleButtonClick}>
            공부하기
            <div className="hover-content">다양한 언어를 공부해보세요</div>
        </StyledButton>
    );
};

export default StudyButton;
