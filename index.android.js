/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Index from './src/Index'

export default class Chats extends Component {
  render() {
    return (
      <Index />
    );
  }
}


AppRegistry.registerComponent('Chats', () => Chats);
