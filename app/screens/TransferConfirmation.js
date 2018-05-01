import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  Dimensions,
  AsyncStorage,
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

import { NavigationActions } from 'react-navigation';

import axios from 'axios';


import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { RaisedTextButton } from 'react-native-material-buttons';
import { Container } from '../components/Container';

const screen = Dimensions.get('window');
const IP = 'http://52.230.26.113:3333';
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

  constructor(){
    super();
    this.onRequestTransferPoint = this.onRequestTransferPoint.bind(this);
  }


  async onRequestTransferPoint(toPoint) {
    const { params } = this.props.navigation.state;
    AsyncStorage.getItem('user-citizen').then((value) => {
      this.setState({ userCitizenId: value, isFetching: true });


      console.log('From: '+params.transferResultObject[2]);
      console.log('To: '+params.transferResultObject[3]);
      console.log('From Point: '+params.transferResultObject[1]);
      console.log('To: '+ toPoint);
      console.log('User Id:' + value);

      const URL = `${IP}/transfer/point`;
      axios({
        method: 'post',
        url: URL,
        responseType: 'json',
        data: {
          userId: value.toString(),
          fromCardId: params.transferResultObject[2].toString(),
          fromPoint: params.transferResultObject[1].toString(),
          toCardId: params.transferResultObject[3].toString(),        
          toPoint: toPoint.toString(),
        },
      }).then((response) => {
        if (response.status === 200) {
          console.log(response);
          this.props.navigation.dispatch(
            NavigationActions.reset({
              key: null,
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'SignedIn' }),
              ]
            })
          );
        }
      });
    }).done();
  
  }

  render() {
    const { params } = this.props.navigation.state;
    const { navigate } = this.props.navigation;
    const contentContainer = StyleSheet.flatten(styles.contentContainer);
    const cardViewRow = StyleSheet.flatten(styles.cardViewRow);
    const cardViewRowItem = StyleSheet.flatten(styles.cardViewRowItem);
    const cardViewRowItemEnd = StyleSheet.flatten(styles.cardViewRowItemEnd);
    const cardViewHeader = StyleSheet.flatten(styles.cardViewHeader);

    let totalRecieve = 0;
    let rate = 0;

    rate = params.transferResultObject[0].toRate / params.transferResultObject[0].fromRate;
    totalRecieve = parseInt(params.transferResultObject[1]) * rate;

    return (
      <Container>
        <ScrollView style={contentContainer}>
          <Tile styleName="text-centric" style={{ marginBottom: 8, backgroundColor: 'transparent' }}>
            <Title styleName="sm-gutter-bottom">Confirm your Transference</Title>
          </Tile>
          <Row styleName="small" style={cardViewHeader}>
            <Text>TRANSFERENCE</Text>
            <Image
              styleName="small-avatar"
              source={{ uri: params.transferResultObject[0].fromVendorId.img }}
            />
            <MaterialIcons name="keyboard-arrow-right" size={20} style={{ marginRight: 12 }} />
            <Image
              styleName="small-avatar"
              source={{ uri: params.transferResultObject[0].toVendorId.img }}
            />
          </Row>
          {/* <Row style={cardViewRow}>
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
          </Row> */}
          <Row style={cardViewRow}>
            <View styleName="horizontal">
              <View styleName="vertical space-between" style={cardViewRowItem}>
              
                <Text style={{ marginTop: 5, fontSize: 24 }}><MaterialIcons name="loyalty" size={16} /> {params.transferResultObject[1]} </Text>
                <Title style={{ color: '#34385d', fontSize: 16 }}>You transfer</Title>
              </View>
              <View styleName="vertical space-between" style={cardViewRowItemEnd}>
              
                <Text style={{ marginTop: 5, fontSize: 24 }}><MaterialIcons name="loyalty" size={16} /> 
                  {totalRecieve} 
                </Text>
                <Title style={{ color: '#34385d', fontSize: 16 }}>You receive</Title>
              </View>
            </View>
          </Row>

        </ScrollView>
        <View style={{ flex: 0.08 }}>
          <RaisedTextButton style={{ flex: 1 }}
            rippleDuration={600}
            rippleOpacity={0.54}
            title='CONFIRM'
            color='#34385d'
            titleColor='white'
            onPress={ () => this.onRequestTransferPoint(totalRecieve)} />
        </View>
      </Container>
    );
  }
}

export default TransferConfirmation;
