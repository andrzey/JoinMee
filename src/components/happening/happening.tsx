import * as React from 'react';
import { Text, View } from 'react-native';

interface IHappeningProps {
    happening?: any;
}

export default class Happening extends React.Component<IHappeningProps> {
    public render() {
        return (
            <View>
                <Text>Hello</Text>
            </View>
        );
    }
}
