import React, { Component } from 'react';
import {
    TouchableOpacity,
    ScrollView,
    StyleSheet,
    Dimensions
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
    Divider
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
        paddingTop: 20,
        marginBottom: 0,
        flexDirection: 'column',
        backgroundColor: '#FFF',
    },
    cardViewRow: {
        backgroundColor: 'transparent',
    },
    pointBalanceContainer: {
        flex: .35,
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
            headerRight: (
                <TouchableOpacity>
                    <MaterialIcons name="receipt" size={26} color="#FFFFFF" />
                </TouchableOpacity>
            ),
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
        const { params } = this.props.navigation.state;
        const { actionButtonIcon } = styles;
        const cardViewRow = StyleSheet.flatten(styles.cardViewRow);
        const contentContainer = StyleSheet.flatten(styles.contentContainer);
        const pointBalanceContainer = StyleSheet.flatten(styles.pointBalanceContainer);
        const topRadius = StyleSheet.flatten(styles.topRadius);
        return (
            <Container backgroundColor={this.props.primaryColor}>
                <View styleName="vertical">
                    <Row style={cardViewRow}>
                        <Image
                            styleName="small rounded-corners"
                            source={{ uri: params.cardItem.img }}
                        />
                        <View styleName="vertical stretch space-between">
                            <Title style={{ color: '#fff' }}>{params.cardItem.name}</Title>
                            <Heading style={{ color: '#fff' }}>***** 9999 0000 1111</Heading>
                        </View>
                    </Row>
                </View>
                <View styleName="vertical stretch space-between" style={pointBalanceContainer}>
                    <Tile styleName="text-centric" style={topRadius}>
                        <Heading style={{ fontSize: 32, paddingVertical: 25 }}>{params.cardItem.point} Points</Heading>
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
                    buttonColor="#9DA2FB"
                    renderIcon={ 
                        () =>   <Icon name="logo-buffer" style={styles.actionButtonIcon} />                   
                    }>
                    <ActionButton.Item buttonColor='#9b59b6' title="Trasfer Point" onPress={() => console.log("notes tapped!")}>
                        <Icon name="md-redo" style={styles.actionButtonIcon} />
                    </ActionButton.Item>                  
                </ActionButton>
            </Container>
        );
    }
}

export default MyLoyaltyCardDetail;
