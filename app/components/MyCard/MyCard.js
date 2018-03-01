import React from 'react';
import { View, Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const screen = Dimensions.get('window');

const styles = EStyleSheet.create({
  cardContainer: {
    flex: 1,
    width: (screen.width - (10 * 4)),
    height: 220,
    elevation: 1,
    borderRadius: 16,
    marginHorizontal: 5,
    marginVertical: 8,
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
