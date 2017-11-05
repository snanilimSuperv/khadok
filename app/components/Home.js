import React, { Component } from 'react';
import {TouchableHighlight} from 'react-native';
import { ActionSheet, View, Fab, ScrollableTab, Tabs, Tab, Container, Title, Content, Button, Left,  Icon, Text } from 'native-base';

import TdMeal from './TdMeal';
import Members from './Members';


var BUTTONS = [
  { text: "Option 0", icon: "american-football", iconColor: "#2c8ef4" },
  { text: "Option 1", icon: "analytics", iconColor: "#f42ced" },
  { text: "Option 2", icon: "aperture", iconColor: "#ea943b" },
  { text: "Delete", icon: "trash", iconColor: "#fa213b" },
  { text: "Cancel", icon: "close", iconColor: "#25de5b" }
];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;

export default class AnatomyExample extends Component {

  constructor(props) {
    super(props)
    this.state = {
      active: 'false',
      clicked: 0
    };
  }


  render() {
    return (
      <Container>
        <Tabs renderTabBar={()=> <ScrollableTab />}>
          <Tab heading="Today's Meal">
            <TdMeal />
          </Tab>
          <Tab heading="Member">
            <Members />
          </Tab>
          <Tab heading="Tab3">
            <TdMeal />
          </Tab>
          <Tab heading="Tab4">
            <Members />
          </Tab>
          <Tab heading="Tab5">
            <Members />
          </Tab>
        </Tabs>


        <View>
          <Content padder style={{position: 'absolute', right: 10, bottom: 10}}>
            <Button    
            style={{
                borderWidth:1,
                borderColor:'rgba(0,0,0,0.2)',
                alignItems:'center',
                justifyContent:'center',
                width: 65,
                height: 65,
                backgroundColor:'#666',
                borderRadius:100,
              }}
              onPress={() =>
              ActionSheet.show(
                {
                  options: BUTTONS,
                  cancelButtonIndex: CANCEL_INDEX,
                  destructiveButtonIndex: DESTRUCTIVE_INDEX,
                  title: "Testing ActionSheet"
                },
                buttonIndex => {
                  this.setState({ clicked: BUTTONS[buttonIndex] });
                }
              )}
            >
              <Text style={{fontSize: 30}}>
                +
              </Text>
            </Button>
          </Content>
        </View>
      </Container>
    );
  }
}