import React, { Component } from 'react';
import {
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native';

import {
  Tile,
  Title,
  Row,
  Image,
  View,
  Subtitle,
  Caption,
  Text,
  Heading,
  Divider,
} from '@shoutem/ui';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Container } from '../components/Container';

const screen = Dimensions.get('window');

const styles = StyleSheet.create({
  contentContainer: {
    flex: .35,
    marginBottom: 0,
    flexDirection: 'column',
    backgroundColor: '#FFF',
    height: screen.height,
  },
  cardViewRow: {
    backgroundColor: 'transparent',
    height: 100,
  },
});

class Transfer extends Component {
    static navigationOptions = ({ navigation }) => {
      const { params } = navigation.state;

      return {
        headerTitle: 'Specify your tranfer amount',
      };
    };

    render() {
      const cardViewRow = StyleSheet.flatten(styles.cardViewRow);
      const contentContainer = StyleSheet.flatten(styles.contentContainer);

      return (
            <Container>
                <View styleName="vertical" style={contentContainer}>
                    <Tile styleName="text-centric">
                        <Title styleName="sm-gutter-bottom">MIKE PATTON TEAMING WITH JOHN KAADA FOR COLLAB ALBUM BACTERIA CULT</Title>
                        <Caption>Sophia Jackson        2 hours ago</Caption>
                    </Tile>
                </View>
            </Container>
      );
    }
}

export default Transfer;
