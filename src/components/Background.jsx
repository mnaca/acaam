import React from 'react';
import styled from 'styled-components';
import background from '../images/background.jpg';

const BackgroundCmp = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-image: url(${background});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  z-index: -1;
`;

export default function Background(props) {
  return <BackgroundCmp></BackgroundCmp>
}