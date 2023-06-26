import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SignUpWrapper from "components/SignUp/SignUpStyledComponent";
import { RootState } from "Redux/ReduxStore";
import { ActionTypes, signUpUser } from "../../Redux/SignUpActionReducer";


const CodeAllSignUp = () => {
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");
  const [inputConPw, setInputConPw] = useState("");
  const [inputName, setInputName] = useState("");
  const [inputSchool, setInputSchool] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPhone, setInputPhone] = useState("");

  const dispatch = useDispatch();
  const isLoading = useSelector((state :RootState) => state.signUp.isLoading);
  const error = useSelector((state : RootState) => state.signUp.error);

  const handleInputChange = (e :any) => {
    const { name, value } = e.target;
    if (name === "id") {
      setInputId(value);
    } else if (name === "password") {
      setInputPw(value);
    } else if (name === "confirmPassword") {
      setInputConPw(value);
    } else if (name === "name") {
      setInputName(value);
    } else if (name === "school") {
      setInputSchool(value);
    } else if (name === "email") {
      setInputEmail(value);
    } else if (name === "phone") {
      setInputPhone(value);
    }
  };

  const handleSignUp = () => {
    const userData = {
      id: inputId,
      password: inputPw,
      confirmPassword: inputConPw,
      name: inputName,
      school: inputSchool,
      email: inputEmail,
      phone: inputPhone,
    };
    


    // dispatch(signUpUser(userData));
  };

  return (
    <SignUpWrapper>
      <div className="container">
        <div className="sign">
          <span>Sign Up</span>
        </div>
        <div className="id-container">
          <input
            className="input"
            placeholder="아이디"
            name="id"
            value={inputId}
            onChange={handleInputChange}
          />
          <div className="button-container">
            <button className="check_button">중복확인</button>
          </div>
        </div>
        <div className="hint">
          {/* Add validation message for ID field */}
        </div>
        <div className="item2">
          <input
            className="input"
            placeholder="패스워드"
            name="password"
            value={inputPw}
            onChange={handleInputChange}
          />
        </div>
        <div className="hint">
          {/* Add validation message for password field */}
        </div>
        <div className="item2">
          <input
            className="input"
            placeholder="패스워드 확인"
            name="confirmPassword"
            value={inputConPw}
            onChange={handleInputChange}
          />
        </div>
        <div className="hint">
          {/* Add validation message for confirm password field */}
        </div>
        <div className="item2">
          <input
            className="input"
            placeholder="이름"
            name="name"
            value={inputName}
            onChange={handleInputChange}
          />
        </div>
        <div className="hint">
          {/* Add validation message for name field */}
        </div>
        <div className="item2">
          <input
            className="input"
            placeholder="학교"
            name="school"
            value={inputSchool}
            onChange={handleInputChange}
          />
        </div>
        <div className="hint">
          {/* Add validation message for school field */}
        </div>
        <div className="item2">
          <input
            className="input"
            placeholder="이메일"
            name="email"
            value={inputEmail}
            onChange={handleInputChange}
          />
        </div>
        <div className="hint">
          {/* Add validation message for email field */}
        </div>
        <div className="item2">
          <input
            className="input"
            placeholder="전화번호"
            name="phone"
            value={inputPhone}
            onChange={handleInputChange}
          />
        </div>
        <div className="hint">
          {/* Add validation message for phone number field */}
        </div>
        <div className="item2">
          {isLoading ? (
            <button className="disable_button" disabled>
              회원가입 중...
            </button>
          ) : (
            <button className="enable_button" onClick={handleSignUp}>
              회원가입
            </button>
          )}
        </div>
        {error && <div className="error-message">{error}</div>}
        <div className="item2">
          <Link to="/Login">
            <button>로그인</button>
          </Link>
        </div>
      </div>
    </SignUpWrapper>
  );
};

export default CodeAllSignUp;
