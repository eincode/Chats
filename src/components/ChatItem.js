import React, { PropTypes } from 'react';
import { StyleSheet, Text, Image } from 'react-native';

import { View } from 'react-native-animatable';

import TouchableView from './TouchableView';
import metrics from '../config/metrics'

import boy from '../../assets/boy.png';
import girl from '../../assets/girl.png';

const ChatItem = ({ read, unreadCount, onPress, index, ...otherProps }) => {
    const delay = 100 + 100 * index;
    return (
        <View {...otherProps} style={styles.parent} animation={'slideInUp'} delay={delay} duration={400}>
            <View animation={'fadeIn'} delay={delay} duration={900}>
                <TouchableView onPress={onPress} style={styles.container}>
                    <Image source={boy} style={styles.picture} />
                    <View style={styles.textContainer}>
                        <View style={styles.name}><Text style={{ fontSize: 15 }}>Boy</Text></View>
                        <View style={styles.lastChat}><Text style={{ color: '#9B9FA4', fontSize: 13 }}>Boy</Text></View>
                    </View>
                </TouchableView>
                <View style={styles.separatorLine} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    parent: {
        width: metrics.DEVICE_WIDTH,
        marginTop: 10
    },
    container: {
        height: 50,
        flexDirection: 'row'
    },
    picture: {
        flex: 1,
        height: 50,
        marginHorizontal: 10,
        justifyContent: 'center'
    },
    textContainer: {
        paddingHorizontal: 10,
        flex: 4,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    name: {
        flex: 1,
        justifyContent: 'center'
    },
    lastChat: {
        flex: 2,
        marginTop: 5
    },
    separatorLine: {
        flex: 1,
        borderWidth: StyleSheet.hairlineWidth,
        height: StyleSheet.hairlineWidth,
        borderColor: '#9B9FA4',
        marginTop: 10
    },
})

export default ChatItem;