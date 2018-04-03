import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  Dimensions,
  Alert,
  AsyncStorage,
  KeyboardAvoidingView 
} from 'react-native';

import {
  Row,
  View,
  Subtitle,
  Heading,
} from '@shoutem/ui';

import axios from 'axios';


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
    flex: 1,
    width: screen.width - 32,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 32,
    paddingBottom: 15,
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

const IP = 'http://52.230.25.97:3333';
class Transfer extends Component {
    static navigationOptions = ({ navigation }) => {
      const { params } = navigation.state;

      return {
        headerTitle: 'Transfer to',
      };
    };

    constructor() {
      super();

      this.onParamSetup = this.onParamSetup.bind(this);
      this.state = {
        transferValue: '0',
        isFetching: 'false',
        minimumTransferValue: undefined,
        maximumTransferValue: undefined,
        transferInformation: undefined,
        fromCardId: '',
        toCardId: '',
        fromPoint: undefined,
        userId: '',
        fromRate: undefined,
        toRate: undefined,
      };
    }

    componentWillMount(){
      // this.onRequestGetCardVendorPartnerInformation();
      this.onParamSetup();
    }

    async onParamSetup(){
      const { params } = this.props.navigation.state;

      this.setState({
        fromCardId: params.information[0],
        fromPoint: params.information[1],
        // transferValue: params.information[3].fromRate,
        toCardId: params.information[2],
        minimumTransferValue: params.information[3].fromRate,
        maximumTransferValue: params.information[1],
        fromRate: params.information[3].fromRate,
        toRate: params.information[3].toRate,
      });
    }

    

    render() {
      const { params } = this.props.navigation.state;
      const { navigate } = this.props.navigation;
      const { transferValue, minimumTransferValue, maximumTransferValue } = this.state;
      const cardViewRow = StyleSheet.flatten(styles.cardViewRow);
      const contentContainer = StyleSheet.flatten(styles.contentContainer);
      const cardViewRowItem = StyleSheet.flatten(styles.cardViewRowItem);
      const cardViewSpecifyAmount = StyleSheet.flatten(styles.cardViewSpecifyAmount);

      return (
            <Container>
       
                <ScrollView style={contentContainer}>
                <KeyboardAvoidingView style={{flex: 1}} behavior="padding"> 
                    <Row style={cardViewRow}>
                        <View styleName="vertical" style={cardViewRowItem}>
                            <Heading style={{ fontSize: 18 }}>{params.information[3].toVendorId.name}</Heading>
                           
                            <Subtitle style={{ color: '#34385d', fontSize: 14 }}>You transfer point to</Subtitle>
                        </View>
                    </Row>
                    <Row style={cardViewRow}>
                        <View styleName="vertical" style={cardViewRowItem}>
                            <Heading>{params.information[3].fromRate} : {params.information[3].toRate}</Heading>
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
                        editable={true}
                        enablesReturnKeyAutomatically={true}
                        clearTextOnFocus={true}
                        returnKeyType='done'
                        onChangeText={transferValue => this.setState({ transferValue })}
                    />
                    {/* <Slider
                        minimumTrackTintColor='#34385d'
                        value={parseInt(transferValue)}
                        step={params.information[3].fromRate}
                        minimumValue={minimumTransferValue}
                        maximumValue={parseInt(maximumTransferValue / params.information[3].fromRate) *params.information[3].fromRate}
                        thumbImage={thumbImg}
                        thumbStyle={customStyles9.thumb}
                        thumbTintColor='#34385d'
                        style={{ marginTop: 5 }}
                        onValueChange={transferValue => this.setState({ transferValue })}
                    /> */}

                    </View>

                                    <View style={{ flex: 0.20 }}>
                    <RaisedTextButton style={{ flex: 1, borderRadius: 8 }}
                    rippleDuration={600}
                    rippleOpacity={0.54}
                    title='REQUEST TO TRANSFER'
                    color='#34385d'
                    titleColor='white'
                    onPress={
                        () => {
                          let transferResultObject = [];
                          transferResultObject.push(params.information[3]);
                          transferResultObject.push(transferValue);
                          transferResultObject.push(params.information[0]);
                          transferResultObject.push(params.information[2]);
                          if(transferValue <  params.information[3].fromRate){
                            Alert.alert(`The minimum point is ${params.information[3].fromRate}`);
                          }else if(transferValue > params.information[1]){
                            Alert.alert(`Not enough point`);
                          }else{
                            navigate('TransferConfirmation', { transferResultObject: transferResultObject })
                          }                 
                        }
                    } />
                </View>
                    </KeyboardAvoidingView>
                </ScrollView>
             

           
            </Container>
      );
    }
}

export default Transfer;
