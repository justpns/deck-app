import PropTypes from "prop-types";
import React, { Component } from "react";
import { 
    Container, 
    Header, 
    Content, 
    Card, 
    CardItem, 
    Text, 
    Body,
} from "native-base";

class MyHistoryList extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Card>
            <CardItem header>
              <Text>My History List</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>//Your text here</Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Text>GeekyAnts</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default MyHistoryList;
