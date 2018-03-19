import React, { Component } from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
  TouchableOpacity,
  FlatList,
  Text,
  Dimensions,
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { Container } from '../components/Container';

const CustomHeaderTitle = props => (
      <View>
        <Text style={ {
 fontSize: 32, color: '#FFFFFF', fontWeight: '700', marginBottom: 15,
} }>My profile</Text>
      </View>
);

class MyProfile extends Component {
    static navigationOptions = ({ navigation }) => {
      const { params } = navigation.state;
      return {
        headerTitle: <CustomHeaderTitle />,
        // headerRight: (
        //     <TouchableOpacity>
        //         <MaterialIcons name="face" size={32} color="#FFFFFF" />
        //     </TouchableOpacity>
        // ),
      };
    };

    render() {
      return (
            <Container backgroundColor={this.props.primaryColor}>
                <StatusBar backgroundColor="#9DA2FB" barStyle="light-content" />

            </Container>
      );
    }
}

export default MyProfile;
