import React, { useState } from "react";
import InterviewButtonComponent from "../components/Interview/InterviewButtonComponent";
import ContentComponent from "../components/Interview/InterviewContentComponent";
import InterviewPaginationComponent from "../components/Interview/InterviewPaginationComponent";
import { interviewData } from "../utils/InterviewApi";
import { commentData } from "../utils/CommentApi";
import Header from "../components/Common/Header";
import {useDispatch, useSelector} from "react-redux";
import {
    InterviewState,
    setActiveLanguage,
    setCurrentPage,
    setExampleComment,
    setLanguageComment, setLanguageContent, setShowContent
} from "../Redux/InterviewActionReducer";
import {RootState} from "../Redux/ReduxStore";

const Interview = () => {
    // @ts-ignore
    const dispatch = useDispatch();
    const interviewState = useSelector((state: RootState) => state.interview);
    const {
        languageContent,
        languageComment,
        exampleComment,
        activeLanguage,
        showContent,
        currentPage,
    } = interviewState;

    const handleButtonClick = async (language: string) => {
        try {
            const selectedLanguageData = interviewData[language];
            if (selectedLanguageData) {
                const { interview } = selectedLanguageData;
                const { comment } = commentData[language];
                const languageContents = interview.map((item) => item.interviewContent);
                const languageComments = comment.map((comment) => comment.comment);
                const exampleComment = interview.map((example) => example.exampleAnswer);
                dispatch(setExampleComment(exampleComment));
                dispatch(setLanguageContent(languageContents));
                dispatch(setLanguageComment(languageComments));
                dispatch(setShowContent(new Array(languageContents.length).fill(false)));
                dispatch(setActiveLanguage(language));
                dispatch(setCurrentPage(1)); // 언어 변경 시 현재 페이지를 1로 초기화
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const handleInterviewClick = (index: number) => {
        dispatch(setShowContent([...showContent.slice(0, index), !showContent[index], ...showContent.slice(index + 1)]));
    };


    const handlePageChange = (pageNumber: number) => {
        dispatch(setCurrentPage(pageNumber));
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

            <InterviewPaginationComponent
                currentPage={currentPage}
                handlePageChange={handlePageChange}
                activeLanguage={activeLanguage}
                languageContent={languageContent}
            />
        </>
    );
};

export default Interview;
