import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Body } from 'native-base';
export default class CardHeaderFooterExample extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Card>
            <CardItem header>
              <Text>NativeBase</Text>
            </CardItem>
         </Card>
         <Card>
            <CardItem header>
              <Text>Morning Meal</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  10
                </Text>
              </Body>
            </CardItem>
         </Card>

         <Card>
            <CardItem header>
              <Text>Lunch</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  07
                </Text>
              </Body>
            </CardItem>
         </Card>

         <Card>
            <CardItem header>
              <Text>Dinner</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  15
                </Text>
              </Body>
            </CardItem>
         </Card>
        </Content>
      </Container>
    );
  }
}