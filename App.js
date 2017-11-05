/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Root } from "native-base";

import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';

import AppWithNavigationState from './app/navigators/AppNavigator';
import store from './app/store/store.js'

// ------------------------------------------------------------------
export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Provider store={store}>
        <Root>
        <AppWithNavigationState />
        </Root>
      </Provider>
    );
  }
}
