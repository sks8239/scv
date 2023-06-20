import styled from "styled-components";

const StudyContainer = styled.div`
  text-align: center;
`;

const StudyTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const LanguageButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const LanguageButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #e8e8e8;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #dcdcdc;
  }

  &:active,
  &:focus {
    background-color: #a0a0a0;
    border: 2px solid #333333;
    outline: none;
  }
`;
export {StudyContainer,StudyTitle, LanguageButton, LanguageButtons};