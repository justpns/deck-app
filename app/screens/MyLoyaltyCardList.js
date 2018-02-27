import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { 
  StatusBar, 
  TouchableOpacity, 
} from 'react-native';

import {
  Content,
  Separator,
  Text, 
} from 'native-base';

import EStyleSheet from 'react-native-extended-stylesheet';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { Container } from '../components/Container';

const styles = EStyleSheet.create({
  contentContainer: {
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

  render() {
    const { contentContainer, separatorStyle, separatorLabel } = styles;
    return (
      <Container backgroundColor={this.props.primaryColor}>
        <StatusBar backgroundColor="#FFFFFF" barStyle="light-content" />
        <Content style={contentContainer}>
          <Separator style={separatorStyle}>
            <Text style={separatorLabel}>Available Cards</Text>
          </Separator>
        </Content>
      </Container>
    );
  }
}

export default MyLoyaltyCardList;
