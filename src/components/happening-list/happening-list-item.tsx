import * as React from 'react';
import { TouchableOpacity } from 'react-native';

import { Text, View } from '../base/index';

interface IHappeningListItemProps {
    happening: any;
}

export default class HappeningListItem extends React.Component<IHappeningListItemProps> {
    public render() {
        const { name, place } = this.props.happening;

        return (
            <TouchableOpacity>
                <View vertical center border>
                    <Text fontSize={20}>{name}</Text>
                    <Text fontSize={15}>{place}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}
