import React from 'react';
import LottieView from 'lottie-react-native';

import loadAnimation from '../../assets/loading.json';

import { Container } from './styles';

export default function Load() {
  return (
    <Container >
      <LottieView 
        source={loadAnimation}
        autoPlay
        loop
      />
    </Container>
  )
}