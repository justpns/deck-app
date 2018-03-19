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

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Container } from '../components/Container';

const screen = Dimensions.get('window');

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    marginBottom: 0,
    flexDirection: 'column',
    backgroundColor: '#FFF',
    height: screen.height,
  },
  cardViewRow: {
    backgroundColor: 'transparent',
    height: 100,
  },
});

class VendorPartnerList extends Component {
    static navigationOptions = ({ navigation }) => {
      const { params } = navigation.state;

      return {
        headerTitle: "Select a transfer's partner",
        // headerRight: (
        //     <TouchableOpacity>
        //         <MaterialIcons name="receipt" size={26} color="#FFFFFF" />
        //     </TouchableOpacity>
        // ),
      };
    };

    render() {
      const { navigate } = this.props.navigation;
      const cardViewRow = StyleSheet.flatten(styles.cardViewRow);
      const contentContainer = StyleSheet.flatten(styles.contentContainer);

      return (
            <Container>
                <ScrollView style={contentContainer}>
                    <TouchableOpacity
                        onPress={
                            () => navigate('Transfer')
                        }>
                        <Row>
                            <Image
                                styleName="small rounded-corners"
                                source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-3.png' }}
                            />
                            <View styleName="vertical stretch">
                                <Subtitle>Wilco Cover David Bowie&#39;s "Space Oddity"</Subtitle>
                                <Caption>June 21  ->  20:00</Caption>
                            </View>
                            <MaterialIcons name="navigate-next" size={18} color="#000" />
                        </Row>
                        <Divider styleName="line" />
                    </TouchableOpacity>
                </ScrollView>

            </Container>
      );
    }
}

export default VendorPartnerList;
