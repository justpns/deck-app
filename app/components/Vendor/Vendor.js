import React from 'react';
import { Dimensions } from 'react-native';
import {
    View,
  } from '@shoutem/ui';
import EStyleSheet from 'react-native-extended-stylesheet';

const screen = Dimensions.get('window');

const Vendor = (props) => {
  return (
    <View>
      {props.children}
    </View>
  );
};

export default Vendor;
