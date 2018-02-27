import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { 
  StatusBar, 
  TouchableOpacity, 
} from 'react-native';

import {
  Content,
  Card,
  CardItem,
  Text,
  Body,
} from 'native-base';


import { Container } from '../components/Container';

class MyHistoryList extends Component {

  static propTypes = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func,
    isFetching: PropTypes.bool,
    primaryColor: PropTypes.string,
    alertWithType: PropTypes.func,
  };

  render() {
    return (
       <Container backgroundColor={this.props.primaryColor}>
        <StatusBar backgroundColor="#FFFFFF" barStyle="light-content" />
      </Container>
    );
  }
}

export default MyHistoryList;