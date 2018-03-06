import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
  TouchableOpacity,
  FlatList,
  Text,
  Dimensions,
} from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { Container } from '../components/Container';
import MyCardDetail from '../components/MyCard/MyCardDetail';

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    paddingHorizontal: 16,
    marginVertical: 16,
    flexDirection: 'column',
    backgroundColor: 'transparent',
  },
  tabContainerStyle: {
    backgroundColor: '#000',
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
  
});

const CustomHeaderTitle = (props) => {
  return (
    <View>
      <Text style={ { fontSize: 32, color: '#FFFFFF', fontWeight: '700', marginBottom: 15 } }>My cards</Text>
    </View>
  );
}

class MyLoyaltyCardList extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;

    return {
      headerTitle: <CustomHeaderTitle/>,
      // headerLeft: (
      //   <TouchableOpacity>
      //     <MaterialIcons name="face" size={30} color="#C8CBFA" />
      //   </TouchableOpacity>
      // ),
      headerRight: (
        <TouchableOpacity>
          <MaterialIcons name="add" size={32} color="#FFFFFF" />
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
      columns: 1,
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
    const { contentContainer, actionButtonIcon, tabContainerStyle } = styles;
    // const separatorStyle = StyleSheet.flatten(styles.separatorStyle);

    const { cards, columns } = this.state;

    return (
      <Container backgroundColor={this.props.primaryColor}>
        <StatusBar backgroundColor="#9DA2FB" barStyle="light-content" />
        <View style={contentContainer}>
          <FlatList
            numColumns={columns}
            data={cards}
            renderItem={({ item }) => (
              <TouchableOpacity>
                <MyCardDetail card_detail={item} />
              </TouchableOpacity>
            )}
            keyExtractor={item => item.id}
          />
       
        </View>
      </Container>
    );
  }
}

export default MyLoyaltyCardList;
