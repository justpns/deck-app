import React from 'react';
import { View, Dimensions } from 'react-native';
import { BoxShadow } from 'react-native-shadow';
import EStyleSheet from 'react-native-extended-stylesheet';

const screen = Dimensions.get('window');

const styles = EStyleSheet.create({
  cardContainer: {
    width: (screen.width - 10 * 5) / 2,
    height: 100,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    elevation: 1,
    paddingVertical: 15,
    marginHorizontal: 5,
    marginVertical: 5,
  },
});

const MyCard = (props) => {
  const { cardContainer } = styles;
  const shadowOpt = {
    width: 100,
    height: 100,
    color: '#000',
    border: 2,
    radius: 3,
    opacity: 0.2,
    x: 0,
    y: 3,
    style: { marginVertical: 5 },
  };
  return (
    <View style={cardContainer}>{props.children}</View>
  );
};

export default MyCard;
