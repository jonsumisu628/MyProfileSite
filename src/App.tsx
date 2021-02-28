import React from 'react';
import styled from 'styled-components';

import Footer from "./components/atoms/footer";
import image from './components/img/img.jpg';

// iPhone Background Img
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
                Vue / Svelte / Linux / Docker / Vagrant
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

  // PC
  @media (min-width: 1365px) and (min-height: 630px) {
    min-height: 100vh;
    justify-content: center;
  }

    // iPad
  @media (max-width: 1204px) and (max-height: 768px){
      min-height: 100vh;
      justify-content: center;
  }

  // iPhone
  @media (max-width: 414px) and (max-height: 896px){
    min-height: 100vh;
    background-image: url(${backimg});
  }
`;

const Main = styled.div`
  margin: 58px 60px 58px 60px;
  display: flex;
  justify-content: center;

  // PC
  @media (min-width: 1365px) and (min-height: 630px) {
    margin: 200px 0px 0px 0px;
    justify-content: space-around;
  }

  // iPad
  @media (max-width: 1204px) and (max-height: 768px){
    margin: 40px auto 0px auto;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 900px;
  }

  //iPhone
  @media (max-width: 414px) and (max-height: 896px){
    margin: 60px 30px 0px 30px;
    justify-content: space-between;
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  width: 560px;

    // iPad
  @media (max-width: 1204px) and (max-height: 768px){
    width: 300px;
  }
`;

const Title = styled.p`
  margin: 60px 60px 0px 0px;
  font-family: "游ゴシック体", YuGothic, "游ゴシック", "Yu Gothic", sans-serif;
  font-size: 30px;
  writing-mode: vertical-rl;

  // iPad
  @media (max-width: 1204px) and (max-height: 768px){
    margin: 40px 60px 40px 0px;
    width: 800px;
    font-size: 40px;
    writing-mode: horizontal-tb;
  }

  // iPhone
  @media (max-width: 414px) and (max-height: 896px){
    margin: 60px 40px 0px 0px;
    font-size: 40px;
    margin-top: 80px;
    writing-mode: vertical-rl;
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

  // iPad
  @media (max-width: 1204px) and (max-height: 768px){
    margin-bottom: 40px;
    width: 630px;
  }
`;

const Img = styled.img`
  height: 375px;
  width: 500px;

  // iPad
  @media (max-width: 1204px) and (max-height: 768px){
    margin: 40px 0px 0px 0px;
    height: 325px;
    width: 450px;
  }

  // iPhone
  @media (max-width: 414px) and (max-height: 896px){
    display: none;
  }
`;

export default App;
