import React from 'react';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import { Dimensions } from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import MyLoyaltyCardList from '../screens/MyLoyaltyCardList';
import MyLoyaltyCardDetail from '../screens/MyLoyaltyCardDetail';
import VendorPartnerList from '../screens/VendorPartnerList';
import VendorPartnerCardList from '../screens/VendorPartnerCardList';
import Transfer from '../screens/Transfer';
import TransferConfirmation from '../screens/TransferConfirmation';

import SignIn from '../screens/SignIn';

import MyProfile from '../screens/MyProfile';


const screen = Dimensions.get('window');

export const SignedOut = StackNavigator({
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      title: 'Sign In',
    },
  },
});

export const LoyaltyCardStack = StackNavigator({
  LoyaltyCardList: {
    screen: MyLoyaltyCardList,
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: '#34385d',
        elevation: 0,
        paddingHorizontal: 16,
      },
      headerTintColor: '#e5d464',
      headerTitleStyle: {
        fontWeight: '300',
        fontFamily: 'Arial',
        fontSize: 18,
      },
    }),
  },
  LoyaltyCardDetail: {
    screen: MyLoyaltyCardDetail,
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: '#34385d',
        elevation: 0,
      },
      headerTintColor: '#e5d464',
      headerTitleStyle: {
        fontWeight: '300',
        fontFamily: 'Arial',
        fontSize: 18,
      },
      tabBarVisible: false,
    }),
  },
  VendorPartnerList: {
    screen: VendorPartnerList,
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: '#34385d',
        elevation: 0,
      },
      headerTintColor: '#e5d464',
      headerTitleStyle: {
        fontWeight: '300',
        fontFamily: 'Arial',
        fontSize: 18,
      },
      tabBarVisible: false,
    }),
  },
  VendorPartnerCardList: {
    screen: VendorPartnerCardList,
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: '#34385d',
        elevation: 0,
      },
      headerTintColor: '#e5d464',
      headerTitleStyle: {
        fontWeight: '300',
        fontFamily: 'Arial',
        fontSize: 18,
      },
      tabBarVisible: false,
    }),
  },
  Transfer: {
    screen: Transfer,
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: '#34385d',
        elevation: 0,
      },
      headerTintColor: '#e5d464',
      headerTitleStyle: {
        fontWeight: '300',
        fontFamily: 'Arial',
        fontSize: 18,
      },
      tabBarVisible: false,
    }),
  },
  TransferConfirmation: {
    screen: TransferConfirmation,
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: '#34385d',
        elevation: 0,
      },
      headerTintColor: '#FFFFFF',
      headerTitleStyle: {
        fontWeight: '300',
        fontFamily: 'Arial',
        fontSize: 18,
      },
      tabBarVisible: false,
    }),
  },
});


const ProfileStack = StackNavigator({
  MyProfile: {
    screen: MyProfile,
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: '#34385d',
        elevation: 0,
        paddingHorizontal: 16,
      },
      headerTintColor: '#FFFFFF',
      headerTitleStyle: {
        fontWeight: '300',
        fontFamily: 'Arial',
        fontSize: 20,
      },
    }),
  },
});

const MainNavigator = TabNavigator(
  {
    MyCard: { screen: LoyaltyCardStack },
    MyProfile: { screen: ProfileStack },
    
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'MyCard') {
          iconName = 'card-giftcard';
        } else if (routeName === 'MyProfile') {
          iconName = 'face';
        }
        return <MaterialIcons name={iconName} size={25} color={tintColor} />;
      },
    }),
    initialRouteName: 'MyCard',
    tabBarOptions: {
      activeTintColor: '#34385d',
      inactiveTintColor: 'gray',
      showLabel: false,
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  },
);

export const createRootNavigator = (signedIn = false) => StackNavigator(
  {
    SignedIn: {
      screen: LoyaltyCardStack,
      navigationOptions: {
        gesturesEnabled: false,
      },
    },
    SignedOut: {
      screen: SignedOut,
      navigationOptions: {
        gesturesEnabled: false,
      },
    },
  },
  {
    headerMode: 'none',
    mode: 'modal',
    initialRouteName: signedIn ? 'SignedIn' : 'SignedOut',
  },
);
