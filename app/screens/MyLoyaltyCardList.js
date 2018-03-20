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
  AsyncStorage,
} from 'react-native';

import { MaterialIndicator } from 'react-native-indicators';

import axios from 'axios';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ActionButton from 'react-native-action-button';

import { Container } from '../components/Container';
import { onSignOut } from '../auth/auth';

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
        <TouchableOpacity
          onPress={() => onSignOut().then(() => navigation.navigate('SignedOut'))}>
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
      cards: [],
      isFetching: false,
      userId: '',
      userCitizenId: '',
    };

    this.onRequestGetUserId = this.onRequestGetUserId.bind(this);
  }

  componentWillMount() {
    this.onRequestGetUserId();
  }

  // componentDidMount() {
  //   this.onRequestGetUserId();
  // }

  async onRequestGetUserId() {
    AsyncStorage.getItem('user-citizen').then((value) => {
      this.setState({ userCitizenId: value, isFetching: true });
      // Alert.alert(this.state.userCitizenId);
      const URL = `${IP}/users/${this.state.userCitizenId}`;
      // Alert.alert(URL);
      axios({
        method: 'get',
        url: URL,
      }).then((response) => {
        if (response.status === 200) {
          this.setState({
            userId: response.data,
          });
          // Alert.alert(response.data);
          this.onRequestGetUserCards(response.data);
        }
      });
    }).done();
  }

  async onRequestGetUserCards(userId) {
    const URL = `${IP}/cards/${userId}`;
    await axios({
      method: 'get',
      url: URL,
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

    const {
      cards, columns, isFetching, userId,
    } = this.state;

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
                    () => {
                      const paramsObj = [];
                      paramsObj.push(item);
                      paramsObj.push(userId);
                      navigate('LoyaltyCardDetail', { cardItem: paramsObj });
                    }
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
