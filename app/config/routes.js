import React from 'react';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import {
  Dimensions,
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import MyLoyaltyCardList from '../screens/MyLoyaltyCardList';
import MyLoyaltyCardDetail from '../screens/MyLoyaltyCardDetail';
import MyProfile from '../screens/MyProfile';

const screen = Dimensions.get('window');

const LoyaltyCardStack = StackNavigator({
  LoyaltyCardList: {
    screen: MyLoyaltyCardList,
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: '#9DA2FB',
        elevation: 0,
        paddingHorizontal: 16,
        height: screen.height / 6,
      },
      headerTintColor: '#FFFFFF',
      headerTitleStyle: {
        fontWeight: '300',
        fontFamily: 'Arial',
        fontSize: 20,
      },
    }),
  },
  LoyaltyCardDetail: {
    screen: MyLoyaltyCardDetail,
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: '#9DA2FB',
        elevation: 0,
        paddingHorizontal: 16,
        height: screen.height / 6,
      },
      headerTintColor: '#FFFFFF',
      headerTitleStyle: {
        fontWeight: '300',
        fontFamily: 'Arial',
        fontSize: 20,
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
        backgroundColor: '#9DA2FB',
        elevation: 0,
        paddingHorizontal: 16,
        height: screen.height / 6,
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
      activeTintColor: '#9DA2FB',
      inactiveTintColor: 'gray',
      showLabel: false,
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  },
);

export default MainNavigator;
