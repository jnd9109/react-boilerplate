// @flow

import React from 'react';
import styled from 'styled-components';
import Lottie from 'react-lottie';
import * as loadingConf from '../../assets/loading.json';

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 500;
  background-color: rgba(0, 0, 0, 0.6);
  width: 100vw;
  height: 100vh;
`;

const LoadingContainer = styled.div`
  position: absolute;
  left: 50%;
  margin-left: -25px;
  top: 50%;
  margin-top: -25px;
  width: 50px;
  height: 50px;
  border-radius: 10px;
  background-color: white;
  padding: 12.5px;
`;

function Loading() {
  const loadingOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingConf.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Wrapper>
      <LoadingContainer>
        <div
          style={{
            width: 25,
            height: 25,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Lottie options={loadingOptions} width="auto" height="auto" />
        </div>
      </LoadingContainer>
    </Wrapper>
  );
}

export default Loading;
