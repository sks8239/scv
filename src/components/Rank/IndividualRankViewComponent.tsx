import React from "react";
import { ArrowUpCircle, ArrowDownCircle, DashCircle } from "react-bootstrap-icons";
import RankStyledComponent from "./RankStyledComponent";

interface IndividualRankData {
    score: number;
    rankChange: number;
    rank: string;
    averageScore: number;
    school: string;
}

interface IndividualRankViewProps {
    rankData: Record<string, IndividualRankData>;
}

const IndividualRankView: React.FC<IndividualRankViewProps> = ({ rankData }) => {
    return (
        <>
            <RankStyledComponent>
            <h2>개인 랭크</h2>
            <table className="rank-table">
                <thead>
                <tr>
                    <th>사용자</th>
                    <th>랭크 변화</th>
                    <th>점수</th>
                    <th>랭크</th>
                    <th>평균 점수</th>
                    <th>학교</th>
                </tr>
                </thead>
                <tbody>
                {Object.entries(rankData).map(([user, data], index) => (
                    <tr key={user} className={index % 2 === 0 ? "even-row" : "odd-row"}>
                        <td>{user}</td>
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
                        <td>{data.rank}</td>
                        <td>{data.averageScore}</td>
                        <td>{data.school}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            </RankStyledComponent>
        </>
    );
};

export default IndividualRankView;