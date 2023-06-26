// SchoolRankViewComponent.tsx
import React from "react";
import RankStyledComponent from "./RankStyledComponent";
import { ArrowUpCircle, ArrowDownCircle, DashCircle } from "react-bootstrap-icons";

interface SchoolRankData {
    score: number;
    rankChange: number;
    averageScore: number;
    userNumber: number;
}

interface SchoolRankViewProps {
    rankData: Record<string, SchoolRankData>;
}

const SchoolRankView: React.FC<SchoolRankViewProps> = ({ rankData }) => {
    return (
        <>
            <RankStyledComponent>
            <h2>학교 랭크</h2>
            <table className="rank-table">
                <thead>
                <tr>
                    <th className="rank-table-header">학교</th>
                    <th className="rank-table-header">랭크 변화</th>
                    <th className="rank-table-header">점수</th>
                    <th className="rank-table-header">평균 점수</th>
                    <th className="rank-table-header">사용자 수</th>
                </tr>
                </thead>
                <tbody>
                {Object.entries(rankData).map(([school, data], index) => (
                    <tr key={school} className={index % 2 === 0 ? "even-row" : "odd-row"}>
                        <td>{school}</td>
                        <td>
                            {data.rankChange > 0 ? (
                                <ArrowUpCircle className="upRank" />
                            ) : data.rankChange < 0 ? (
                                <ArrowDownCircle className="downRank" />
                            ) : (
                                <DashCircle className="notChange" />
                            )}
                            {Math.abs(data.rankChange)}
                        </td>
                        <td>{data.score}</td>
                        <td>{data.averageScore}</td>
                        <td>{data.userNumber}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            </RankStyledComponent>
        </>
    );
};

export default SchoolRankView;