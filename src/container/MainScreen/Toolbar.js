import React, { Component, PropTypes } from 'react';
import { View, Text } from 'react-native-animatable';
import { ScrollView, StyleSheet, Image } from 'react-native';

import metrics from '../../config/metrics';
import ViewPager from '../../components/ViewPager';
import boy from '../../../assets/boy.png';
import girl from '../../../assets/girl.png';

export default class Toolbar extends Component {
    static propTypes = {
        onChatsClicked: PropTypes.func,
        onTimelineClicked: PropTypes.func,
        activeIcon: PropTypes.string
    }

    state = {
        children: [
            <Text>1</Text>,
            <Text>2</Text>
        ]
    }

    render() {
        const { onChatsClicked, onTimelineClicked, activeIcon, ...otherProps } = this.props;
        
        return (
            <View {...otherProps} animation={'slideInDown'} duration={400} style={styles.container}>
                <View animation={'fadeIn'} style = {styles.toolbar}>
                    <Text style = {styles.title}>Chats</Text>
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
        flex: 1,
        backgroundColor: metrics.BACKGROUND_COLOR,
        paddingTop: metrics.IS_ANDROID? 0 : metrics.ANDROID_STATUSBAR,
        alignItems: 'center',
        justifyContent: 'center',
    },

    title: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
    },

    iconContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    icon: {
        resizeMode: 'contain',
        flex: 1,
        width: 20,
        height: 20
    }
})