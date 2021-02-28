import React from 'react';
import styled from 'styled-components';

import Footer from "./components/atoms/footer";
import image from './components/img/img.jpg';
import backimg from "./components/img/backgroundImg.png";

function App() {
  return (
    <div>
      <Body>
        <Main>
          <Title>
            Welcome to MyProfile Page
          </Title>
          <Text>
            <Heading>About</Heading>
            <Description>
              NicName:John.Smith<br></br>BirthDay:1999/6/28<br></br>Location：Tokyo<br></br>
                東京の専門学校に通っています。<br></br>現在就職活動中...
            </Description>
            <Heading>Study</Heading>
            <Description>
              JavaScript / HTML / CSS / React / Gatuby <br></br>
                Vue / Svelte / Linux / Docker / Vagurant
            </Description>
            <Heading>Pastime</Heading>
            <Description>
              アニメやゲームが好きです。バスケやスノースポーツもやります。専門学校に入学してからは筋トレも初めました。
            </Description>
          </Text>
          <Img src={image} />
        </Main>
        <Footer />
      </Body>
    </div>
  );
}

const Body = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1365px) and (min-height: 630px) {
    min-height: 100vh;
    justify-content: center;
  }

  @media (max-width: 414px) and (max-height: 896px){
    min-height: 100vh;
    background-image: url(${backimg});
  }
`;

const Main = styled.div`
  margin: 58px 60px 58px 60px;
  display: flex;
  justify-content: center;

  @media (min-width: 1365px) and (min-height: 630px) {
    margin: 200px 0px 0px 0px;
    justify-content: space-around;
  }

  @media (max-width: 414px) and (max-height: 896px){
    margin: 60px 30px 0px 30px;
    justify-content: space-between;
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  width: 560px;
`;

const Title = styled.p`
  margin: 60px 60px 0px 0px;
  font-family: "游ゴシック体", YuGothic, "游ゴシック", "Yu Gothic", sans-serif;
  font-size: 30px;
  writing-mode: vertical-rl;

  @media (max-width: 414px) and (max-height: 896px){
    margin: 60px 40px 0px 0px;
    font-size: 40px;
    margin-top: 80px;
  }
`;

const Heading = styled.p`
  margin: 12px 0px 12px 0px;
  font-family: "游ゴシック体", YuGothic, "游ゴシック", "Yu Gothic", sans-serif;
  font-weight: bold;
`;

const Description = styled.p`
  margin: 12px 0px 12px 0px;
  font-family: "游ゴシック体", YuGothic, "游ゴシック", "Yu Gothic", sans-serif;
  font-size: 21px;
  line-height: 30px;
`;


const Img = styled.img`
  height: 375px;
  width: 500px;
  @media (max-width: 414px) and (max-height: 896px){
    display: none;
  }
`;

export default App;
