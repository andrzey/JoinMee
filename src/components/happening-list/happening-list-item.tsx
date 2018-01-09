import * as React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import TextStyle from '../base/text-styles';
import ItemStyle from './happening-list-item-styles';

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
                    <View style={ItemStyle.infoContainer}>
                        <Text style={TextStyle.small}>{time}</Text>
                        <Text style={TextStyle.small}>{place}</Text>
                    </View>
                    <Text style={TextStyle.normal}>{description}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}
