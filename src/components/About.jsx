import styled from "styled-components";
import header from "../images/designHeader.jpeg";
import chinese from "../images/chinese-man.jpg";

const Container = styled.div`
  overflow: hidden;
`;
const Content = styled.div`
  position: relative;
  margin: 50px auto;
  width: 70%;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
 
  }
  @media (max-width: 767px) {
    flex-direction: column;
    width: 90%;
  }
`;
const Header = styled.h1`
  position: absolute;
  top: -10%;
  left: 0;
  font-size: 200px;
  z-index: -9999;
  color: #0fedc5;
  @media (max-width: 820px) {
    position: static;
    font-size: 35px;
    margin-top: 80px;
  }
`;
const Desc = styled.div`
  width: 50%;
  margin-left: auto;
  margin-top: auto;
  margin-bottom: 50px;
  margin-right: 20px;
  @media (max-width: 820px) {
    width: 100%;

    margin-top: 30px;
  }
`;
const LineOne = styled.p`
  margin-bottom: 30px;
  font-size: 30px;
  line-height: 50px;
  font-weight: 700;
  @media (max-width: 820px) {
    font-size: 30px;
  }
`;
const LineTwo = styled.p`
  line-height: 30px;
  font-style: italic;
`;
const ImgContainer = styled.div`
  width: 60%;
  position: relative;
  padding: 10px;
  @media (max-width: 820px) {
    display: grid;
    grid-template-columns: 1fr;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
  }
`;
const Img = styled.img`
  width: 100%;
  margin-left: 90px;
  @media (max-width: 820px) {
    width: 100%;
    margin-left: 0;
    margin-right: 50px;
  }
`;
const Craetive = styled.h1`
  position: relative;
  ::after {
    content: "";
    width: 20px;
    height: 150%;
    position: absolute;
    bottom: -40%;
    right: -20%;
    background: #0fedc5;
    @media (max-width: 820px) {
      with: 0;
      height: 0;
    }
  }
  ::before {
    content: "";
    width: 50%;
    height: 20px;
    position: absolute;
    bottom: -40%;
    right: -20%;
    background: #0fedc5;
    @media (max-width: 820px) {
      with: 0;
      height: 0;
    }
  }
  width: 100%;
  font-size: 90px;
  @media (max-width: 820px) {
    margin: 20px 0;
    font-size: 5rem;
  }
  @media (max-width: 480px) {
    font-size: 50px;
  }
`;

const Div = styled.div`
  position: absolute;
  top: 10%;
  right: -40%;
  @media (max-width: 820px) {
    position: static;
    grid-row: 1;
  }
`;

const BigContainer = styled.div`
  height: 100vh;
  width: 100%;
  background: #0fedc5;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 20px;
  align-items: center;
  margin-top: 80px;
  gap: 10px;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
    height: 100%;
  }
`;
const Left = styled.div`
  height: 40%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: auto;
  margin-top: 50px;
  opacity: 0.5;
`;
const Heading = styled.h1`
  margin-bottom: auto;
  margin-top: 50px;
  font-size: 40px;
  color: #000;
  @media (max-width: 820px) {
    font-size: 30px;
    width: 95%;
    margin-right: auto;
  }
`;
const SecondContent = styled.div`
  margin-bottom: auto;
  margin-top: 20px;
`;
const BigLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  @media (max-width: 820px) {
    gap: 20px;
    flex-direction: column;
    width: 90%;
  }
`;
const Big1 = styled.div``;
const D = styled.p`
  font-size: 20px;
  line-height: 30px;
`;
const H = styled.h1`
  font-size: 25px;
  margin: 20px 0;
`;
const Right = styled.div`
  width: 100%;
  @media (max-width: 820px) {
    margin-left: auto;
    margin-right: auto;
  }
`;
const ImgChinese = styled.img`
  margin-left: 0;
  height: 100vh;
  width: 100%;
  object-fit: cover;
  opacity: 0.5;
  @media (max-width: 820px) {
    width: 90%;
    height: 70vh;
    margin-left: auto;
    margin-top: 20px;
  }
`;

const About = () => {
  return (
    <Container>
      <Content>
        <Header>WE ARE</Header>
        <Desc>
          <LineOne>
            Hello, we are DesignStudio! We make a meaningful difference to the
            world's most loved brands.
          </LineOne>
          <LineTwo>
            We begin with ‘we know nothing’, and immerse ourselves in everything
            you do. We want to move in. Be part of your team.{" "}
          </LineTwo>
        </Desc>
      </Content>
      <ImgContainer>
        <Img src={header} />
        <Div>
          <Craetive>CREATIVE</Craetive>
        </Div>
      </ImgContainer>
      <BigContainer>
        <Left>
          <Heading>
            OUR WORK INCLUDES A PORTFOLIO OF INITIATIVES THAT WE HAVE DEVELOPED
            WITH OUR PARTNERS AND OVERSEE DIRECTLY
          </Heading>
          <SecondContent>
            <BigLeft>
              <Big1>
                <H>SERVICE DESIGN</H>
                <D>
                  Our goal for service design is simple: we aim to make public
                  services as effective and accessible as possible for our
                  clients. For a program, product, policy or service to be
                  effective, many factors come into play
                </D>
              </Big1>
              <Big1>
                <H>DIGITAL WORKS</H>
                <D>
                  The digital product team conducts user research, creates user
                  experiences, and works closely with internal and outside
                  technology teams to prototype, develop, and set ongoing
                  strategy.
                </D>
              </Big1>
            </BigLeft>
          </SecondContent>
        </Left>
        <Right>
          <ImgChinese src={chinese} />
        </Right>
      </BigContainer>
    </Container>
  );
};

export default About;
