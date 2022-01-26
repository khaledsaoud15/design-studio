import styled from "styled-components";
import work1 from "../images/work1.jpg";
import work2 from "../images/work2.jpeg";
import work3 from "../images/work3.jpg";
import work4 from "../images/work4.jpg";
import work5 from "../images/work5.jpg";
import work6 from "../images/work6.jpg";
import building from "../images/building.jpg";
import think from "../images/think.png";

const Container = styled.div`
  margin-top: 80px;
`;
const Header = styled.div`
  margin-left: 50px;
  @media (max-width: 820px) {
    margin-left: 10px;
  }
`;
const Title = styled.h1`
  font-size: 40px;
  color: #999;
`;
const Desc = styled.p`
  width: 50%;
  margin: 20px 0;
  @media (max-width: 820px) {
    width: 100%;
  }
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 400px);
  justify-content: center;
  gap: 20px;
  @media (max-width: 820px) {
    grid-template-columns: 400px;
  }
  position: relative;
  ::after {
    content: "";
    width: 20px;
    height: 30%;
    position: absolute;
    bottom: -20px;
    left: 35px;
    background: #0fedc5;
    @media (max-width: 820px) {
      with: 0;
      height: 0;
    }
  }
  ::before {
    content: "";
    width: 20%;
    height: 20px;
    position: absolute;
    bottom: -20px;
    left: 35px;
    background: #0fedc5;
    @media (max-width: 820px) {
      with: 0;
      height: 0;
    }
  }
`;
const Img = styled.img`
  width: 100%;
  height: 40vh;
  object-fit: cover;
  :nth-of-type(6) {
    grid-column: span 2;
    grid-row: 2 / span 2;
    height: 83vh;
    @media (max-width: 820px) {
      grid-column: span 1;
      grid-row: span 2;
    }
  }
  :nth-of-type(5) {
    grid-row: 2;
  }
  @media (max-width: 480px) {
    width: 90%;
    margin: 0 auto;
  }
`;
const BigContainer = styled.div`
  margin-top: 100px;
  display: grid;
  grid-template-columns: 500px 700px 500px;
  overflow: hidden;
  align-items: center;
  background: #0fedc5;
  height: 80vh;
  @media (max-width: 820px) {
    grid-template-columns: 1fr;
    height: 100%;
    gap: 20px;
  }
`;
const BGIMG = styled.img`
  width: 100%;
  height: 80vh;
  opacity: 0.8;
  object-fit: cover;
  :nth-of-type(2) {
    margin-left: 10px;
    @media (max-width: 820px) {
      margin-left: 0;
    }
  }
`;
const Content = styled.div`
  opacity: 0.8;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 10px;
`;
const Ctitle = styled.h1`
  font-size: 40px;
  color: #4d4d4d;
  @media (max-width: 820px) {
    font-size: 30px;
  }
`;
const SubHeader = styled.p`
  margin-top: 25px;
  font-size: 25px;
  font-weight: 700;
  @media (max-width: 820px) {
    font-size: 20px;
  }
`;
const P = styled.p`
  line-height: 30px;
  margin: 30px 0;
`;
const Button = styled.button`
  width: 30%;
  padding: 10px 15px;
  border: 1px solid #000;
  background: transparent;
  font-weight: 700;
  cursor: pointer;
  :hover {
    background: #4d4d4d;
    border: 1px solid #4d4d4d;
    color: #fff;
  }
`;

const How1 = () => {
  return (
    <Container>
      <Header>
        <Title>HOW WE WORK</Title>
        <Desc>
          We are a full-service digital creative agency with brick and mortar
          offices and plenty of in-house talent. This year we launched the
          DesignStudio Creative Network and now also offer email and portfolio
          hosting to freelance creatives all around the world.
        </Desc>
      </Header>
      <Grid>
        <Img src={work1} />
        <Img src={work2} />
        <Img src={work3} />
        <Img src={work4} />
        <Img src={work5} />
        <Img src={work6} />
      </Grid>
      <BigContainer>
        <BGIMG src={think} />
        <Content>
          <Ctitle>JOIN OUR CREATIVE NETWORK</Ctitle>
          <SubHeader>READY TO TAKE ON ANY CHALLENGE</SubHeader>
          <P>
            This is a premium network offered exclusively to creative
            freelancers who want to build a professional personal brand. Our
            goal is to help you to get exposure and grow your freelance career.
            We are a reliable and affordable digital creative agency. We have
            approximately 20-25 in-house employees along with our very own fully
            vetted creative freelancer network. We like to say that we have
            "talent on tap" and are ready to take on any challenge.
          </P>
          <Button>JOIN NOW</Button>
        </Content>
        <BGIMG src={building} />
      </BigContainer>
    </Container>
  );
};

export default How1;
