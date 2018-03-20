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
import Icon from 'react-native-vector-icons/Ionicons';
import ActionButton from 'react-native-action-button';

import { Container } from '../components/Container';
import MyCardDetail from '../components/MyCard/MyCardDetail';

const screen = Dimensions.get('window');

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    paddingHorizontal: 16,
    marginBottom: 0,
    flexDirection: 'column',
    backgroundColor: '#FFF',
    height: screen.height,
  },
  cardViewRow: {
    backgroundColor: 'transparent',
    height: 100,
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

class MyLoyaltyCardDetail extends Component {
    static navigationOptions = ({ navigation }) => {
      const { params } = navigation.state;

      return {
        headerTitle: params.cardItem.name,
        // headerRight: (
        //     <TouchableOpacity>
        //         <MaterialIcons name="receipt" size={26} color="#FFFFFF" />
        //     </TouchableOpacity>
        // ),
      };
    };

    constructor(props) {
      super(props);

      this.renderCardDetail = this.renderCardDetail.bind(this);
    }

    renderCardDetail() {
      const { params } = this.props.navigation.state;
      return (
            <MyCardDetail card_detail={params.cardItem} />
      );
    }

    render() {
      const { navigate } = this.props.navigation;
      const { params } = this.props.navigation.state;
      const { actionButtonIcon } = styles;
      const cardViewRow = StyleSheet.flatten(styles.cardViewRow);
      const contentContainer = StyleSheet.flatten(styles.contentContainer);
      const pointBalanceContainer = StyleSheet.flatten(styles.pointBalanceContainer);
      const topRadius = StyleSheet.flatten(styles.topRadius);
      return (
            <Container>
                <View styleName="vertical">
                    <Row style={cardViewRow}>
                        {/* <Image
                            styleName="small rounded-corners"
                            source={{ uri: params.cardItem.img }}
                        /> */}
                        <View styleName="vertical stretch">
                            <Heading style={{ color: '#fff', fontSize: 42, paddingTop: 20 }}> <MaterialIcons name="loyalty" size={26} color="#FFFFFF" /> {params.cardItem.point} </Heading>
                            <Subtitle style={{ color: '#fff', fontSize: 18, paddingLeft: 12 }}>Balance via ***** 1234 5678 9012</Subtitle>
                        </View>
                    </Row>
                </View>
                <View styleName="vertical stretch space-between" style={pointBalanceContainer}>
                    <Tile styleName="text-centric" style={topRadius}>
                        <Heading style={{ fontSize: 20, paddingVertical: 5 }}>Transfer History</Heading>
                        <Divider styleName="line" />
                    </Tile>
                </View>
                <ScrollView style={contentContainer}>
                    <Row>
                        <Image
                            styleName="small rounded-corners"
                            source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-3.png' }}
                        />
                        <View styleName="vertical stretch space-between">
                            <Subtitle>Wilco Cover David Bowie&#39;s "Space Oddity"</Subtitle>
                            <Caption>June 21  ->  20:00</Caption>
                        </View>
                    </Row>

                    <Row>
                        <Image
                            styleName="small rounded-corners"
                            source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-3.png' }}
                        />
                        <View styleName="vertical stretch space-between">
                            <Subtitle>Wilco Cover David Bowie&#39;s "Space Oddity"</Subtitle>
                            <Caption>June 21  ->  20:00</Caption>
                        </View>
                    </Row>

                    <Row>
                        <Image
                            styleName="small rounded-corners"
                            source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-3.png' }}
                        />
                        <View styleName="vertical stretch space-between">
                            <Subtitle>Wilco Cover David Bowie&#39;s "Space Oddity"</Subtitle>
                            <Caption>June 21  ->  20:00</Caption>
                        </View>
                    </Row>

                    <Row>
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
                        () => <Icon name="logo-buffer" style={styles.actionButtonIcon} />
                    }>
                    <ActionButton.Item buttonColor='#34385d' title="Trasfer Point"
                        onPress={() => navigate('VendorPartnerList') }>
                        <MaterialIcons name="compare-arrows" size={22} color="#e5d464" />
                    </ActionButton.Item>
                </ActionButton>
            </Container>
      );
    }
}

export default MyLoyaltyCardDetail;
