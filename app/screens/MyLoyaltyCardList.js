import PropTypes from "prop-types";
import React, { Component } from "react";
import { Container, Content, Card, CardItem, Text, Body } from "native-base";

class MyLoyaltyCardList extends Component {
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

export default MyLoyaltyCardList;
