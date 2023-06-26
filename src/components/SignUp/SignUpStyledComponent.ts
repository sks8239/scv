import styled from "styled-components";
const SignUpWrapper = styled.div`
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
  }

  .left_arrow {
    /* 왼쪽 화살표 아이콘에 대한 스타일은 별도로 지정해주세요. */
  }

  .sign {
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 50px;
  }

  .id-container {
    display: flex;
    align-items: center;
    justify-content: space-between; /* 아이템 사이의 공간을 동일하게 분배합니다 */
    margin-left : 130px;
  }
  .input {
    width: 300px;
    height: 40px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
  }

  .hint {
    height: 20px;
  }

  .message {
    font-size: 14px;
    line-height: 20px;
  }

  .success {
    color: green;
  }

  .error {
    color: red;
  }


  .check_button {
    align-items: center;
    width: 110px;
    height: 40px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 15px;
    cursor: pointer;
    margin-left:20px;
  }

  .enable_button {
    width: 100px;
    height: 40px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
  }

  .disable_button {
    width: 100px;
    height: 40px;
    background-color: #ccc;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: not-allowed;
  }
`;

export default SignUpWrapper;
