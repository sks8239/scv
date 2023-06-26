import styled from "styled-components";

const RankStyledComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px;  

  .rank-table {
    width: 80%;
    border-collapse: collapse;
    border-spacing: 0;
    margin-bottom: 20px;
    text-align: center;
    margin-top : 30px;
  }

  .rank-table th {
    background-color: #3389FF;
    color: white;
    padding: 8px;
    text-align: center;
    font-weight: bold;
  }

  .rank-table td {
    padding: 8px;
  }

  .rank-table .even-row {
    background-color: #f5f5f5;
  }

  .rank-table .odd-row {
    background-color: #e8e8e8;
  }
`;

export default RankStyledComponent;
