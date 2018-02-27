import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import { Image } from '@shoutem/ui';

import EStyleSheet from 'react-native-extended-stylesheet';

import MyCard from './MyCard';


const styles = EStyleSheet.create({
  pointLabel: {
    fontSize: 16,
    marginVertical: 8,
  },
});

const MyCardDetail = (props) => {
  const { pointLabel } = styles;

  return (
    <MyCard>
      <Image styleName="small-avatar" source={ { uri: props.card_detail.img } } />
      <Text style={pointLabel}>{`${props.card_detail.point} Points`}</Text>
    </MyCard>
  );
};

export default MyCardDetail;

