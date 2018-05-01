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

import axios from 'axios';


import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { TextField } from 'react-native-material-textfield';
import { TextButton } from 'react-native-material-buttons';
import { Container } from '../components/Container';
import { onSignIn, saveUserCitizen, getUserCitizen } from '../auth/auth';

const app_logo = require('../img/app_logo.png');

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

class SignUp extends Component {
    static navigationOptions = ({ navigation }) => {
      const { params } = navigation.state;

      return {
        // header: '',
      };
    };

    constructor() {
      super();
      this.state = {
        username: '',
        password: '',
        citizenId: '',
        firstname: '',
        lastname: '',
        phoneNumber: '',
        secureTextEntry: true,
      };

      this.renderPasswordAccessory = this.renderPasswordAccessory.bind(this);
      this.onAccessoryPress = this.onAccessoryPress.bind(this);
      this.onSignUp = this.onSignUp.bind(this);
    }

    onAccessoryPress() {
      this.setState(({ secureTextEntry }) => ({ secureTextEntry: !secureTextEntry }));
    }

    renderPasswordAccessory() {
      const { secureTextEntry } = this.state;

      const name = secureTextEntry ?
        'visibility' :
        'visibility-off';

      return (
            <MaterialIcons
                size={24}
                name={name}
                color='#e5d464'
                onPress={this.onAccessoryPress}
                suppressHighlighting
            />
      );
    }

    onSignUp() {
      const { navigate } = this.props.navigation;
      const URL = `${IP}/users/`;
      axios({
        method: 'post',
        url: URL,
        responseType: 'json',
        data: {
          username: this.state.username.toString(),
          password: this.state.password.toString(),
          citizenid: this.state.citizenId.toString(),
          firstname: this.state.firstname.toString(),
          lastname: this.state.lastname.toString(),
          phoneNumber: this.state.phoneNumber.toString(),
        },
      }).then((response) => {
        if (response.status === 200) {     
          // () => navigate('SignedOut');
          console.log(response);
        } else {
          Alert.alert('Fail');
        }
      }).catch((error) => {
        console.log(error);
      });
    }

    render() {
      const { username, password, citizenId, firstname, lastname, phoneNumber, secureTextEntry } = this.state;

      const contentContainer = StyleSheet.flatten(styles.contentContainer);
      const cardViewField = StyleSheet.flatten(styles.cardViewField);
      return (
            <Container>
                <StatusBar backgroundColor="#34385d" barStyle="light-content" />
                <View style={contentContainer}>

                    <ScrollView style={cardViewField}>
                        <TextField
                            inputContainerPadding={20}
                            label='Username'
                            labelFontSize={16}dlinef
                            labelHeight={42}
                            fontSize={16}
                            textColor='#fff'
                            tintColor='#e5d464'
                            baseColor='#e5d464'
                            multiline={false}
                            ref={this.username}
                            value={username}
                            autoCorrect={false}
                            enablesReturnKeyAutomatically={true}
                            onChangeText={username => this.setState({ username })}
                            returnKeyType='next'
                        />

                        <TextField
                            inputContainerPadding={20}
                            label='Password'
                            labelFontSize={16}
                            labelHeight={42}
                            fontSize={16}
                            textColor='#fff'
                            tintColor='#e5d464'
                            baseColor='#e5d464'
                            multiline={false}
                            ref={this.passwordRef}
                            value={password}
                            secureTextEntry={secureTextEntry}
                            autoCapitalize='none'
                            autoCorrect={false}
                            enablesReturnKeyAutomatically={true}
                            clearTextOnFocus={true}
                            returnKeyType='next'
                            maxLength={30}
                            onChangeText={password => this.setState({ password })}
                            renderAccessory={this.renderPasswordAccessory}
                        />

                         <TextField
                            inputContainerPadding={20}
                            label='Citizen id'
                            labelFontSize={16}
                            labelHeight={42}
                            fontSize={16}
                            textColor='#fff'
                            tintColor='#e5d464'
                            baseColor='#e5d464'
                            multiline={false}
                            ref={this.citizenId}
                            value={citizenId}
                            autoCorrect={false}
                            enablesReturnKeyAutomatically={true}
                            onChangeText={citizenId => this.setState({ citizenId })}
                            returnKeyType='next'
                        />

                         <TextField
                            inputContainerPadding={20}
                            label='Firstname'
                            labelFontSize={16}
                            labelHeight={42}
                            fontSize={16}
                            textColor='#fff'
                            tintColor='#e5d464'
                            baseColor='#e5d464'
                            multiline={false}
                            ref={this.firstname}
                            value={firstname}
                            autoCorrect={false}
                            enablesReturnKeyAutomatically={true}
                            onChangeText={firstname => this.setState({ firstname })}
                            returnKeyType='next'
                        />

                        <TextField
                            inputContainerPadding={20}
                            label='Lastname'
                            labelFontSize={16}
                            labelHeight={42}
                            fontSize={16}
                            textColor='#fff'
                            tintColor='#e5d464'
                            baseColor='#e5d464'
                            multiline={false}
                            ref={this.lastname}
                            value={lastname}
                            autoCorrect={false}
                            enablesReturnKeyAutomatically={true}
                            onChangeText={lastname => this.setState({ lastname })}
                            returnKeyType='next'
                        />

                          <TextField
                            inputContainerPadding={20}
                            label='Mobile No.'
                            labelFontSize={16}
                            labelHeight={42}
                            fontSize={16}
                            textColor='#fff'
                            tintColor='#e5d464'
                            baseColor='#e5d464'
                            multiline={false}
                            ref={this.phoneNumber}
                            value={phoneNumber}
                            autoCorrect={false}
                            enablesReturnKeyAutomatically={true}
                            onChangeText={phoneNumber => this.setState({ phoneNumber })}
                            returnKeyType='done'
                        />


                    <View style={{ flex: 1 }}>
                        <TextButton style={{ flex: 1, marginVertical: 8 }}
                            rippleDuration={600}
                            rippleOpacity={0.54}
                            title='Sign Up'
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

export default SignUp;
