import { StyleSheet } from 'react-native';

import { Colors, Spacing } from '../../../base/base-styles';
import { BoldFontWeight, FontStyle } from '../../../base/base-styles';

const size = 50;
const borderStyles = {
    borderColor: Colors.white,
    borderRadius: size / 2,
    borderWidth: 1,
    height: size,
    width: size,
};

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: Spacing.margin,
        marginTop: Spacing.margin,
        width: '100%',
    },
    counterText: {
        color: Colors.white,
        fontFamily: FontStyle.fontFamily,
        fontSize: FontStyle.fontSize.large,
        fontWeight: BoldFontWeight,
    },
    image: {
        ...borderStyles,
    },
    lastImage: {
        alignItems: 'center',
        justifyContent: 'center',
        ...borderStyles,
        backgroundColor: Colors.lightGrey,
    },
    overImage: {
        ...borderStyles,
        marginLeft: -(2 * Spacing.margin),
    },
});
