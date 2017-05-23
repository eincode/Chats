import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import MainScreen from './MainScreen';
import ChatScreen from '../ChatScreen'

const Navigator = StackNavigator({
    mainScreen: {screen: MainScreen},
    chatScreen: {screen: ChatScreen}
})

export default Navigator;