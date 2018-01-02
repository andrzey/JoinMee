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
                <View direction='vertical' center>
                    <Text>{name}</Text>
                    <Text>{place}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}
