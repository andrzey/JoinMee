import { StyleSheet } from 'react-native';

import { FontStyle, RegularFontWeight } from './base-styles';

export default StyleSheet.create({
    large: {
        fontFamily: FontStyle.fontFamily,
        fontSize: FontStyle.fontSize.large,
        fontWeight: RegularFontWeight,
    },
    normal: {
        fontFamily: FontStyle.fontFamily,
        fontSize: FontStyle.fontSize.normal,
        fontWeight: RegularFontWeight,
    },
    small: {
        fontFamily: FontStyle.fontFamily,
        fontSize: FontStyle.fontSize.small,
        fontWeight: RegularFontWeight,
    },
});
