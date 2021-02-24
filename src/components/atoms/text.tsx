import React from 'react';
import styled from 'styled-components';

export default function MainText() {
    return (
        <Text>
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
        </Text>
    );
}

const Text = styled.p`
  font-family: "游ゴシック体", YuGothic, "游ゴシック", "Yu Gothic", sans-serif;
  font-size: 18px;
  line-height: 30px;
  grid-row: 2/3;
  grid-column: 4/5;
`;

const Heading  =styled.p`
  font-family: "游ゴシック体", YuGothic, "游ゴシック", "Yu Gothic", sans-serif;
  font-weight: bold;
`;
