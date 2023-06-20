import styled from "styled-components";

interface StyledButtonProps {
    selected: boolean;
}

const QuestionContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ChoicesContainer = styled.div`
  margin-top: 20px;
`;

const StyledButton = styled.button<StyledButtonProps>`
  background-color: ${(props) => (props.selected ? '#3f51b5' : 'white')};
  color: ${(props) => (props.selected ? 'white' : '#3f51b5')};
  border: 2px solid #3f51b5;
  border-radius: 5px;
  padding: 10px 20px;
  margin-right: 10px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #3f51b5;
    color: white;
  }
`;

const NextButton = styled.button`
  background-color: ${(props) => (props.disabled ? 'lightgray' : '#3f51b5')};
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  margin-top: 20px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => (props.disabled ? 'lightgray' : '#2c3e50')};
  }
`;

export { QuestionContainer, ChoicesContainer, NextButton, StyledButton };