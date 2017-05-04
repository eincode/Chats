import React, {Component} from 'react';
import AuthScreen from './container/AuthScreen';
import MainScreen from './container/MainScreen';
import metrics from './config/metrics';
import { View, StatusBar } from 'react-native';

export default class Index extends Component{

    constructor(){
        super();
        this.state = {
            isLoggedIn : false,
            isLoading : false,
            isReady : false
        }
    }

    componentWillMount(){
        this._simulateLogin = this._simulateLogin.bind(this);
        this._simulateSignUp = this._simulateSignUp.bind(this);
    }

    _simulateLogin = (username, password) => {
        this.setState({isLoading: true});
        setTimeout(() => {this.setState({isLoggedIn: true, isLoading: false})}, 1000);
    }

    _simulateSignUp = (username, password, fullName) => {
        this.setState({isLoading: true});
        setTimeout(() => {this.setState({isLoggedIn: true, isLoading: false})}, 1000);
    }

    render(){
        if (this.state.isReady){
            return(
                <View style = {{flex: 1}}>
                    <StatusBar
                        backgroundColor = {metrics.BACKGROUND_COLOR}
                        barStyle ="light-content"
                    />
                    <MainScreen />
                </View>
            )
        } else {
            return(
                <AuthScreen
                    login = {this._simulateLogin}
                    signup = {this._simulateSignUp}
                    isLoggedIn = {this.state.isLoggedIn}
                    isLoading = {this.state.isLoading}
                    onLoginAnimationCompleted = {() => this.setState({isReady: true})}
                />
            )
        }
    }
}