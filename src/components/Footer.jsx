import { Facebook, Instagram, Twitter, YouTube } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 30vh;
  align-items: center;
  background: #1f1c1c;
  color: #fff;
`;
const Grid = styled.h1`
  font-size: 20px;
  font-weight: 400;
`;
const Icons = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
`;
const Icon = styled.div`
  margin: 0 15px;
  cursor: pointer;
`;

const Footer = () => {
  return (
    <Container>
      <Grid>©2018 DESIGNSTUDIO. ALL RIGHTS RESERVED</Grid>
      <Icons>
        <Icon>
          <Facebook />
        </Icon>
        <Icon>
          <Twitter />
        </Icon>
        <Icon>
          <Instagram />
        </Icon>
        <Icon>
          <YouTube />
        </Icon>
      </Icons>
    </Container>
  );
};

export default Footer;
