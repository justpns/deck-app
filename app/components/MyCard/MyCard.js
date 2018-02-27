import React from 'react';
import { View, Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const screen = Dimensions.get('window');

const styles = EStyleSheet.create({
  cardContainer: {
    width: (screen.width - 10 * 5) / 2,
    height: 100,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    elevation: 1,
    paddingVertical: 15,
    marginHorizontal: 5,
    marginVertical: 5,
  },
});

const MyCard = (props) => {
  const { cardContainer } = styles;
  return (
    <View style={cardContainer}>
      {props.children}
    </View>
  );
};

export default MyCard;
