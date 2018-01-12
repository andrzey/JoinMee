import { StyleSheet } from 'react-native';

import { Colors, Spacing } from '../../../base/base-styles';
import { BoldFontWeight, FontStyle } from '../../../base/base-styles';

const size = 35;

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
        fontSize: FontStyle.fontSize.normal,
        fontWeight: BoldFontWeight,
    },
    creatorImage: {
        ...borderStyles,
    },
    lastImage: {
        alignItems: 'center',
        justifyContent: 'center',
        ...borderStyles,
        backgroundColor: Colors.lightBlue,
        marginLeft: (Spacing.margin / 2),
    },
    overImage: {
        ...borderStyles,
        marginLeft: (Spacing.margin / 2),
    },
});
