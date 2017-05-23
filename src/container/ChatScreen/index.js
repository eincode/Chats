import React, { Component } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView } from 'react-native';

import metrics from '../../config/metrics';

import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';

export default class ChatScreen extends Component {

    static navigationOptions = {
        title: 'Boy',
        headerStyle: {
            backgroundColor: metrics.BACKGROUND_COLOR
        },
        headerTitleStyle: {
            color: 'white'
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <KeyboardAvoidingView
                    style={styles.keyboard}
                    keyboardVerticalOffset={-115}
                    behavior={'padding'}
                >
                    <View style={styles.chatInputContainer}>

                        <View style={styles.chatInput}>
                            <CustomTextInput
                                name={'chat'}
                                ref={(ref) => this.chatInputRef = ref}
                                placeholder={'Type your message here'}
                                editable={true}
                                returnKeyType={'next'}
                                blurOnSubmit={false}
                                withRef={true}
                                onSubmitEditing={() => this.passwordInputRef.focus()}
                                onChangeText={(value) => this.setState({ email: value })}
                                isEnabled={true}
                            />
                        </View>
                        <View style={styles.send}>
                            <CustomButton
                                text={'Send'}
                                buttonStyle={styles.buttonStyle}
                            />
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    buttonStyle: {
        backgroundColor: metrics.ACCENT_COLOR
    },

    chatInput: {
        flex: 1,
        marginRight: 10
    },

    send: {
        justifyContent: 'center',
        flex: 0.2,
        marginHorizontal: 5
    },

    chatInputContainer: {
        flex: 1,
        alignItems: 'center',
        width: metrics.DEVICE_WIDTH,
        height: 50,
        flexDirection: 'row',
        bottom: 0,
    },

    keyboard: {
        position: 'absolute',
        bottom: 0,
        height: 60,
        backgroundColor: metrics.BACKGROUND_COLOR
    }
})