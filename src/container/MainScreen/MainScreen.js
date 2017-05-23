import React, {Component} from 'react';
import { View, StyleSheet, Text } from 'react-native';

import ChatContainer from './ChatContainer';
import CustomButton from '../../components/CustomButton';
import Toolbar from './Toolbar'
import metrics from '../../config/metrics';

export default class MainScreen extends Component{

    static navigationOptions = {
        title: 'Chats',
        headerStyle: {
            backgroundColor: metrics.BACKGROUND_COLOR
        },
        headerTitleStyle: {
            color: 'white'
        },
        headerBackTitleStyle: {
            color: 'white'
        }
    }

    state = {
        chats: [1,2,3]
    }
    render(){
        const { navigate } = this.props.navigation;
        return (
            <View style = {styles.container}>
                <View style = {styles.content}>
                    <ChatContainer dataSource = {this.state.chats} onPress = {() => navigate('chatScreen')}/>
                </View>
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  toolbar: {
      flex: 1
  },
  content: {
      flex: 7
  }
})