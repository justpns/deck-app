import React from 'react';
import { Container } from 'native-base';
import EStyleSheet from 'react-native-extended-stylesheet';
import Navigator from './config/routes';


EStyleSheet.build({
  $primaryBlue: '#4F6D7A',
  $primaryOrange: '#D57A66',
  $primaryGreen: '#00BD9D',
  $primaryPurple: '#9DA2FB',
  $white: '#FFFFFF',
  $lightGray: '#F0F0F0',
  $border: '#E2E2E2',
  $inputText: '#797979',
  $darkText: '#343434',
});


export default () => (
  <Container>
    <Navigator onNavigationStateChange={null} />
  </Container>
);