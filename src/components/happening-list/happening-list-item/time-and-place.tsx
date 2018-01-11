import * as React from 'react';
import { Image, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { iconsMap } from '../../../common/app-icons';
import { Colors, FontStyle, Spacing } from '../../base/base-styles';
import TextStyle from '../../base/text-styles';
import ItemStyle from './happening-list-item-styles';

interface ITimeAndPlaceProps {
    place: string;
    time: string;
}

export default class TimeAndPlace extends React.PureComponent<ITimeAndPlaceProps> {
    public render() {
        const { place, time } = this.props;

        return (
            <View style={ItemStyle.infoContainer}>
                <View style={ItemStyle.timeAndPlaceContainer}>
                    <Icon name='ios-timer-outline' size={FontStyle.fontSize.small} color={Colors.black} style={{ marginRight: Spacing.margin }} />
                    <Text style={TextStyle.small}>{time}</Text>
                </View>
                <View style={ItemStyle.timeAndPlaceContainer}>
                    <Icon name='ios-pin-outline' size={FontStyle.fontSize.small} color={Colors.black} style={{ marginRight: Spacing.margin }} />
                    <Text style={TextStyle.small}>{place}</Text>
                </View>
            </View>
        );
    }
}
