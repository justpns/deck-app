import React, { Component } from 'react';
import { ScrollView, StyleSheet, Dimensions, AsyncStorage, Alert } from 'react-native';

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
import { MaterialIndicator } from 'react-native-indicators';
import { RaisedTextButton } from 'react-native-material-buttons';
import { serviceUrl } from '../config/constants';
import { Container } from '../components/Container';

const screen = Dimensions.get('window');
const IP = 'http://52.230.26.113:3333';

const AIS_BG =
  'http://www.ais.co.th/privilege/birthday/images/popup/poppic4.jpg';
const AIR_ASIA =
  'https://dexticket.weebly.com/uploads/8/4/0/7/84076736/1514944-958880350796878-2325486274520736736-n_orig.png';
const ESSO_SMILE =
  'https://d16a8a62orsrve.cloudfront.net/assets/img/card_tpl/1423810639sMVjA.png';
const THE_ONE =
  'https://bookings.co.th/wp-content/uploads/Title-The-1-Card-660x330.jpg';
const PTT =
  'https://promotions.co.th/wp-content/uploads/PTT-Blue-Card-Happiness-Dining-MK-Gold.jpg';
const TESCO =
  'https://www.tescolotus.com/assets/service/img/landing/obj-04.png';

const COMPLETE_IMG = '../img/completed_stamp.png';

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

  constructor() {
    super();
    this.onRequestTransferPoint = this.onRequestTransferPoint.bind(this);
    this.getUserProfile = this.getUserProfile.bind(this);

    this.state = {
      vendorImageFrom: undefined,
      vendorImageTo: undefined,
      isLoading: false,
      isCompleted: false,
      userfirstname: '',
      userLastname: '',
      userCitizenId: '',
    };
  }

  componentWillMount() {
    const { params } = this.props.navigation.state;

    if (
      params.transferResultObject[0].fromVendorId.name === 'AIS POINT' ||
      params.transferResultObject[0].toVendorId.name === 'AIS POINT'
    ) {
      this.setState({
        vendorImageFrom: AIS_BG,
        vendorImageTo: AIS_BG,
      });
    } else if (
      params.transferResultObject[0].fromVendorId.name === 'BLUE CARD'
    ) {
      this.setState({
        vendorImageFrom: PTT,
      });
    } else if (
      params.transferResultObject[0].fromVendorId.name === 'ESSO SMILES'
    ) {
      this.setState({
        vendorImageFrom: ESSO_SMILE,
      });
    } else if (
      params.transferResultObject[0].fromVendorId.name === 'BIG POINT'
    ) {
      this.setState({
        vendorImageFrom: AIR_ASIA,
      });
    } else if (
      params.transferResultObject[0].fromVendorId.name === 'THE ONE CARD'
    ) {
      this.setState({
        vendorImageFrom: THE_ONE,
      });
    } else if (
      params.transferResultObject[0].fromVendorId.name === 'TESCO'
    ) {
      this.setState({
        vendorImageFrom: TESCO,
      });
    } else {
      this.setState({
        vendorImageFrom: '',
      });
    }

    if (params.transferResultObject[0].toVendorId.name === 'AIS POINT') {
      this.setState({
        vendorImageTo: AIS_BG,
      });
    } else if (params.transferResultObject[0].toVendorId.name === 'BLUE CARD') {
      this.setState({
        vendorImageTo: PTT,
      });
    } else if (
      params.transferResultObject[0].toVendorId.name === 'ESSO SMILES'
    ) {
      this.setState({
        vendorImageTo: ESSO_SMILE,
      });
    } else if (params.transferResultObject[0].toVendorId.name === 'BIG POINT') {
      this.setState({
        vendorImageTo: AIR_ASIA,
      });
    } else if (
      params.transferResultObject[0].toVendorId.name === 'THE ONE CARD'
    ) {
      this.setState({
        vendorImageTo: THE_ONE,
      });
    } else if (
      params.transferResultObject[0].toVendorId.name === 'TESCO'
    ) {
      this.setState({
        vendorImageTo: TESCO,
      });
    } else {
      this.setState({
        vendorImageTo: '',
      });
    }
  }

  async getUserProfile() {
    AsyncStorage.getItem('firstname').then((firstName) => {
      this.setState({ userfirstname: firstName });
    }).done();

    AsyncStorage.getItem('lastname').then((lastname) => {
      this.setState({ userLastname: lastname });
    }).done();
  }

  async onRequestTransferPoint(toPoint) {
    const { params } = this.props.navigation.state;
    AsyncStorage.getItem('user-citizen')
      .then((value) => {
        this.setState({ userCitizenId: value, isFetching: true });

        console.log(`From: ${params.transferResultObject[2]}`);
        console.log(`To: ${params.transferResultObject[3]}`);
        console.log(`From Point: ${params.transferResultObject[1]}`);
        console.log(`To: ${toPoint}`);
        console.log(`User Id:${value}`);
        this.setState({
          isLoading: true,
        });

        const URL = `${serviceUrl}/transfer/point`;
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
            this.setState({
              isLoading: false,
              isCompleted: true,
            });
          }
        });
      })
      .done();
  }

  goBackToHome(){
    this.props.navigation.dispatch(NavigationActions.reset({
      key: null,
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'SignedIn' })],
    }));
  }

  render() {
    const { params } = this.props.navigation.state;
    const { navigate } = this.props.navigation;
    const { userCitizenId, userfirstname, userLastname } = this.state;
    const contentContainer = StyleSheet.flatten(styles.contentContainer);
    const cardViewRow = StyleSheet.flatten(styles.cardViewRow);
    const cardViewRowItem = StyleSheet.flatten(styles.cardViewRowItem);
    const cardViewRowItemEnd = StyleSheet.flatten(styles.cardViewRowItemEnd);
    const cardViewHeader = StyleSheet.flatten(styles.cardViewHeader);

    let totalRecieve = 0;
    let rate = 0;

    rate =
      params.transferResultObject[0].toRate /
      params.transferResultObject[0].fromRate;
    totalRecieve = parseInt(params.transferResultObject[1]) * rate;

    if (this.state.isLoading) {
      return (
        <Container backgroundColor={this.props.primaryColor}>
          <View
            style={{
              flex: 0.65,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Tile
              styleName="text-centric"
              style={{ marginBottom: 8, backgroundColor: 'transparent' }}
            >
              <Title styleName="sm-gutter-bottom" style={{ color: '#ffffff' }}>
                We are transferring the point. Please wait...
              </Title>
            </Tile>
            <MaterialIndicator color="#e5d464" />
          </View>
        </Container>
      );
    } else if (this.state.isCompleted) {
      return(
     <Container>
        <ScrollView style={contentContainer}>
          <Tile
            styleName="text-centric"
            style={{ marginBottom: 4, backgroundColor: 'transparent' }}
          >
            <Image
              styleName="medium-wide"
              style={{ height: 140, width: 230 }}
              source={require(COMPLETE_IMG)}
            />
          </Tile>
          <Row styleName="small" style={cardViewHeader}>
            <Text>TRANSFERENCE</Text>
            <Image
              styleName="small-avatar"
              source={{ uri: this.state.vendorImageFrom }}
            />
            <MaterialIcons
              name="keyboard-arrow-right"
              size={20}
              style={{ marginRight: 12 }}
            />
            <Image
              styleName="small-avatar"
              source={{ uri: this.state.vendorImageTo }}
            />
          </Row>
          <Row style={cardViewRow}>
            <View styleName="horizontal">
              <View styleName="vertical space-between" style={cardViewRowItem}>
                <Title>From</Title>
                <Text style={{ marginTop: 8 }}>{params.transferResultObject[0].fromVendorId.name}</Text>
                <Subtitle style={{ color: '#BFBFBF', fontSize: 14, marginTop: 5 }}>{params.transferResultObject[5]}</Subtitle>
              </View>
            </View>
          </Row>
          <Row style={cardViewRow}>
            <View styleName="horizontal">
              <View styleName="vertical space-between" style={cardViewRowItem}>
                <Title>To</Title>
                <Text style={{ marginTop: 8 }}>{params.transferResultObject[0].toVendorId.name}</Text>
                <Subtitle style={{ color: '#BFBFBF', fontSize: 14, marginTop: 5 }}>{params.transferResultObject[4]}</Subtitle>
              </View>
            </View>
          </Row>
          <Row style={cardViewRow}>
            <View styleName="horizontal">
              <View styleName="vertical space-between" style={cardViewRowItem}>
                <Text style={{ marginTop: 5, fontSize: 24 }}>
                  <MaterialIcons name="loyalty" size={16} />{' '}
                  {params.transferResultObject[1]}{' '}
                </Text>
                <Title style={{ color: '#34385d', fontSize: 16 }}>
                  You transfer
                </Title>
              </View>
              <View
                styleName="vertical space-between"
                style={cardViewRowItemEnd}
              >
                <Text style={{ marginTop: 5, fontSize: 24 }}>
                  <MaterialIcons name="loyalty" size={16} />
                  {totalRecieve}
                </Text>
                <Title style={{ color: '#34385d', fontSize: 16 }}>
                  You receive
                </Title>
              </View>
            </View>
          </Row>
        </ScrollView>
        <View style={{ flex: 0.08 }}>
          <RaisedTextButton
            style={{ flex: 1 }}
            rippleDuration={600}
            rippleOpacity={0.54}
            title="CLOSE"
            color="#34385d"
            titleColor="white"
            onPress={() =>  this.goBackToHome()}
          />
        </View>
      </Container>
      )
    }

    return (
      <Container>
        <ScrollView style={contentContainer}>
          <Tile
            styleName="text-centric"
            style={{ marginBottom: 8, backgroundColor: 'transparent' }}
          >
            <Title styleName="sm-gutter-bottom">
              Confirm your Transference
            </Title>
          </Tile>
          <Row styleName="small" style={cardViewHeader}>
            <Text>TRANSFERENCE</Text>
            <Image
              styleName="small-avatar"
              source={{ uri: this.state.vendorImageFrom }}
            />
            <MaterialIcons
              name="keyboard-arrow-right"
              size={20}
              style={{ marginRight: 12 }}
            />
            <Image
              styleName="small-avatar"
              source={{ uri: this.state.vendorImageTo }}
            />
          </Row>
          <Row style={cardViewRow}>
            <View styleName="horizontal">
              <View styleName="vertical space-between" style={cardViewRowItem}>
                <Title>From</Title>
                <Text style={{ marginTop: 8 }}>{params.transferResultObject[0].fromVendorId.name}</Text>
                <Subtitle style={{ color: '#BFBFBF', fontSize: 14, marginTop: 5 }}>{params.transferResultObject[5]}</Subtitle>
              </View>
            </View>
          </Row>
          <Row style={cardViewRow}>
            <View styleName="horizontal">
              <View styleName="vertical space-between" style={cardViewRowItem}>
                <Title>To</Title>
                <Text style={{ marginTop: 8 }}>{params.transferResultObject[0].toVendorId.name}</Text>
                <Subtitle style={{ color: '#BFBFBF', fontSize: 14, marginTop: 5 }}>{params.transferResultObject[4]}</Subtitle>
              </View>
            </View>
          </Row>
          <Row style={cardViewRow}>
            <View styleName="horizontal">
              <View styleName="vertical space-between" style={cardViewRowItem}>
                <Text style={{ marginTop: 5, fontSize: 24 }}>
                  <MaterialIcons name="loyalty" size={16} />{' '}
                  {params.transferResultObject[1]}{' '}
                </Text>
                <Title style={{ color: '#34385d', fontSize: 16 }}>
                  You transfer
                </Title>
              </View>
              <View
                styleName="vertical space-between"
                style={cardViewRowItemEnd}
              >
                <Text style={{ marginTop: 5, fontSize: 24 }}>
                  <MaterialIcons name="loyalty" size={16} />
                  {totalRecieve}
                </Text>
                <Title style={{ color: '#34385d', fontSize: 16 }}>
                  You receive
                </Title>
              </View>
            </View>
          </Row>
        </ScrollView>
        <View style={{ flex: 0.08 }}>
          <RaisedTextButton
            style={{ flex: 1 }}
            rippleDuration={600}
            rippleOpacity={0.54}
            title="CONFIRM"
            color="#34385d"
            titleColor="white"
            onPress={() => this.onRequestTransferPoint(totalRecieve)}
          />
        </View>
      </Container>
    );
  }
}

export default TransferConfirmation;
