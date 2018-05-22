import React, { Component } from 'react';
import {
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Alert,
  AsyncStorage,
  ScrollView,
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

import { NavigationActions } from 'react-navigation';

import axios from 'axios';


import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { TextField } from 'react-native-material-textfield';
import { TextButton } from 'react-native-material-buttons';
import { Container } from '../components/Container';

import { serviceUrl } from '../config/constants';

const screen = Dimensions.get('window');

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    paddingHorizontal: 16,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  cardViewField: {
    width: screen.width - 32,
    marginBottom: 10,
    backgroundColor: 'transparent',
    borderRadius: 10,

  },
});

const IP = 'http://52.230.26.113:3333';

class AddNewCard extends Component {
    static navigationOptions = ({ navigation }) => {
      const { params } = navigation.state;

      return {
        headerTitle: params.selectedVendor.name,
      };
    };

    constructor() {
      super();
      this.state = {
        cardNumber: '',
        userCitizenId: '',
      };

      this.onSignUp = this.onSignUp.bind(this);
    }


    onSignUp() {
      const { navigate } = this.props.navigation;
      const { params } = this.props.navigation.state;
      AsyncStorage.getItem('user-citizen').then((value) => {
        this.setState({ userCitizenId: value, isFetching: true });
        // Alert.alert(this.state.userCitizenId);
        const URL = `${serviceUrl}/card`;
        // Alert.alert(URL);
        axios({
          method: 'post',
          url: URL,
          responseType: 'json',
          data: {
            userId: this.state.userCitizenId.toString(),
            cardNumber: this.state.cardNumber.toString(),
            royaltyProgramId: params.selectedVendor.royaltyProgramId,
            royaltyProgramName: params.selectedVendor.name,
          },
        }).then((response) => {
          if (response.status === 200) {
            this.props.navigation.dispatch(
              NavigationActions.reset({
                key: null,
                index: 0,
                actions: [
                  NavigationActions.navigate({ routeName: 'SignedIn' }),
                ],
              }),
            );
          } else {
            Alert.alert('Fail');
          }
        }).catch((error) => {
          Alert.alert('Fail');
        });
      }).done();
    }

    render() {
      const { cardNumber } = this.state;

      const contentContainer = StyleSheet.flatten(styles.contentContainer);
      const cardViewField = StyleSheet.flatten(styles.cardViewField);
      return (
            <Container>
                <StatusBar backgroundColor="#34385d" barStyle="light-content" />
                <View style={contentContainer}>

                    <ScrollView style={cardViewField}>
                        <TextField
                            inputContainerPadding={20}
                            label='Card number'
                            labelFontSize={16}
                            labelHeight={42}
                            fontSize={16}
                            textColor='#fff'
                            tintColor='#e5d464'
                            baseColor='#e5d464'
                            multiline={false}
                            ref={this.cardNumber}
                            value={cardNumber}
                            autoCorrect={false}
                            enablesReturnKeyAutomatically={true}
                            onChangeText={cardNumber => this.setState({ cardNumber })}
                            returnKeyType='done'
                        />


                    <View style={{ flex: 1 }}>
                        <TextButton style={{ flex: 1, marginVertical: 8 }}
                            rippleDuration={600}
                            rippleOpacity={0.54}
                            title='Confirm'
                            color='#34385d'
                            titleColor='#fff'
                            onPress={this.onSignUp} />
                    </View>


                    </ScrollView>
                </View>
            </Container>
      );
    }
}

export default AddNewCard;
