import { Platform, StatusBar } from "react-native";
import { StackNavigator, TabNavigator } from "react-navigation";

import MyLoyaltyCardList from '../screens/MyLoyaltyCardList';
import MyHistoryList from '../screens/MyHistoryList';

const headerStyle = {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
};

const MyLoyaltyCardListStack = StackNavigator({
    LoyaltyCardList: {
      screen: MyLoyaltyCardList,
      navigationOptions: ({ navigation }) => ({
        header: () => null,
        headerTitle: "MY CARD",
      }),
    },
});

const MyHistoryListStack = StackNavigator({
    HistoryList: {
      screen: MyHistoryList,
      navigationOptions: ({ navigation }) => ({
        header: () => null,
        headerTitle: "MY HISTORY",
      }),
    },
});


const RootTab = TabNavigator(
    {
      MyLoyaltyCard: {
        screen: MyLoyaltyCardListStack,
        navigationOptions: {
          tabBarLabel: "My Card",
          tabBarIcon: ({ tintColor }) =>
            <FontAwesome name="home" size={30} color={tintColor} />
        }
      },
      MyHistoryList: {
        screen: MyHistoryListStack,
        navigationOptions: {
          tabBarLabel: "My History",
          tabBarIcon: ({ tintColor }) =>
            <FontAwesome name="home" size={30} color={tintColor} />
        }
      },
    },
    {
      tabBarOptions: {
        style: {
        //   paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
        }
      }
    },
);


export default RootTab;


  