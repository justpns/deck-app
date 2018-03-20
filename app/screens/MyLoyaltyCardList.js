import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
  TouchableOpacity,
  FlatList,
  Text,
  Alert,
} from 'react-native';

import { MaterialIndicator  } from 'react-native-indicators';

import axios from 'axios';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ActionButton from 'react-native-action-button';

import { Container } from '../components/Container';
import { getUserCitizen } from '../auth/auth';
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

const IP = 'http://52.230.25.97:3333';

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
          <MaterialIcons name="add-to-photos" size={32} color="#e5d464" />
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

  constructor(props) {
    super(props);

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
      isFetching: false,
    };

    this.onRequestGetUserId = this.onRequestGetUserId.bind(this);
  }

  componentWillMount() {
    this.onRequestGetUserId();
  }

  async onRequestGetUserId() {
    const userCitizenId = getUserCitizen();
    this.setState({
      isFetching: true,
    });
    const URL = `${IP}/users/${userCitizenId}`;
    await axios({
      method: 'get',
      url: URL,
      responseType: 'json',
    }).then((response) => {
      if (response.status === 200) {
        this.onRequestGetUserCards(response.data);
      }
    });
  }

  async onRequestGetUserCards(userId) {
    const URL = `${IP}/cards/${userId}`;
    await axios({
      method: 'get',
      url: URL,
      responseType: 'json',
    }).then((response) => {
      if (response.status === 200) {
        this.setState({
          cards: response.data,
          isFetching: false,
        });
      }
    });
  }

  render() {
    const { navigate } = this.props.navigation;
    const { contentContainer } = styles;
    // const separatorStyle = StyleSheet.flatten(styles.separatorStyle);

    const { cards, columns, isFetching } = this.state;

    if (isFetching) {
      return (
        <Container backgroundColor={this.props.primaryColor}>
          <StatusBar backgroundColor="#34385d" barStyle="light-content" />
          <View style={{ flex: 0.65, justifyContent: 'center', alignItems: 'center' }}>
            <MaterialIndicator color='#e5d464' />
          </View>
        </Container>
      );
    }

    // if (cards.length === 0) {
    //   return (
    //     <Container backgroundColor={this.props.primaryColor}>
    //       <StatusBar backgroundColor="#34385d" barStyle="light-content" />
    //       <View style={{ flex: 0.65, justifyContent: 'center', alignItems: 'center' }}>
    //           <Text style={{ color: '#e5d464', fontSize: 16, opacity: 0.6 }}>
    //             You have no cards.
    //           </Text>
    //       </View>
    //     </Container>
    //   );
    // }

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
          {/* <ActionButton
            buttonColor="#e5d464"
            renderIcon={
              () => <MaterialIcons name="add-to-photos" style={styles.actionButtonIcon} />
            }>
          </ActionButton> */}
        </Container>
    );
  }
}

export default MyLoyaltyCardList;
