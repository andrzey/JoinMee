import * as React from 'react';
import { Text, View } from 'react-native';

import Styles from './attendees-styles';

interface IRestCounterProps {
    number: number;
}

export default class RestCounter extends React.Component<IRestCounterProps> {
    public render() {
        const count = `${this.props.number}`;

        return (
            <View style={Styles.lastImage}>
                <Text style={Styles.counterText}>{count}</Text>
            </View>
        );
    }
}
