import React, {Component, PropTypes} from 'react';
import { KeyboardAvoidingView, LayoutAnimation, Platform, StyleSheet, UIManager } from 'react-native';
import { Image, View } from 'react-native-animatable';

import imgLogo from '../../../assets/chat.png';
import metrics from '../../config/metrics';

import Opening from './Opening';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

const IMAGE_WIDTH = metrics.DEVICE_WIDTH * 0.6;

if (Platform.OS === 'android') UIManager.setLayoutAnimationEnabledExperimental(true);

export default class AuthScreen extends Component{
    static propTypes = {
        isLoggedIn: PropTypes.bool.isRequired,
        isLoading: PropTypes.bool.isRequired,
        signup: PropTypes.func.isRequired,
        login: PropTypes.func.isRequired,
        onLoginAnimationCompleted: PropTypes.func.isRequired
    }

    state = {
        visibleForm: null
    }

    componentWillUpdate(nextProps){
        if(!this.props.isLoggedIn && nextProps.isLoggedIn){
            this._hideAuthScreen();
        }
    }

    _hideAuthScreen = async () => {
        await this._setVisibleForm(null);
        await this.logoImgRef.fadeOut(800);
        this.props.onLoginAnimationCompleted();
    }

    _setVisibleForm = async (visibleForm) => {
        if (this.state.visibleForm && this.formRef && this.formRef.hideForm){
            await this.formRef.hideForm();
        }
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
        this.setState({visibleForm});
    }

    render(){
        const { isLoggedIn, isLoading, signup, login } = this.props;
        const { visibleForm } = this.state;
        const formStyle = (!visibleForm) ? {height: 0} : {marginTop: 40};
        return(
            <View style  = {styles.container}>
                <Image
                    animation={'bounceIn'}
                    duration={1200}
                    delay={200}
                    ref={(ref) => this.logoImgRef = ref}
                    style={styles.logoImg}
                    source={imgLogo}
                />
                {(!visibleForm && !isLoggedIn) && (
                    <Opening
                        onCreateAccountPress={() => this._setVisibleForm('SIGNUP')}
                        onSignInPress={() => this._setVisibleForm('LOGIN')}
                    />
                )}
                <KeyboardAvoidingView
                    keyboardVerticalOffset = {-100}
                    behavior = {'padding'}
                    style = {[formStyle, styles.bottom]}
                >
                    {(visibleForm == 'SIGNUP') && (
                        <SignupForm
                            ref = {(ref) => this.formRef = ref}
                            onLoginLinkPress = {() => this._setVisibleForm('LOGIN')}
                            onSignupPress = {signup}
                            isLoading = {isLoading}
                        />
                    )}
                    {(visibleForm == 'LOGIN') && (
                        <LoginForm 
                            ref = {(ref) => this.formRef = ref}
                            onSignupLinkPress = {() => this._setVisibleForm('SIGNUP')}
                            onLoginPress = {login}
                            isLoading = {isLoading}
                        />
                    )}
                </KeyboardAvoidingView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        width: metrics.DEVICE_WIDTH,
        height: metrics.DEVICE_HEIGHT,
        paddingTop: 24,
        backgroundColor: 'white'
    },
    logoImg: {
        flex: 1,
        height: null,
        width: IMAGE_WIDTH,
        alignSelf: 'center',
        resizeMode: 'contain',
        marginVertical: 30
    },
    bottom: {
        backgroundColor: 'rgb(44,59,77)'
    }
})