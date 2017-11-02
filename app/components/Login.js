import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text } from 'native-base';

import {subLogin} from '../actions/login';


class Login extends Component {

  onLogin(){
    this.props.dispatch(subLogin());
  }

  render() {

    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input />
            </Item>

            <Button block success onPress={()=>{this.onLogin()}}>
              <Text>Login</Text>
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

export default connect(mapStateToProps)(Login);