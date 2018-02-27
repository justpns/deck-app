import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Container } from "native-base";
import Navigator from './config/routes';
import { StyleSheet,View } from 'react-native';

EStyleSheet.build({
  $primaryBlue: '#4F6D7A',
  $primaryOrange: '#D57A66',
  $primaryGreen: '#00BD9D',
  $primaryPurple: '#9E768F',
  $white: '#FFFFFF',
  $lightGray: '#F0F0F0',
  $border: '#E2E2E2',
  $inputText: '#797979',
  $darkText: '#343434',
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default () => (
  <Container>
    <Navigator onNavigationStateChange={null} />
  </Container>
);
