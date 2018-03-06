import React, { Component } from 'react';
import {
    View,
    TouchableOpacity
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Container } from '../components/Container';

class MyLoyaltyCardDetail extends Component {
    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state;

        return {
            headerTitle: null,
            headerRight: (
                <TouchableOpacity>
                  <MaterialIcons name="receipt" size={26} color="#FFFFFF" />
                </TouchableOpacity>
              ),
        };
    };

    render(){
        return(
            <Container backgroundColor={this.props.primaryColor}>

            </Container>
        );
    }
}

export default MyLoyaltyCardDetail;
