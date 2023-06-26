import React from "react";
import Pagination from "react-js-pagination";
import {PaginationWrapper} from "./InterviewStyledComponent";

interface PaginationComponentProps {
    currentPage: number;
    handlePageChange: (pageNumber: number) => void;
    activeLanguage : string;
    languageContent : string[];
}

const InterviewPaginationComponent: React.FC<PaginationComponentProps> = ({ currentPage,handlePageChange,activeLanguage,languageContent
                                                                 }) => {
    return (
                    <PaginationWrapper>
                {activeLanguage && (
                    <div className="pagination-container">
                        <Pagination
                            activePage={currentPage}
                            itemsCountPerPage={5}
                            totalItemsCount={languageContent.length}
                            pageRangeDisplayed={5}
                            onChange={handlePageChange}
                            itemClass="pagination-item"
                            activeClass="active"
                            prevPageText={"‹"}
                            nextPageText={"›"}
                        />
                    </div>
                )}
            </PaginationWrapper>
    );
};

export default InterviewPaginationComponent;
