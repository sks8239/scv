// TotalScoreComponent.tsx
import React from "react";
import {ResultStyledBox, ResultStyledButtons, ResultStyledContainer} from "./ResultStyledComponent";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/ReduxStore";
import { useNavigate } from "react-router-dom";

const TotalScoreComponent: React.FC = () => {
    const navigate = useNavigate();
    const score = useSelector((state: RootState) => state.quiz.score);

    const handleGoHome = () => {
        navigate("/");
    };

    const handleRestart = () => {
        navigate("/SelectLanguage");
    };

    return (
        <ResultStyledContainer>
        <ResultStyledBox>
            <h1>결과 페이지</h1>
            <h2>총점: {score}</h2>
            <ResultStyledButtons>
                <button onClick={handleGoHome}>홈으로</button>
                <button onClick={handleRestart}>다시하기</button>
            </ResultStyledButtons>
        </ResultStyledBox>
        </ResultStyledContainer>
    );
};

export default TotalScoreComponent;
