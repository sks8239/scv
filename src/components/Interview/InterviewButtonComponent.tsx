import React from "react";
import { LanguageButton, LanguageButtons } from "../Study/StudyStyledComponent";
import {StudyTitle} from "../Study/StudyStyledComponent";

interface ButtonComponentProps {
    activeLanguage: string;
    handleButtonClick: (language: string) => void;
}

const InterviewButtonComponent: React.FC<ButtonComponentProps> = ({
                                                             activeLanguage,
                                                             handleButtonClick,
                                                         }) => {
    return (
        <>
            <StudyTitle>Interview</StudyTitle>
            <LanguageButtons>
                <LanguageButton
                    onClick={() => handleButtonClick("C언어")}
                    className={activeLanguage === "C언어" ? "active" : ""}
                >
                    C
                </LanguageButton>
                <LanguageButton
                    onClick={() => handleButtonClick("Node.js")}
                    className={activeLanguage === "Node.js" ? "active" : ""}
                >
                    Node.js
                </LanguageButton>
                <LanguageButton
                    onClick={() => handleButtonClick("JavaScript")}
                    className={activeLanguage === "JavaScript" ? "active" : ""}
                >
                    JavaScript
                </LanguageButton>
                <LanguageButton
                    onClick={() => handleButtonClick("React")}
                    className={activeLanguage === "React" ? "active" : ""}
                >
                    React
                </LanguageButton>
                <LanguageButton
                    onClick={() => handleButtonClick("Java")}
                    className={activeLanguage === "Java" ? "active" : ""}
                >
                    Java
                </LanguageButton>
            </LanguageButtons>
        </>
    );
};

export default InterviewButtonComponent;
