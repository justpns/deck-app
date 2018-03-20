import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
  TouchableOpacity,
  FlatList,
  Text,
} from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ActionButton from 'react-native-action-button';

import { Container } from '../components/Container';
import MyCardDetail from '../components/MyCard/MyCardDetail';

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    paddingHorizontal: 16,
    flexDirection: 'column',
    backgroundColor: 'transparent',
  },
  tabContainerStyle: {
    backgroundColor: '#000',
  },
  actionButtonIcon: {
    fontSize: 22,
    height: 22,
    color: '#34385d',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  },
});

const CustomHeaderTitle = props => (
  <View>
    <Text style={{
      fontSize: 32, color: '#e5d464', fontWeight: '700', marginBottom: 15,
    }}>My cards</Text>
  </View>
);

class MyLoyaltyCardList extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;

    return {
      headerTitle: <CustomHeaderTitle />,
      // headerLeft: (
      //   <TouchableOpacity>
      //     <MaterialIcons name="face" size={30} color="#C8CBFA" />
      //   </TouchableOpacity>
      // ),
      headerRight: (
        <TouchableOpacity>
          <MaterialIcons name="face" size={32} color="#e5d464" />
        </TouchableOpacity>
      ),
    };
  };

  static propTypes = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func,
    isFetching: PropTypes.bool,
    primaryColor: PropTypes.string,
    alertWithType: PropTypes.func,
  };

  constructor() {
    super();

    this.state = {
      columns: 2,
      selectedIndex: 0,
      cards: [
        {
          id: '1',
          name: 'AirAsia Big Card',
          img:
            'http://traveldailynews.asia/uploads/images/AirAsia-BIG_x589.jpg',
          point: '3000',
        },
        {
          id: '2',
          name: 'Tesco Club Card',
          img:
            'https://www.tescolotus.com/assets/theme2017/clubcard/img/point/points-03.jpg',
          point: '2500',
        },
        {
          id: '3',
          name: 'PTT Blue Card',
          img:
            'https://www.pttbluecard.com/Content/Themes/pttbluecard/img/about-apply.jpg',
          point: '500',
        },
      ],
    };
  }

  handleIndexChange = (index) => {
    this.setState({ selectedIndex: index });
  }

  render() {
    const { navigate } = this.props.navigation;
    const { contentContainer } = styles;
    // const separatorStyle = StyleSheet.flatten(styles.separatorStyle);

    const { cards, columns } = this.state;

    return (
      <Container backgroundColor={this.props.primaryColor}>
        <StatusBar backgroundColor="#34385d" barStyle="light-content" />
        <View style={contentContainer}>
          <FlatList
            numColumns={columns}
            data={cards}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={
                  () => navigate('LoyaltyCardDetail', { cardItem: item })
                }>
                <MyCardDetail card_detail={item} />
              </TouchableOpacity>
            )}
            keyExtractor={item => item.id}
          />

        </View>
        <ActionButton
          buttonColor="#e5d464"
          renderIcon={
            () => <MaterialIcons name="add-to-photos" style={styles.actionButtonIcon} />
          }>
        </ActionButton>
      </Container>
    );
  }
}

export default MyLoyaltyCardList;
