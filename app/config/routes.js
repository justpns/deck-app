import { StackNavigator } from 'react-navigation';

import MyLoyaltyCardList from '../screens/MyLoyaltyCardList';
import MyHistoryList from '../screens/MyHistoryList';

const MainStack = StackNavigator({
  LoyaltyCardList: {
    screen: MyLoyaltyCardList,
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: '#FFF',
        elevation: 0,
        paddingHorizontal: 16,
      },
      headerTintColor: '#9DA2FB',
      headerTitleStyle: {
        fontWeight: '300',
        fontFamily: 'Arial',
        fontSize: 20,
      },
    }),
  },
  HistoryList: {
    screen: MyHistoryList,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'MY HISTORY',
      headerStyle: {
        backgroundColor: '#FFF',
        elevation: 0,
        paddingHorizontal: 16,
      },
      headerTintColor: '#9DA2FB',
      headerTitleStyle: {
        fontWeight: '300',
        fontFamily: 'Arial',
        fontSize: 20,
      },
    }),
  },
});

// const HistoryStack = StackNavigator({
//   HistoryList: {
//     screen: MyHistoryList,
//     navigationOptions: ({ navigation }) => ({
//       headerTitle: 'MY HISTORY',
//       headerStyle: {
//         backgroundColor: '#FFF',
//         elevation: 0,
//       },
//       headerTintColor: '#9DA2FB',
//       headerTitleStyle: {
//         fontWeight: '300',
//         fontFamily: 'Arial',
//         fontSize: 16,
//       },
//     }),
//   },
// });


// const RootStack = StackNavigator({
//   Main: {
//     screen: MainStack,
//   },
//   HistoryModal: {
//     screen: HistoryStack,
//   },
// });

export default MainStack;
