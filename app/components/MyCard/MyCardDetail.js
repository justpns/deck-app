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
    fontSize: 12,
    marginHorizontal: 8,
    marginVertical: 8,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  cardContentHolder: {
    flex: 1,
    flexDirection: 'column',
    width: ((screen.width - (26 * 2)) / 2),
    height: (120 / 2),
    marginTop: 120 / 2,
    paddingVertical: 10,
    paddingHorizontal: 15,
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});

const AIS_BG = 'http://www.ais.co.th/privilege/birthday/images/popup/poppic4.jpg';
const AIR_ASIA = 'https://dexticket.weebly.com/uploads/8/4/0/7/84076736/1514944-958880350796878-2325486274520736736-n_orig.png';
const ESSO_SMILE = 'https://d16a8a62orsrve.cloudfront.net/assets/img/card_tpl/1423810639sMVjA.png';
const THE_ONE = 'https://bookings.co.th/wp-content/uploads/Title-The-1-Card-660x330.jpg';
const PTT = 'https://promotions.co.th/wp-content/uploads/PTT-Blue-Card-Happiness-Dining-MK-Gold.jpg';
const TESCO = 'https://www.tescolotus.com/assets/service/img/landing/obj-04.png';

const MyCardDetail = (props) => {
  const { nameLabel, pointLabel } = styles;
  const backgroundImage = EStyleSheet.flatten(styles.backgroundImage);
  const cardContentHolder = EStyleSheet.flatten(styles.cardContentHolder);
  const wrapper = EStyleSheet.flatten(styles.wrapper);

  switch (props.card_detail.vendor) {
    case 'AIS':
      return (
      <MyCard>
        <View style={wrapper}>

          <Image
            style={backgroundImage}
            source={{ uri: AIS_BG }}
          />

          <View style={cardContentHolder}>
            {/* <Text style={nameLabel}>{`${props.card_detail.name}`}</Text> */}
            <View style={ { flex: 1, justifyContent: 'center', alignItems: 'center' } }>
              <Text style={pointLabel}>{`${props.card_detail.point.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} Points`}</Text>
            </View>
          </View>
        </View>

      </MyCard>
      );
    case 'AIR ASIA':
      return (
      <MyCard>
        <View style={wrapper}>

          <Image
            style={backgroundImage}
            source={{ uri: AIR_ASIA }}
          />

          <View style={cardContentHolder}>
            {/* <Text style={nameLabel}>{`${props.card_detail.name}`}</Text> */}
            <View style={ { flex: 1, justifyContent: 'center', alignItems: 'center' } }>
              <Text style={pointLabel}>{`${props.card_detail.point.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} Points`}</Text>
            </View>
          </View>
        </View>

      </MyCard>
      );
    case 'ESSO':
      return (
      <MyCard>
        <View style={wrapper}>

          <Image
            style={backgroundImage}
            source={{ uri: ESSO_SMILE }}
          />

          <View style={cardContentHolder}>
            {/* <Text style={nameLabel}>{`${props.card_detail.name}`}</Text> */}
            <View style={ { flex: 1, justifyContent: 'center', alignItems: 'center' } }>
              <Text style={pointLabel}>{`${props.card_detail.point.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} Points`}</Text>
            </View>
          </View>
        </View>

      </MyCard>
      );
    case 'CENTRAL':
      return (
      <MyCard>
        <View style={wrapper}>

          <Image
            style={backgroundImage}
            source={{ uri: THE_ONE }}
          />

          <View style={cardContentHolder}>
            {/* <Text style={nameLabel}>{`${props.card_detail.name}`}</Text> */}
            <View style={ { flex: 1, justifyContent: 'center', alignItems: 'center' } }>
              <Text style={pointLabel}>{`${props.card_detail.point.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} Points`}</Text>
            </View>
          </View>
        </View>

      </MyCard>
      );
    default:
      return null;
  }
};

export default MyCardDetail;
