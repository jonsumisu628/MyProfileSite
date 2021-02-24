import React from 'react';
import styled from 'styled-components';

import Footer from "./components/atoms/footer";
import title from "./components/img/text.png";
import image from './components/img/img.jpg';
import Text from "./components/atoms/text";

function App() {
  return (
    <div>
      <Body>
        <Main>
          <Title src={title} />
          <Text />
          <Img src={image} />
        </Main>
        <Footer />
      </Body>
    </div>
  );
}

const Body = styled.div`
  display:flex;
  flex-direction:column;
  min-height: 100%;
`;

const Main = styled.div`
  margin: 60px 60px 58px 60px;
  display: flex;
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
