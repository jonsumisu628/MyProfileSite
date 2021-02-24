import React from 'react';
import styled from 'styled-components';

export default function MainText() {
    return (
        <Body>
            <Heading>About</Heading>
            <Text>
                NicName:John.Smith<br></br>BirthDay:1999/6/28<br></br>Location：Tokyo<br></br>
                東京の専門学校に通っています。<br></br>現在就職活動中...
            </Text>
            <Heading>Study</Heading>
            <Text>
                JavaScript / HTML / CSS / React / Gatuby <br></br>
                Vue / Svelte / Linux / Docker / Vagurant
            </Text>
            <Heading>Pastime</Heading>
            <Text>
                アニメやゲームが好きです。バスケやスノースポーツもやります。専門学校に入学してからは筋トレも初めました。
            </Text>
        </Body>
    );
}

const Body = styled.div`
  margin-right: 60px;
  width:550px;
`;

const Text = styled.p`
  font-family: "游ゴシック体", YuGothic, "游ゴシック", "Yu Gothic", sans-serif;
  font-size: 21px;
  line-height: 30px;
`;

const Heading = styled.p`
  font-family: "游ゴシック体", YuGothic, "游ゴシック", "Yu Gothic", sans-serif;
  font-weight: bold;
`;
