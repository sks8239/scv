import React, {SetStateAction, useState} from "react";
import axios from "axios";
import { StudyContainer,StudyTitle, LanguageButton, LanguageButtons } from "./StudyStyledComponent"

const Study = () => {
    const [languageContent, setLanguageContent] = useState("");
    const [activeLanguage, setActiveLanguage] = useState("");

    const handleButtonClick = async (language : SetStateAction<string>) => {
        try {
            // 서버에 선택한 언어 정보 전송
            await axios.post("/api/language", { language });

            // 서버로부터 해당 언어에 대한 내용 요청
            const response = await axios.get(`/api/language/${language}`);

            // 받아온 내용을 컴포넌트에 반영
            const content = response.data.content;
            setLanguageContent(content);

            // 선택된 언어 업데이트
            setActiveLanguage(language);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <StudyContainer>
            <StudyTitle>Study</StudyTitle>
            <LanguageButtons>
                <LanguageButton
                    onClick={() => handleButtonClick("C")}
                    className={activeLanguage === "C" ? "active" : ""}
                >
                    C언어
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
                    자바
                </LanguageButton>
            </LanguageButtons>
            {languageContent && <p>{languageContent}</p>}
        </StudyContainer>
    );
};

export default Study;