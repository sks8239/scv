import styled from "styled-components";

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const DownloadButtonStyle = styled.button`
  padding: 15px 50px;
  margin-right: 100px;
  background-color: rgba(0, 12, 30, 0.7);
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  
  &:hover{
    background-color: rgb(78,89,104);
  }
`;

const WebButtonStyle = styled.button`
  padding: 15px 50px;
  background-color: rgba(0, 12, 30, 0.7);
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;

  &:hover{
    background-color: rgb(78,89,104);
  }
`;

export {ButtonWrapper, WebButtonStyle, DownloadButtonStyle};