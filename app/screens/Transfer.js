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

import { TextField } from 'react-native-material-textfield';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Container } from '../components/Container';

const screen = Dimensions.get('window');

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
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
    },
    cardViewRowItem: {
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    cardViewSpecifyAmount: {
        width: screen.width - 32,
        marginVertical: 20,
        height: 200,
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingHorizontal: 32,
        paddingVertical: 10,
    },
    inputAmountContainer:{
        paddingBottom: 8,
    },
    inputAmountTitleText:{
        color: '#9DA2FB'
    }
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
            phone: '0',
        };
    }

    render() {
        let { phone } = this.state;
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
                            <Subtitle style={{ color: '#9DA2FB', fontSize: 16 }}>You transfer point to</Subtitle>
                        </View>
                        {/* <TouchableOpacity>
                            <MaterialIcons name="clear" size={18} color="#9DA2FB" />
                        </TouchableOpacity> */}
                    </Row>
                    <TextField
                        inputContainerPadding={18}
                        containerStyle={cardViewSpecifyAmount}
                        inputContainerStyle={styles.inputAmountContainer}
                        label=''
                        title='You transfer amount'
                        titleFontSize={16}
                        fontSize={32}
                        titleTextStyle={styles.inputAmountTitleText}
                        value={phone}
                        multiline={false}
                        editable={false}
                        onChangeText={phone => this.setState({ phone })}
                    />
                </ScrollView>
            </Container>
        );
    }
}

export default Transfer;
