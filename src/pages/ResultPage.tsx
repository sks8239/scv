import React from "react";
// import ResultComponent from "../components/Result/ResultComponent";
import Header from "../components/Common/Header";
import TotalScoreComponent from "../components/Result/TotalScoreComponent";
import WholeQuestionComponent from "../components/Result/WholeQuestionComponent";
const ResultPage = () => {


    return (
        <>
            <Header/>
            <TotalScoreComponent/>
            <WholeQuestionComponent/>
        </>
    )
}
export default ResultPage;