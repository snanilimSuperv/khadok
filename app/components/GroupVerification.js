import React, { Component } from "react";
import { connect } from 'react-redux';
import { Platform } from "react-native";
import { Container, Header, Title, Label, Input, Content, Button, Icon, Text, Right, Body, Left, Picker, Form, Item as FormItem } from "native-base";
const Item = Picker.Item;
import {subGroup} from '../actions/login';




class GroupVerification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected2: undefined
    };
  }
  onSubmit(){
    this.props.dispatch(subGroup());
  }
  onValueChange2(value: string) {
    this.setState({
      selected2: value
    });
  }
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Placeholder Picker</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Form>
            <Picker
              mode="dropdown"
              placeholder="Select One"
              selectedValue={this.state.selected2}
              onValueChange={this.onValueChange2.bind(this)}
            >
              <Item label="Wallet" value="key0" />
              <Item label="ATM Card" value="key1" />
              <Item label="Debit Card" value="key2" />
              <Item label="Credit Card" value="key3" />
              <Item label="Net Banking" value="key4" />
            </Picker>

            
              <Label>Password</Label>
              <Input />
            

            <Button block success onPress={()=>{this.onSubmit()}}>
              <Text>Submit</Text>
            </Button>

          </Form>
        </Content>
      </Container>
    );
  }
}


const mapStateToProps = (state) => {
  return {

  };
};

export default connect(mapStateToProps)(GroupVerification);