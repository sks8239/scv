// ResultStyledComponent.tsx
import styled from "styled-components";

const ResultStyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;

const ResultStyledBox = styled.div`
  background-color: #4A88E526;
  padding: 70px;
  border-radius: 8px;
  margin-bottom: 20px;
  text-align: center; 
`;

const ResultStyledButtons = styled.div`
  margin-top: 10px;

  button {
    margin-right: 10px;
    border-radius: 4px;
    padding: 8px 16px;
    background-color: #e2e2e2;
    border: none;
    cursor: pointer;
    
  }
`;

const ResultStyledSection = styled.section`
  margin-top: 20px;
  overflow-y: visible(default);  /* 항상 수직 스크롤바 표시 */
`;

const ResultStyledQuestionCard = styled.div`
  border-radius: 8px;
  border: 1px solid #ccc;
  padding: 16px;
  margin-bottom: 16px;
`;

export {
    ResultStyledContainer,
    ResultStyledSection,
    ResultStyledQuestionCard,
    ResultStyledButtons,
    ResultStyledBox,
};
