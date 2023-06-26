import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginWrapper from "./LoginStyledComponent";

const CodeAllLogin: React.FC = () => {
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "id") {
      setInputId(value);
    } else if (name === "password") {
      setInputPw(value);
    }
  };

  const handleLogin = () => {
    const userData = {
      id: inputId,
      password: inputPw,
    };

    // JSON 데이터를 서버로 전송
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        // 서버로부터 받은 응답 처리
        console.log(data);
      })
      .catch((error) => {
        // 에러 처리
        console.error(error);
      });
  };

  return (
    <LoginWrapper>
        <div className="Login">
            <span>Login</span>
          </div>
      <input type="text" name="id" value={inputId} onChange={handleInputChange} placeholder="아이디" />
      <input
        type="password"
        name="password"
        value={inputPw}
        onChange={handleInputChange}
        placeholder="패스워드"
      />
      <button onClick={handleLogin}>로그인</button>
      <Link to="/SignUp">
        <button>회원가입</button>
      </Link>
    </LoginWrapper>
  );
};
export default CodeAllLogin;
