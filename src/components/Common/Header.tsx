import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  background-color: #f5f5f5;
  z-index: 100;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const Ul = styled.ul`
  display: flex;
  list-style: none;
  margin:0;
  padding: 0;
  flex-grow: 1;

  &:first-child {
    margin-right: auto;
  }

  &:last-child {
    margin-left: 10px;
    margin-right: 0;
  }
`;

const Li = styled.li`
  margin-right: 10% ;
  
  &:first-child {
    margin-right: 25%;
  }

  &:last-child {
    margin-right: 0;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-weight: bold;

  &:hover {
    color: #555;
  }
`;

const LoginButton = styled.button`
  background-color: transparent;
  border: none;
  color: #333;
  font-weight: bold;
  cursor: pointer;
  
  &:hover {
    color: #555;
  }
`;
const MyPageButton = styled.button`
  background-color: transparent;
  border: none;
  color: #333;
  font-weight: bold;
  cursor: pointer;
  
  &:hover {
    color: #555;
  }
`;

const Header: React.FC = () => {

    const navigate = useNavigate();

    const handleMypageClick = () => {
        navigate('/Mypage');
    };
    const handleLoginClick = () => {
        navigate("/LoginPage")
    }
    return (
        <HeaderWrapper>
            <Nav>
                <Ul>
                    <Li>
                        <NavLink to="/">logo</NavLink>
                    </Li>
                    <Li>
                        <NavLink to="/Study">공부하기</NavLink>
                    </Li>
                    <Li>
                        <NavLink to="/SelectLanguage">퀴즈풀기</NavLink>
                    </Li>
                    <Li>
                        <NavLink to="/Interview">면접준비</NavLink>
                    </Li>
                    <Li>
                        <NavLink to="/Ranking">랭킹보기</NavLink>
                    </Li>
                </Ul>
                <MyPageButton onClick={handleMypageClick}>Mypage</MyPageButton>
                <LoginButton onClick={handleLoginClick}>Login</LoginButton>
            </Nav>
        </HeaderWrapper>
    );
};

export default Header;
