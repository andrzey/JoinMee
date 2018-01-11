import * as React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import TextStyle from '../../base/text-styles';
import Attendees from './attendees/attendees';
import ItemStyle from './happening-list-item-styles';
import TimeAndPlace from './time-and-place';

interface IHappeningListItemProps {
    happening: any;
}

export default class HappeningListItem extends React.Component<IHappeningListItemProps> {
    public render() {
        const { description, name, place, time } = this.props.happening;

        return (
            <TouchableOpacity>
                <View style={ItemStyle.container}>
                    <Text style={TextStyle.large}>{name}</Text>
                    <TimeAndPlace time={time} place={place} />
                    <Text style={TextStyle.normal}>{description}</Text>
                    <Attendees />
                </View>
            </TouchableOpacity>
        );
    }
}
