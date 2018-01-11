import { StyleSheet } from 'react-native';
import { BorderStyles, Colors, Spacing } from '../../base/base-styles';

export default StyleSheet.create({
    container: {
        ...BorderStyles,
        alignItems: 'center',
        marginBottom: Spacing.margin,
        marginLeft: Spacing.margin,
        marginRight: Spacing.margin,
        padding: Spacing.margin,
    },
    infoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: Spacing.margin,
        marginTop: Spacing.margin,
        width: '100%',
    },
    timeAndPlaceContainer: {
        alignItems: 'center',
        flexDirection: 'row',
    },
});
