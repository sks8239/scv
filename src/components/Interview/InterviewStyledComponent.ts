import styled from "styled-components";

const InterviewWrapper = styled.div`
  .interview-question {
    position: relative;
    left:11%;
    border: 2px solid #000;
    padding: 20px;
    margin-bottom: 20px;
    font-weight: bold;
    margin-left: 20px;
    text-align: left;
    width: 50%;
  }

  .example-answer,
  .comment {
    position: relative;
    left:11%;
    display: none;
    margin-left: 20px;
    text-align: left;
    width: 50%;
  }

  .show .example-answer,
  .show .comment {
    display: block;
  }

  .toggle-button {
    position: relative;
    left:11%;
    top:-10px;
    border: none;
    background-color: transparent;
    color: #555;
    font-size: 14px;
    cursor: pointer;
    transition: color 0.3s ease;
    text-align: left;
    margin-left : 20px;
    margin-top :10px;
    margin-bottom: 10px;
  }


  .toggle-button:hover {
    color: #000;
  }


`;
const PaginationWrapper = styled.div`
  .pagination-container {
    display: flex;
    justify-content: center;
  }

  .pagination-item {
    padding: 5px 10px;
    border: 1px solid #ccc;
    background-color: #fff;
    color: white;
    cursor: pointer;
    margin-right: 5px;
    margin-bottom: 5px; /* 추가 */
  }


  .pagination-item.active {
    background-color: #3389FF;
    color: white;
  }

  .pagination-item:hover {
    background-color: #f5f5f5;
  }

  .pagination-container ul {
    display: flex;
    list-style-type: none;
    padding: 0;
    margin: 10px;
  }
  
  
`;
export { InterviewWrapper , PaginationWrapper};