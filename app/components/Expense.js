import React, { Component } from 'react';
import { Icon, Button, Input, Label, Item, Form, H1, CardItem, Card, Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';

export default class Expense extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Card>
            <CardItem>
              <Body>
                <H1>BDT: 1500</H1>
                <Text>
                   This Month Total Expense
                </Text>
              </Body>
            </CardItem>
          </Card>

          <Card>

            <Form>
              <Item floatingLabel>
                <Label>Amount. ex: 50</Label>
                <Input />
              </Item>
              <Item floatingLabel last>
                <Label>Items Name: ex: Alu, Potol</Label>
                <Input />
              </Item>

              <Button>
                <Text>ADD Expense</Text>
              </Button>
            </Form>

          </Card>

          <Card>
            <CardItem header>
              <Text>This Month Expense List</Text>
            </CardItem>

            <CardItem>
              <Icon active name="logo-googleplus" />
                <Text>Google Plus</Text>
              <Right>
                <Text>BDT 50</Text>
              </Right>
             </CardItem>

             <CardItem>
              <Icon active name="logo-googleplus" />
                <Text>Google Plus</Text>
              <Right>
                <Text>BDT 50</Text>
              </Right>
             </CardItem>

             <CardItem>
              <Icon active name="logo-googleplus" />
                <Text>Google Plus</Text>
              <Right>
                <Text>BDT 50</Text>
              </Right>
             </CardItem>

             <CardItem>
              <Icon active name="logo-googleplus" />
                <Text>Google Plus</Text>
              <Right>
                <Text>BDT 50</Text>
              </Right>
             </CardItem>
           </Card>


        </Content>
      </Container>
    );
  }
}