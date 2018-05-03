import React from 'react';
import { View, Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const screen = Dimensions.get('window');

const styles = EStyleSheet.create({
  cardContainer: {
    flex: 1,
    width: ((screen.width - (26 * 2)) / 2),
    height: 120,
    elevation: 1,
    borderRadius: 10,
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
