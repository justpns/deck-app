import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { StatusBar, View, TouchableOpacity, FlatList } from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { Container } from '../components/Container';
import MyCardDetail from '../components/MyCard/MyCardDetail';

const styles = EStyleSheet.create({
  contentContainer: {
    paddingHorizontal: 15,
    flexDirection: 'column',
    backgroundColor: '$white',
  },
  separatorStyle: {
    backgroundColor: 'transparent',
  },
  separatorLabel: {
    fontWeight: '300',
    fontSize: 14,
    color: '#C0C0C0',
  },
});

class MyLoyaltyCardList extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;

    return {
      headerTitle: 'MY CARDS',
      headerLeft: (
        <TouchableOpacity>
          <MaterialIcons name="face" size={20} color="#C8CBFA" />
        </TouchableOpacity>
      ),
      headerRight: (
        <TouchableOpacity onPress={() => navigation.navigate('HistoryList')}>
          <MaterialIcons name="description" size={20} color="#C8CBFA" />
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
      cards: [
        {
          id: '1',
          img:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/AirAsia_New_Logo.svg/1200px-AirAsia_New_Logo.svg.png',
          point: '3000',
        },
        {
          id: '2',
          img:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/AirAsia_New_Logo.svg/1200px-AirAsia_New_Logo.svg.png',
          point: '3000',
        },
        {
          id: '3',
          img:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/AirAsia_New_Logo.svg/1200px-AirAsia_New_Logo.svg.png',
          point: '3000',
        },
        {
          id: '4',
          img:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/AirAsia_New_Logo.svg/1200px-AirAsia_New_Logo.svg.png',
          point: '3000',
        },
      ],
    };
  }

  render() {
    const { contentContainer } = styles;
    const { cards, columns } = this.state;
    return (
      <Container backgroundColor={this.props.primaryColor}>
        <StatusBar backgroundColor="#FFFFFF" barStyle="light-content" />
        <View style={contentContainer}>
          <FlatList
            numColumns={columns}
            data={cards}
            renderItem={({ item }) => <MyCardDetail card_detail={item} />}
            keyExtractor={item => item.id}
          />
        </View>
      </Container>
    );
  }
}

export default MyLoyaltyCardList;
