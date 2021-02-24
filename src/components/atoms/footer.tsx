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
`;

const Icons = styled.div`
  &:hover {
        transform: scale(1.2,1.2);
        transition-duration: 0.5s;
    }
`;