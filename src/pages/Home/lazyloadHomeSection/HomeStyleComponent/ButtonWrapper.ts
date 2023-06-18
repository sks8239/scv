import styled from "styled-components";

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const DownloadButtonStyle = styled.button`
  padding: 10px 20px;
  margin-right: 10px;
  background-color: white;
  color: black;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
`;

const WebButtonStyle = styled.button`
  padding: 10px 20px;
  background-color: white;
  color: black;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
`;

export {ButtonWrapper, WebButtonStyle, DownloadButtonStyle};