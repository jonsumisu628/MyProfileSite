import React from 'react';
import { AiFillGithub } from "react-icons/ai";
import styled from 'styled-components';

export default function StickyFooter() {
    return (
        <Footer>
            <Icons>
                <a href="https://github.com/jonsumisu628" target="_blank" rel="noreferrer noopener">
                    <AiFillGithub size="40px" color="black" />
                </a>
            </Icons>
            {'Copyright © '}
            <p>john.smith</p>
            {new Date().getFullYear()}
        </Footer>
    );
}

const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #dcdcdc;

  // PC
  @media (min-width: 1365px) and (min-height: 630px) {
    margin-top:auto;
  }

  // iPad 横向き
  @media (max-width: 1204px) and (max-height: 768px){
    margin-top:auto;
  }

  // iPad 横向き
  @media (max-width: 768px) and (max-height: 1204px){
    margin-top:auto;
  }

  // iPhone
  @media (max-width: 414px) and (max-height: 896px){
    margin-top:auto;
  }
`;

const Icons = styled.div`
  &:hover {
        transform: scale(1.2,1.2);
        transition-duration: 0.5s;
    }
`;