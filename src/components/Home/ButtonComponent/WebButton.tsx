import React, {ReactNode} from 'react';
import { useNavigate } from 'react-router-dom';
import { WebButtonStyle } from "../HomeStyleComponent/ButtonWrapper";

interface WebButtonProps {
    children: ReactNode;
}

const WebButton: React.FC<WebButtonProps> = ({ children }) => {
    const navigate = useNavigate();

    const navigateToQuiz = () => {
        navigate('/FunctionSelectPage');
    };

    return (
        <WebButtonStyle onClick={navigateToQuiz}>
            {children}
        </WebButtonStyle>
    );
};

export default WebButton;
