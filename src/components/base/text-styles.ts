import { StyleSheet } from 'react-native';

import { FontStyle } from './base-styles';

export default StyleSheet.create({
    large: {
        fontFamily: FontStyle.fontFamily,
        fontSize: FontStyle.fontSize.large,
        fontWeight: '400',
    },
    normal: {
        fontFamily: FontStyle.fontFamily,
        fontSize: FontStyle.fontSize.normal,
        fontWeight: '300',
    },
    small: {
        fontFamily: FontStyle.fontFamily,
        fontSize: FontStyle.fontSize.small,
        fontWeight: '300',
    },
});
