import React, { Component } from 'react';
import {
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions,
  Alert,
  FlatList,
} from 'react-native';

import {
  Row,
  Image,
  View,
  Subtitle,
  Caption,

  Divider,
} from '@shoutem/ui';

import axios from 'axios';
import { MaterialIndicator } from 'react-native-indicators';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Container } from '../components/Container';
import VendorPartnerDetail from '../components/VendorPartner/VendorPartnerDetail';
import { serviceUrl } from '../config/constants';

const screen = Dimensions.get('window');
const IP = 'http://52.230.26.113:3333';

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
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

class VendorPartnerList extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;

    return {
      headerTitle: params.fromVendor.royaltyProgramName,
      // headerRight: (
      //     <TouchableOpacity>
      //         <MaterialIcons name="receipt" size={26} color="#FFFFFF" />
      //     </TouchableOpacity>
      // ),
    };
  };

  constructor() {
    super();

    this.state = {
      cardVendorPartners: [],
      isFetching: false,
    };

    this.onRequestGetCardVendorPartner = this.onRequestGetCardVendorPartner.bind(this);
    //this.renderCardVendorPartners = this.renderCardVendorPartners.bind(this);
  }

  componentWillMount() {
    this.onRequestGetCardVendorPartner();
  }

  async onRequestGetCardVendorPartner() {
    const { params } = this.props.navigation.state;
    this.setState({
      isFetching: true,
    });
    const URL = `${serviceUrl}/partner/${params.fromVendor.royaltyProgramName}`;
    const encodeURL = encodeURI(URL);
    await axios({
      method: 'get',
      url: encodeURL,
    }).then((response) => {
      if (response.status === 200) {
        this.setState({
          isFetching: false,
          cardVendorPartners: response.data,
        });
      }
    });
  }

  renderCardVendorPartners() {
    const { cardVendorPartners } = this.state;
    const cardVendorPartnerObj = [];
    for (let i = 0; i < cardVendorPartners.length; ++i) {
      cardVendorPartnerObj.push(
        <TouchableOpacity
          onPress={
            () => navigate('Transfer')
          }>>
          <Row>
            <Image
              styleName="small rounded-corners"
              source={{ uri: cardVendorPartners[i].toVendorId.img }}
            />
            <View styleName="vertical stretch space-between">
              <Subtitle>{cardVendorPartners[i].toVendorId.name}</Subtitle>
              <Caption>Rate {cardVendorPartners[i].fromRate} : {cardVendorPartners[i].toRate}</Caption>
              <Caption>Max {cardVendorPartners[i].maximum} : Min {cardVendorPartners[i].minimum}</Caption>
            </View>
          </Row></TouchableOpacity>);
    }

    return cardVendorPartnerObj;
  }

  render() {
    const { params } = this.props.navigation.state;
    const { navigate } = this.props.navigation;
    const { cardVendorPartners, isFetching } = this.state;
    const cardViewRow = StyleSheet.flatten(styles.cardViewRow);
    const contentContainer = StyleSheet.flatten(styles.contentContainer);

    if (isFetching) {
      return (
        <Container>
          <View style={{ flex: 0.65, justifyContent: 'center', alignItems: 'center' }}>
            <MaterialIndicator color='#e5d464' />
          </View>
        </Container>
      );
    }

    return (
      <Container>
        <View style={{ flex: 0.15 }}>
          <Divider styleName="section-header" style={{ backgroundColor: 'transparent', borderTopWidth: 0, borderBottomWidth: 0 }}>
            <Caption style={{ color: '#e5d464' }}>Select a partner</Caption>
          </Divider>
        </View>
        <FlatList
          numColumns={1}
          data={cardVendorPartners}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={
                () => {
                  const paramsObj = [];
                  paramsObj.push(params.fromVendor);
                  paramsObj.push(item);
                 
                  navigate('VendorPartnerCardList', { information: paramsObj});
                }
              }>
              <VendorPartnerDetail vendorPartner={item} />
            </TouchableOpacity>
          )}
          keyExtractor={item => item._id}
        />
      </Container>
    );
  }
}

export default VendorPartnerList;
