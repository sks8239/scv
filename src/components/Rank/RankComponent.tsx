import React, { useState } from "react";
import { individualRank, schoolRank } from "../../utils/RankApi";
import SchoolRankView from "./SchoolRankViewComponent";
import IndividualRankView from "./IndividualRankViewComponent";
import Header from "../Common/Header";

const RankComponent: React.FC = () => {
    const [showIndividualRank, setShowIndividualRank] = useState(false);

    const handleShowIndividualRank = () => {
        setShowIndividualRank(true);
    };

    const handleShowSchoolRank = () => {
        setShowIndividualRank(false);
    };

    return (
        <>
            <Header/>
            <div>
                <button onClick={handleShowIndividualRank}>개인 랭크 보기</button>
                <button onClick={handleShowSchoolRank}>학교 랭크 보기</button>
            </div>

            {showIndividualRank ? (
                <IndividualRankView rankData={individualRank} />
            ) : (
                <SchoolRankView rankData={schoolRank} />
            )}
        </>
    );
};







export default RankComponent;
