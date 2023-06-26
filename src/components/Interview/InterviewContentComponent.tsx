import React from "react";
import { InterviewWrapper } from "./InterviewStyledComponent";
import { CaretRightSquare, CaretDownSquare } from "react-bootstrap-icons";

interface ContentComponentProps {
    languageContent: string[];
    languageComment: string[][];
    exampleComment: string[];
    showContent: boolean[];
    currentPage: number;
    handleInterviewClick: (index: number) => void;
}

const ContentComponent: React.FC<ContentComponentProps> = ({
                                                               languageContent,
                                                               languageComment,
                                                               exampleComment,
                                                               showContent,
                                                               currentPage,
                                                               handleInterviewClick,
                                                           }) => {

    const getCurrentPageData = () => {
        const startIndex = (currentPage - 1) * 5;
        const endIndex = startIndex + 5;
        return languageContent.slice(startIndex, endIndex);
    };
    return (

            <InterviewWrapper>
                {languageContent &&
                    languageComment &&
                    getCurrentPageData().map((content, index) => (
                        <div key={index}>
                            <div className="interview-question">
                                <p>
                                    {index + 1 + (currentPage - 1) * 5}. {content}
                                </p>
                            </div>

                            <div
                                className={`answer-comments-container ${showContent[index + (currentPage - 1) * 5] ? "show" : ""
                                }`}
                            >
                                <button
                                    className="toggle-button"
                                    onClick={() => handleInterviewClick(index + (currentPage - 1) * 5)}
                                >
                                    {showContent[index + (currentPage - 1) * 5] ? (
                                        <CaretDownSquare />
                                    ) : (
                                        <CaretRightSquare />
                                    )}
                                </button>
                                {showContent[index + (currentPage - 1) * 5] &&
                                    exampleComment[index + (currentPage - 1) * 5] && (
                                        <p className="example-answer">{exampleComment[index + (currentPage - 1) * 5]}</p>
                                    )}
                                {showContent[index + (currentPage - 1) * 5] &&
                                    languageComment[index + (currentPage - 1) * 5].map((comment, commentIndex) => (
                                        <p key={commentIndex} className="comment">
                                            {comment}
                                        </p>
                                    ))}
                            </div>
                        </div>
                    ))}
            </InterviewWrapper>
    );
};

export default ContentComponent;
