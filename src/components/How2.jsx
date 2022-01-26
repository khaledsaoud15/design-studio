import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  gap: 30px;
  margin-top: 90px;
  margin-bottom: 80px;
  padding: 0 10px;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`;
const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 300px);
  gap: 20px;
  align-items: center;
  justify-content: center;
  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`;
const Header = styled.h1`
  margin: auto;
  width: 80%;
  position: relative;
  ::after {
    content: "";
    width: 20px;
    height: 150%;
    position: absolute;
    top: -20%;
    left: -20%;
    background: #0fedc5;
    @media (max-width: 820px) {
      with: 0;
      height: 0;
    }
  }
  ::before {
    content: "";
    width: 60%;
    height: 20px;
    position: absolute;
    top: -40%;
    left: -20%;
    background: #0fedc5;
    @media (max-width: 820px) {
      with: 0;
      height: 0;
    }
  }
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 300px);
  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`;
const Desc = styled.p`
  margin-top: 50px;
  font-size: 20px;
  z-index: 99999;
  line-height: 30px;
  @media (max-width: 820px) {
    margin-top: 10px;
  }
`;
const Num = styled.p`
  position: absolute;
  font-size: 90px;
  z-index: -9999;
  color: #0fedc5;
  @media (max-width: 820px) {
    position: static;
  }
`;

const Img = styled.img`
  width: 100%;
  object-fit: cover;
`;

const How2 = () => {
  return (
    <Container>
      <Content>
        <Header>ABOUT THREE WAYS WE ROCK</Header>
        <Grid>
          <Num>1</Num>
          <Desc>
            <b>Transparent Rates and Simple Billing</b> - Our rates are
            surprisingly reasonable and our billing practices set a new standard
            for transparency in our industry.
          </Desc>
        </Grid>
        <Grid>
          <Num>2</Num>
          <Desc>
            <b>The Passion Shows</b> - We believe in enjoying the ride as much
            as the destination and breed a company culture that favors the bold.
            We hope it shows in our work. industry.
          </Desc>
        </Grid>
        <Grid>
          <Num>3</Num>
          <Desc>
            <b>We Answer Our Phones</b> -We aren’t the agency hiding behind
            emails. We partner with our clients and that means even answering
            calls on nights and weekends sometimes.
          </Desc>
        </Grid>
      </Content>
      <Img src="https://wallpapercave.com/wp/wp8561726.jpg" />
    </Container>
  );
};

export default How2;
