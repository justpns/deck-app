import React from 'react';
import { Text, Dimensions } from 'react-native';
import { View, Image } from '@shoutem/ui';

import EStyleSheet from 'react-native-extended-stylesheet';
import MyCard from './MyCard';

const screen = Dimensions.get('window');

const styles = EStyleSheet.create({
  wrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  nameLabel: {
    fontSize: 20,
    marginHorizontal: 8,
    marginVertical: 8,
  },
  pointLabel: {
    fontSize: 22,
    marginHorizontal: 8,
    marginVertical: 8,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    borderRadius: 16,
  },
  cardContentHolder: {
    flex: 1,
    flexDirection: 'column',
    width: (screen.width - (10 * 4)),
    height: (220 / 2),
    marginTop: 220 / 2,
    paddingVertical: 10,
    paddingHorizontal: 15,
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
});

const MyCardDetail = (props) => {
  const { nameLabel, pointLabel } = styles;
  const backgroundImage = EStyleSheet.flatten(styles.backgroundImage);
  const cardContentHolder = EStyleSheet.flatten(styles.cardContentHolder);
  const wrapper = EStyleSheet.flatten(styles.wrapper);
  return (
    <MyCard>
      <View style={wrapper}>
        <Image
          style={backgroundImage}
          source={{ uri: props.card_detail.img }}
        />
        <View style={cardContentHolder}>
          <Text style={nameLabel}>{`${props.card_detail.name}`}</Text>
          <View style={ { flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end' } }>
            <Text style={pointLabel}>{`${props.card_detail.point} Points`}</Text>
          </View>
        </View>
      </View>

    </MyCard>
  );
};

export default MyCardDetail;
