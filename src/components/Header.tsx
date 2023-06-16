import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  background-color: #f5f5f5;
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
  margin: 0;
  padding: 0;
`;

const Li = styled.li`
  margin-right: 10px;

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

const Header: React.FC = () => {
    return (
        <HeaderWrapper>
            <Nav>
                <Ul>
                    <Li>
                        <NavLink to="/">Home</NavLink>
                    </Li>
                    <Li>
                        <NavLink to="/section1">Section 1</NavLink>
                    </Li>
                    <Li>
                        <NavLink to="/section2">Section 2</NavLink>
                    </Li>
                    <Li>
                        <NavLink to="/section3">Section 3</NavLink>
                    </Li>
                    <Li>
                        <NavLink to="/section4">Section 4</NavLink>
                    </Li>
                    <Li>
                        <NavLink to="/section5">Section 5</NavLink>
                    </Li>
                </Ul>
                <LoginButton>Login</LoginButton>
            </Nav>
        </HeaderWrapper>
    );
};

export default Header;
