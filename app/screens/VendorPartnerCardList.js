import React, { Component } from 'react';
import {
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions,
  Alert,
  FlatList,
  AsyncStorage,
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

class VendorPartnerCardList extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;

    return {
      headerTitle: `To ${  params.information[1].toVendorId.name}`,
      // headerRight: (
      //     <TouchableOpacity>
      //         <MaterialIcons name="receipt" size={26} color="#FFFFFF" />
      //     </TouchableOpacity>
      // ),
    };
  };

  MyCardDetailObject(cardId, cardNumber, img, point, detail, vendor) {
    this.cardId = cardId;
    this.cardNumber = cardNumber;
    this.img = img;
    this.point = point;
    this.detail = detail;
    this.vendor = vendor;
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
    AsyncStorage.getItem('user-citizen').then((value) => {
      this.setState({ userCitizenId: value, isFetching: true });

      const URL = `${serviceUrl}/partner/card/${params.information[1].toVendorId.name}/${this.state.userCitizenId}`;
      const encodeURL = encodeURI(URL);
      // Alert.alert(encodeURL);
      axios({
        method: 'get',
        url: encodeURL,
      }).then((response) => {
        if (response.status === 200) {
          const tempArray = [];
          response.data.userCardlist.map((value, index) => {
            tempArray.push(new this.MyCardDetailObject(
              value.cardId,
              value.cardNumber,
              '',
              value.point,
              value.royaltyProgramId,
              response.data.royaltyProgramInfo.vendor,
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
        <View style={{ flex: 0.15, paddingHorizontal: 16 }}>
          <Divider styleName="section-header" style={{ backgroundColor: 'transparent', borderTopWidth: 0, borderBottomWidth: 0 }}>
            <Caption style={{ color: '#e5d464' }}>Select a card</Caption>
          </Divider>
        </View>
        <FlatList
          style={{ paddingHorizontal: 16 }}
          numColumns={1}
          data={myCardVendorPartners}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={
                () => {
                  const paramsObj = [];
                  paramsObj.push(params.information[0].cardId); // from cardId
                  paramsObj.push(params.information[0].point); // from point
                  paramsObj.push(item.cardId); // to Card Id
                  paramsObj.push(params.information[1]); // rules
                  paramsObj.push(item.cardNumber);
                  paramsObj.push(params.information[0].cardNumber);

                  navigate('Transfer', { information: paramsObj });
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
