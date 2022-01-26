import { Close, Menu } from "@material-ui/icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 80px;
  height: 100px;
  border-bottom: 1px solid #9e9e9e;
  @media (max-width: 768px) {
    padding: 0 40px;
  }
  z-index: 999999;
`;
const Logo = styled.h1`
  font-size: 35px;
  font-weight: 500;
  letter-spacing: 3px;
  @media (max-width: 480px) {
    font-size: 20px;
  }
`;
const Slide = styled.div``;
const Icon = styled.div`
  cursor: pointer;
`;
const Content = styled.div`
  position: absolute;
  top: 0;
  left: ${(props) => (props.slide ? "0" : "-100%")};
  height: 100vh;
  transition: left 1s ease;
  width: 300px;
  overflow: hidden;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #000;
  color: #fff;
  z-index: 999999;
  @media (max-width: 480px) {
    width: 200px;
  }
`;
const MenuLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  margin: 20px auto;
  font-size: 20px;
`;
const Out = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;

const Navbar = () => {
  const [slide, setSlide] = useState(false);
  return (
    <Nav>
      <Logo>DESIGN STUDIO</Logo>
      <Slide>
        <Icon onClick={() => setSlide(!slide)}>
          <Menu style={{ fontSize: "30px" }} />
        </Icon>
        <Content slide={slide}>
          <MenuLink to="/">Home</MenuLink>
          <MenuLink to="/about">About Us</MenuLink>
          <MenuLink to="/ourwork">Our Work</MenuLink>
          <Out onClick={() => setSlide(!slide)}>
            <Close style={{ fontSize: "30px" }} />
          </Out>
        </Content>
      </Slide>
    </Nav>
  );
};

export default Navbar;
