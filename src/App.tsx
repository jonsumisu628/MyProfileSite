import React from 'react';
import styled from 'styled-components';

import Footer from "./components/atoms/footer";
import title from "./components/img/text.png";
import image from './components/img/img.jpg';

function App() {
  return (
    <div>
      <Body>
        <Main>
          <Title src={title} />
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
      </Body>
      <Footer />
    </div>
  );
}

const Body = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  @media (min-height: 630px) {
    justify-content: center;
  }
`;

const Main = styled.div`
  margin: 58px 60px 58px 60px;
  display: flex;
  justify-content: center;
  @media (min-width: 933px) {
    justify-content: space-around;
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  width: 560px;
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

const Title = styled.img`
  margin: 20px 40px 0px 0px;
  height:420px;
  width:54px;
`;

const Img = styled.img`
  height: 375px;
  width: 500px;
`;

export default App;
