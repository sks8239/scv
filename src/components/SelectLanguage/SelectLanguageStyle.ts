import styled from "styled-components";

const SelectLanguageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.h2`
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  .selected {
    background-color: #a0a0a0;
    border: 2px solid #333333;
    outline: none;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-left: 20px;
  font-size: 16px;
  background-color: #e8e8e8;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #dcdcdc;
  }
`;

const StartButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #f1f5f8;
  border: none;
  border-radius: 10px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #d3d3d3;
  }
`;

export { SelectLanguageContainer, Heading,Button, ButtonContainer, StartButton };