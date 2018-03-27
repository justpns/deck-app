import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  Dimensions,
  Alert,
} from 'react-native';

import {
  Tile,
  Row,
  Image,
  View,
  Subtitle,
  Caption,
  Heading,
  Divider,
} from '@shoutem/ui';

import axios from 'axios';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import ActionButton from 'react-native-action-button';

import { Container } from '../components/Container';
/* eslint no-underscore-dangle: 0 */

const screen = Dimensions.get('window');

const styles = StyleSheet.create({
  contentContainer: {
    flex: 0.25,
    paddingHorizontal: 16,
    marginBottom: 0,
    flexDirection: 'column',
    backgroundColor: 'transparent',
    height: screen.height,
  },
  cardViewRow: {
    backgroundColor: 'transparent',

  },
  pointBalanceContainer: {
    flex: 0.35,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 35,
  },
  topRadius: {
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});

const IP = 'http://52.230.25.97:3333';

class MyLoyaltyCardDetail extends Component {
    static navigationOptions = ({ navigation }) => {
      const { params } = navigation.state;

      return {
        headerTitle: params.cardItem[0].detail.name,
        // headerRight: (
        //     <TouchableOpacity>
        //         <MaterialIcons name="receipt" size={26} color="#FFFFFF" />
        //     </TouchableOpacity>
        // ),
      };
    };

    constructor(props) {
      super(props);

      this.onRequestGetCardDetail = this.onRequestGetCardDetail.bind(this);
      this.renderHistoryDetail = this.renderHistoryDetail.bind(this);

      this.state = {
        isFetchingHistory: true,
      };
    }

    componentWillMount() {
      this.onRequestGetCardDetail();
    }

    async onRequestGetCardDetail() {
      const { params } = this.props.navigation.state;
      this.setState({
        isFetchingHistory: true,
      });
      const URL = `${IP}/transferPoint/${params.cardItem[0].userId}/${params.cardItem[0].cardId}`;
      await axios({
        method: 'get',
        url: URL,
      }).then((response) => {
        if (response.status === 200) {
          this.setState({
            isFetchingHistory: false,
            cardTransferHistory: response.data,
          });
          console.log(response.data);
          console.log(params.cardItem[0].userId);
          console.log(params.cardItem[0].cardId);
        }
      });
    }

    renderHistoryDetail() {
      const { cardTransferHistory } = this.state;
      const historyObj = [];
      for (let i = 0; i < cardTransferHistory.length; ++i) {
        historyObj.push(<Row>
                <Image
                    styleName="small rounded-corners"
                    source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-3.png' }}
                />
                <View styleName="vertical stretch space-between">
                    <Subtitle>Wilco Cover David Bowie&#39;s "Space Oddity"</Subtitle>
                    <Caption>June 21  ->  20:00</Caption>
                </View>
            </Row>);
      }

      return historyObj;
    }

    render() {
      const { navigate } = this.props.navigation;
      const { params } = this.props.navigation.state;
      const cardViewRow = StyleSheet.flatten(styles.cardViewRow);
      const contentContainer = StyleSheet.flatten(styles.contentContainer);
      const pointBalanceContainer = StyleSheet.flatten(styles.pointBalanceContainer);
      const topRadius = StyleSheet.flatten(styles.topRadius);
      return (
            <Container>
                <View styleName="vertical" style={{flex: 0.50}}>
                    <Row style={cardViewRow}>
                        <View styleName="vertical stretch">
                            <Heading style={{ color: '#fff', fontSize: 32, paddingTop: 20 }}> <MaterialIcons name="loyalty" size={26} color="#FFFFFF" /> {params.cardItem[0].point} </Heading>
                            <Subtitle style={{ color: '#fff', fontSize: 14, paddingLeft: 12 }}>Balance via {params.cardItem[0].cardNumber}</Subtitle>
                        </View>
                    </Row>
                </View>
                <ScrollView style={contentContainer}>
                    <Row style={{ marginBottom: 8 }}>
                        <Image
                            styleName="small rounded-corners"
                            source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-3.png' }}
                        />
                        <View styleName="vertical stretch space-between">
                            <Subtitle>Wilco Cover David Bowie&#39;s "Space Oddity"</Subtitle>
                            <Caption>June 21  ->  20:00</Caption>
                        </View>
                    </Row>

                    <Row style={{ marginBottom: 8 }}>
                        <Image
                            styleName="small rounded-corners"
                            source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-3.png' }}
                        />
                        <View styleName="vertical stretch space-between">
                            <Subtitle>Wilco Cover David Bowie&#39;s "Space Oddity"</Subtitle>
                            <Caption>June 21  ->  20:00</Caption>
                        </View>
                    </Row>

                    <Row style={{ marginBottom: 8 }}>
                        <Image
                            styleName="small rounded-corners"
                            source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-3.png' }}
                        />
                        <View styleName="vertical stretch space-between">
                            <Subtitle>Wilco Cover David Bowie&#39;s "Space Oddity"</Subtitle>
                            <Caption>June 21  ->  20:00</Caption>
                        </View>
                    </Row>

                    <Row style={{ marginBottom: 8 }}>
                        <Image
                            styleName="small rounded-corners"
                            source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-3.png' }}
                        />
                        <View styleName="vertical stretch space-between">
                            <Subtitle>Wilco Cover David Bowie&#39;s "Space Oddity"</Subtitle>
                            <Caption>June 21  ->  20:00</Caption>
                        </View>
                    </Row>
                </ScrollView>


                <ActionButton
                    buttonColor="#34385d"
                    renderIcon={
                        () => <MaterialIcons name="compare-arrows"  style={styles.actionButtonIcon} />
                    }
                    onPress={
                        () => navigate('VendorPartnerList', { fromVendor: params.cardItem[0] })
                    }>
                </ActionButton>
            </Container>
      );
    }
}

export default MyLoyaltyCardDetail;
