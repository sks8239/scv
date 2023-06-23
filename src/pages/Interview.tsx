import React, { useState } from "react";
import InterviewButtonComponent from "../components/Interview/InterviewButtonComponent";
import ContentComponent from "../components/Interview/InterviewContentComponent";
import PaginationComponent from "../components/Interview/PaginationComponent";
import { interviewData } from "../utils/InterviewApi";
import { commentData } from "../utils/CommentApi";
import Header from "../components/Common/Header";

const Interview = () => {
    const [languageContent, setLanguageContent] = useState<string[]>([]);
    const [languageComment, setLanguageComment] = useState<string[][]>([]);
    const [exampleComment, setExampleComment] = useState<string[]>([]);
    const [activeLanguage, setActiveLanguage] = useState("");
    const [showContent, setShowContent] = useState<boolean[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);

    const handleButtonClick = async (language: string) => {
        try {
            const selectedLanguageData = interviewData[language];
            if (selectedLanguageData) {
                const { interview } = selectedLanguageData;
                const { comment } = commentData[language];
                const languageContents = interview.map((item) => item.interviewContent);
                const languageComments = comment.map((comment) => comment.comment);
                const exampleComment = interview.map((example) => example.exampleAnswer);
                setExampleComment(exampleComment);
                setLanguageContent(languageContents);
                setLanguageComment(languageComments);
                setShowContent(new Array(languageContents.length).fill(false));
                setActiveLanguage(language);
                setCurrentPage(1); // 언어 변경 시 현재 페이지를 1로 초기화
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const handleInterviewClick = (index: number) => {
        const newShowContent = [...showContent];
        newShowContent[index] = !newShowContent[index];
        setShowContent(newShowContent);
    };

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };


    return (
        <>
            <Header/>
            <InterviewButtonComponent
                activeLanguage={activeLanguage}
                handleButtonClick={handleButtonClick}
            />

            <ContentComponent
                languageContent={languageContent}
                languageComment={languageComment}
                exampleComment={exampleComment}
                showContent={showContent}
                currentPage={currentPage}
                handleInterviewClick={handleInterviewClick}
            />

            <PaginationComponent
                currentPage={currentPage}
                handlePageChange={handlePageChange}
                activeLanguage={activeLanguage}
                languageContent={languageContent}
            />
        </>
    );
};

export default Interview;
