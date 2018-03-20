import React, { Component } from 'react';
import {
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Alert,
  AsyncStorage,
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
    height: 220,
    backgroundColor: 'transparent',
    borderRadius: 10,
    paddingHorizontal: 32,
  },
});

const IP = 'http://52.230.25.97:3333';

class SignIn extends Component {
    static navigationOptions = ({ navigation }) => {
      const { params } = navigation.state;

      return {
        header: null,
      };
    };

    constructor() {
      super();
      this.state = {
        username: '',
        password: '',
        secureTextEntry: true,
      };

      this.renderPasswordAccessory = this.renderPasswordAccessory.bind(this);
      this.onAccessoryPress = this.onAccessoryPress.bind(this);
      this.onSignIn = this.onSignIn.bind(this);
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

    onSignIn() {
      const { navigate } = this.props.navigation;
      const URL = `${IP}/users/login`;
      axios({
        method: 'post',
        url: URL,
        responseType: 'json',
        data: {
          username: this.state.username.toString(),
          password: this.state.password.toString(),
        },
      }).then((response) => {
        if (response.status === 200) {
          AsyncStorage.setItem('user-citizen', response.data.citizenId.toString());
          onSignIn().then(() => navigate('SignedIn'));
        } else {
          Alert.alert('Invalid Username or Password');
        }
      }).catch((error) => {
        Alert.alert('Invalid Username or Password');
      });
    }

    render() {
      const { username, password, secureTextEntry } = this.state;

      const contentContainer = StyleSheet.flatten(styles.contentContainer);
      const cardViewField = StyleSheet.flatten(styles.cardViewField);
      return (
            <Container>
                <StatusBar backgroundColor="#34385d" barStyle="light-content" />
                <View style={contentContainer}>
                    <Image
                        styleName="large-banner"
                        source={app_logo}
                    />
                    <View style={cardViewField}>
                        <TextField
                            inputContainerPadding={20}
                            label='Username'
                            labelFontSize={16}
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
                            returnKeyType='done'
                            maxLength={30}
                            onChangeText={password => this.setState({ password })}
                            renderAccessory={this.renderPasswordAccessory}
                        />

                    </View>

                    <View style={{ flex: 0.10 }}>
                        <TextButton style={{ flex: 1 }}
                            rippleDuration={600}
                            rippleOpacity={0.54}
                            title='Sign In'
                            color='#34385d'
                            titleColor='#e5d464'
                            onPress={this.onSignIn} />
                    </View>
                </View>
            </Container>
      );
    }
}

export default SignIn;
