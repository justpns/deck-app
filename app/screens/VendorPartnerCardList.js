import React, { Component } from 'react';
import {
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions,
  Alert,
  FlatList,
  AsyncStorage
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
import MyCardDetail from '../components/MyCard/MyCardDetail';

const screen = Dimensions.get('window');
const IP = 'http://52.230.25.97:3333';

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

class VendorPartnerCardList extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;

    return {
      // headerTitle: "Select a transfer's partner",
      // headerRight: (
      //     <TouchableOpacity>
      //         <MaterialIcons name="receipt" size={26} color="#FFFFFF" />
      //     </TouchableOpacity>
      // ),
    };
  };

  MyCardDetailObject(cardId, cardNumber,img, point, detail){
      this.cardId = cardId;
      this.cardNumber = cardNumber;
      this.img = img;
      this.point = point;
      this.detail = detail;
  }

  constructor() {
    super();

    this.state = {
      myCardVendorPartners: [],
      isFetching: false,
    };

    this.onRequestGetCardVendorPartnerInformation = this.onRequestGetCardVendorPartnerInformation.bind(this);

  }

  componentWillMount() {
    this.onRequestGetCardVendorPartnerInformation();
  }

  async onRequestGetCardVendorPartnerInformation() {
    const { params } = this.props.navigation.state;
    AsyncStorage.getItem('user-id').then((value) => {
      this.setState({ userId: value, isFetching: true });
     
      const URL = `${IP}/partners/${params.information[0].detail._id}/${params.information[1].toVendorId._id}/${this.state.userId}`;
      axios({
        method: 'get',
        url: URL,
      }).then((response) => {
        if (response.status === 200) {
          let tempArray = [];

          response.data.map((value, index) => {
            tempArray.push(new this.MyCardDetailObject(
                value.cardId,
                value.cardNumber,
                value.detail.toVendorId.img,
                value.point,
                value.detail,
            ));
          });

          this.setState({
            myCardVendorPartners: tempArray,
            isFetching: false,
          });
          
        }
      });
    }).done();
  
  }

  render() {
    const { params } = this.props.navigation.state;
    const { navigate } = this.props.navigation;
    const { myCardVendorPartners, isFetching } = this.state;
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
            <Caption style={{ color: '#e5d464' }}>Select a card</Caption>
          </Divider>
        </View>
        <FlatList
          numColumns={1}
          data={myCardVendorPartners}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={
                () => {
                  const paramsObj = [];
                  paramsObj.push(params.information[0].cardId);
                  paramsObj.push(params.information[0].point);
                  paramsObj.push(item.cardId);
                  paramsObj.push(item.detail);
                  
                  console.log(paramsObj);
                  navigate('Transfer', { information: paramsObj});
                }
              }>
              <MyCardDetail card_detail={item} />
            </TouchableOpacity>
          )}
          keyExtractor={item => item.cardId}
        />
      </Container>
    );
  }
}

export default VendorPartnerCardList;
