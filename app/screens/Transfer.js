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
} from '@shoutem/ui';


import { TextField } from 'react-native-material-textfield';
import Slider from 'react-native-slider';
import { RaisedTextButton } from 'react-native-material-buttons';
import { Container } from '../components/Container';

const thumbImg = require('../img/thumb.png');

const screen = Dimensions.get('window');

const styles = StyleSheet.create({
  contentContainer: {
    flex: 0.90,
    marginBottom: 0,
    padding: 16,
    backgroundColor: '#eee',
  },
  cardViewRow: {
    width: screen.width - 32,
    height: 100,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 32,
    paddingVertical: 10,
    marginBottom: 10,
  },
  cardViewRowItem: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  cardViewSpecifyAmount: {
    width: screen.width - 32,
    marginBottom: 10,
    height: 220,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 32,
  },
  inputAmountContainer: {
    paddingBottom: 8,
    paddingLeft: 8,
  },
  inputAmountTitleText: {
    color: '#34385d',
  },
});

const customStyles9 = StyleSheet.create({
  thumb: {
    width: 30,
    height: 30,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
  },
});

class Transfer extends Component {
    static navigationOptions = ({ navigation }) => {
      const { params } = navigation.state;

      return {
        headerTitle: 'Specify your tranfer amount',
      };
    };

    constructor() {
      super();

      this.state = {
        transferValue: '1',
        minimumTransferValue: 1,
        maximumTransferValue: 100,
      };
    }

    render() {
      const { navigate } = this.props.navigation;
      const { transferValue, minimumTransferValue, maximumTransferValue } = this.state;
      const cardViewRow = StyleSheet.flatten(styles.cardViewRow);
      const contentContainer = StyleSheet.flatten(styles.contentContainer);
      const cardViewRowItem = StyleSheet.flatten(styles.cardViewRowItem);
      const cardViewSpecifyAmount = StyleSheet.flatten(styles.cardViewSpecifyAmount);

      return (
            <Container>
                <ScrollView style={contentContainer}>
                    <Row style={cardViewRow}>
                        <View styleName="vertical" style={cardViewRowItem}>
                            <Heading>AirAsia</Heading>
                            <Subtitle style={{ color: '#BFBFBF', fontSize: 14 }}>***** 1234 5678 9012</Subtitle>
                            <Subtitle style={{ color: '#34385d', fontSize: 15 }}>You transfer point to</Subtitle>
                        </View>
                    </Row>
                    <Row style={cardViewRow}>
                        <View styleName="vertical" style={cardViewRowItem}>
                            <Heading>2 : 1</Heading>
                            <Subtitle style={{ color: '#34385d', fontSize: 16 }}>With rates</Subtitle>
                        </View>
                    </Row>
                    <View style={cardViewSpecifyAmount}>
                    <TextField
                        inputContainerPadding={18}
                        inputContainerStyle={styles.inputAmountContainer}
                        label=''
                        title='You transfer amount'
                        titleFontSize={16}
                        fontSize={32}
                        titleTextStyle={styles.inputAmountTitleText}
                        value={transferValue.toString()}
                        multiline={false}
                        editable={false}
                        onChangeText={phone => this.setState({ phone })}
                    />
                    <Slider
                        minimumTrackTintColor='#34385d'
                        value={parseInt(transferValue)}
                        step={1}
                        minimumValue={minimumTransferValue}
                        maximumValue={maximumTransferValue}
                        thumbImage={thumbImg}
                        thumbStyle={customStyles9.thumb}
                        thumbTintColor='#34385d'
                        style={{ marginTop: 5 }}
                        onValueChange={transferValue => this.setState({ transferValue })}
                    />

                    </View>
                </ScrollView>
                <View style={{ flex: 0.10 }}>
                    <RaisedTextButton style={{ flex: 1 }}
                    rippleDuration={600}
                    rippleOpacity={0.54}
                    title='REQUEST TO TRANSFER'
                    color='#34385d'
                    titleColor='white'
                    onPress={
                        () => navigate('TransferConfirmation')
                    } />
                </View>
            </Container>
      );
    }
}

export default Transfer;
