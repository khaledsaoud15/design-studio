import styled from "styled-components";
import frame from "../images/frame.jpeg";
import woman from "../images/woman.jpeg";
import writer from "../images/writer.jpeg";

const Container = styled.div`
  margin-top: 80px;
  height: 100%;
`;
const Heading = styled.div`
  margin-top: 80px;
  margin-left: 80px;
  margin-bottom: 20px;
  position: relative;
  ::after {
    content: "";
    width: 1px;
    height: 180px;
    position: absolute;
    left: 0;
    bottom: 100%;
    background: #3a3a3a;
    @media (max-width: 820px) {
      width: 0;
      height: 0;
    }
  }
  @media (max-width: 820px) {
    margin-left: 0;
    padding: 15px;
  }
`;
const Title = styled.h1`
  margin: 20px 0;
  font-size: 45px;
  color: #999;
  @media (max-width: 820px) {
    font-size: 30px;
  }
`;
const P = styled.p``;
const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  @media (max-width: 820px) {
    flex-direction: column;
    padding: 15px;
  }
`;
const Grid1 = styled.div`
  display: grid;
  grid-template-columns: 450px 350px;
  gap: 30px;
  align-items: center;
  position: relative;
  ::after {
    content: "";
    width: 20px;
    height: 50%;
    position: absolute;
    bottom: -5%;
    left: 0%;
    background: #0fedc5;
    @media (max-width: 820px) {
      width: 0;
      height: 0;
    }
  }
  ::before {
    content: "";
    width: 25%;
    height: 20px;
    position: absolute;
    bottom: -5%;
    left: 0%;
    background: #0fedc5;
    @media (max-width: 820px) {
      width: 0;
      height: 0;
    }
  }
  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`;
const Img = styled.img`
  width: 100%;
`;
const Desc = styled.div``;
const Desc2 = styled.div``;
const DescContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Header = styled.h1`
  color: #999;
`;
const D = styled.p`
  margin-top: 20px;
  line-height: 30px;
`;
const Grid2 = styled.div`
  display: grid;
  grid-template-columns: 300px;
  gap: 50px;
  position: relative;
  ::after {
    content: "";
    width: 20px;
    height: 25%;
    position: absolute;
    bottom: 0%;
    right: -5%;
    background: #0fedc5;
    @media (max-width: 820px) {
      width: 0;
      height: 0;
    }
  }
  ::before {
    content: "";
    width: 50%;
    height: 20px;
    position: absolute;
    bottom: 0%;
    right: -5%;
    background: #0fedc5;
    @media (max-width: 820px) {
      width: 0;
      height: 0;
    }
  }
`;
const ImgW = styled.img`
  width: 100%;
`;
const ImgR = styled.img`
  width: 100%;
`;

const About2 = () => {
  return (
    <Container>
      <Heading>
        <Title>WE HELP FIND WHAT MAKES YOUR AMAZING</Title>
        <P>
          We call this your meaningful difference and it’s the powerful idea
          behind your brand
        </P>
      </Heading>
      <Content>
        <Grid1>
          <Img src={woman} />
          <DescContainer>
            <Desc>
              <Header>OUR VISION</Header>
              <D>
                We believe that great design and effective communication are key
                ingredients for improving our lives and the world around us. It
                drives everything you do and say. It’s what separates you from
                everyone else and it’s why people want to work with – and for –
                you.
              </D>
            </Desc>
            <Desc2>
              <Header>OUR MISSION</Header>
              <D>
                We exist to serve organizations that are making a positive
                social impact. We bring teams of creative and technical talent
                together to help our clients achieve their mission.
              </D>
            </Desc2>
          </DescContainer>
        </Grid1>
        <Grid2>
          <ImgW src={frame} />
          <ImgR src={writer} />
        </Grid2>
      </Content>
    </Container>
  );
};

export default About2;
