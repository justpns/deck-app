import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native';

import {
  Row,
  View,
  Subtitle,
  Heading,
  Image,
  Text,
  Title,
  Tile,
  Caption,
} from '@shoutem/ui';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { RaisedTextButton } from 'react-native-material-buttons';
import { Container } from '../components/Container';

const screen = Dimensions.get('window');

const styles = StyleSheet.create({
  contentContainer: {
    flex: 0.92,
    paddingTop: 16,
    marginBottom: 0,
    paddingHorizontal: 16,
    backgroundColor: '#F0F0F0',
    height: screen.height,
  },
  cardViewHeader: {
    width: screen.width - 32,
    paddingHorizontal: 32,
    paddingVertical: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
  cardViewRow: {
    width: screen.width - 32,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 32,
    paddingVertical: 16,
    marginBottom: 10,
  },
  cardViewRowItem: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  cardViewRowItemEnd: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
});

class TransferConfirmation extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;

    return {
      header: null,
    };
  };

  render() {
    const { navigate } = this.props.navigation;
    const contentContainer = StyleSheet.flatten(styles.contentContainer);
    const cardViewRow = StyleSheet.flatten(styles.cardViewRow);
    const cardViewRowItem = StyleSheet.flatten(styles.cardViewRowItem);
    const cardViewRowItemEnd = StyleSheet.flatten(styles.cardViewRowItemEnd);
    const cardViewHeader = StyleSheet.flatten(styles.cardViewHeader);

    return (
      <Container>
        <ScrollView style={contentContainer}>
          <Tile styleName="text-centric" style={{ marginBottom: 8, backgroundColor: 'transparent' }}>
            <Title styleName="sm-gutter-bottom">MIKE PATTON TEAMING WITH JOHN KAADA FOR COLLAB ALBUM BACTERIA CULT</Title>
            <Caption>Sophia Jackson        2 hours ago</Caption>
          </Tile>
          <Row styleName="small" style={cardViewHeader}>
            <Text>TRANSFER OPERATION</Text>
            <Image
              styleName="small-avatar"
              source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-9.png' }}
            />
            <MaterialIcons name="keyboard-arrow-right" size={20} style={{ marginRight: 12 }} />
            <Image
              styleName="small-avatar"
              source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-9.png' }}
            />
          </Row>
          <Row style={cardViewRow}>
            <View styleName="horizontal">
              <View styleName="vertical space-between" style={cardViewRowItem}>
                <Title>From</Title>
                <Text style={{ marginTop: 8 }}>AirAsia</Text>
                <Subtitle style={{ color: '#BFBFBF', fontSize: 14, marginTop: 5 }}>***** 1234 5678 9012</Subtitle>
              </View>
              <View styleName="vertical space-between" style={cardViewRowItemEnd}>
                <Title>To</Title>
                <Text style={{ marginTop: 8 }}>AirAsia</Text>
                <Subtitle style={{ color: '#BFBFBF', fontSize: 14, marginTop: 5 }}>***** 1234 5678 9012</Subtitle>
              </View>
            </View>
          </Row>
          <Row style={cardViewRow}>
            <View styleName="horizontal">
              <View styleName="vertical space-between" style={cardViewRowItem}>
                <Title>You transfer</Title>
                <Text style={{ marginTop: 5, fontSize: 24 }}><MaterialIcons name="loyalty" size={16} /> 750 </Text>

              </View>
              <View styleName="vertical space-between" style={cardViewRowItemEnd}>
                <Title>You receive</Title>
                <Text style={{ marginTop: 5, fontSize: 24 }}><MaterialIcons name="loyalty" size={16} /> 750 </Text>

              </View>
            </View>
          </Row>

        </ScrollView>
        <View style={{ flex: 0.08 }}>
          <RaisedTextButton style={{ flex: 1 }}
            rippleDuration={600}
            rippleOpacity={0.54}
            title='Continue'
            color='#34385d'
            titleColor='white'
            onPress={
              () => navigate('MyCard')
            } />
        </View>
      </Container>
    );
  }
}

export default TransferConfirmation;
