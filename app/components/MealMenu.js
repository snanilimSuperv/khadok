import React, { Component } from 'react';
import { Icon, Body, Card, Container, Header, Content, List, ListItem, Text, Left, Right, Switch } from 'native-base';
export default class ListDividerExample extends Component {
  render() {
    return (
      <Container>

        <Content>
          <Card>
            <List>
              <ListItem icon itemDivider>
                <Left>
                  <Icon name="plane" />
                </Left>
                <Body>
                <Text>Today's Menu</Text>
                </Body>
                <Right>
                  <Switch value={true} />
                </Right>
              </ListItem>                    
              <ListItem >
                <Text>Aaron Bennet</Text>
              </ListItem>
              <ListItem>
                <Text>Ali Connors</Text>
              </ListItem>
            </List>
          </Card>

          <Card>
            <List>
              <ListItem icon itemDivider>
                <Left>
                  <Icon name="plane" />
                </Left>
                <Body>
                <Text>Today's Menu</Text>
                </Body>
                <Right>
                  <Switch value={true} />
                </Right>
              </ListItem>                    
              <ListItem >
                <Text>Aaron Bennet</Text>
              </ListItem>
              <ListItem>
                <Text>Ali Connors</Text>
              </ListItem>
            </List>
          </Card>

          <Card>
            <List>
              <ListItem icon itemDivider>
                <Left>
                  <Icon name="plane" />
                </Left>
                <Body>
                <Text>Today's Menu</Text>
                </Body>
                <Right>
                  <Switch value={true} />
                </Right>
              </ListItem>                    
              <ListItem >
                <Text>Aaron Bennet</Text>
              </ListItem>
              <ListItem>
                <Text>Ali Connors</Text>
              </ListItem>
            </List>
          </Card>

          <Card>
            <List>
              <ListItem icon itemDivider>
                <Left>
                  <Icon name="plane" />
                </Left>
                <Body>
                <Text>Today's Menu</Text>
                </Body>
                <Right>
                  <Switch value={true} />
                </Right>
              </ListItem>                    
              <ListItem >
                <Text>Aaron Bennet</Text>
              </ListItem>
              <ListItem>
                <Text>Ali Connors</Text>
              </ListItem>
            </List>
          </Card>
        </Content>
      </Container>
    );
  }
}