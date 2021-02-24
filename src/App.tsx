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
        <Title src={title} />
        <Text />
        <Img src={image} />
      </Body>
      <Footer />
    </div>
  );
}

const Body = styled.div`
  display: grid;
  grid-template-rows: 40px 20px 20px 60px 438px;
  grid-template-columns: 60px 40px 100px 474px 40px 464px;
`;

const Title = styled.img`
  grid-row: 4/5;
  grid-column: 2/3;
`;

const Img = styled.img`
  grid-row: 3/4;
  grid-column: 6/7;
`;

export default App;
