import { Dimensions, Platform } from 'react-native';

const IS_ANDROID = Platform.OS === 'android';
const { height, width } = Dimensions.get('window');

export default{
    IS_ANDROID,
    ANDROID_STATUSBAR: 24,
    DEVICE_HEIGHT: IS_ANDROID ? height - 24 : height,
    DEVICE_WIDTH : width,
    BACKGROUND_COLOR: 'rgb(44,59,77)',
    ACCENT_COLOR: 'rgb(250,112,93)',
    THIRD_COLOR: 'rgb(245,200,98)'
}