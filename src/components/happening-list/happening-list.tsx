import * as React from 'react';
import { FlatList } from 'react-native';

import HappeningListItem from './happening-list-item';

interface IHappeningListProps {
    happenings: any[];
}

export default class HappeningList extends React.Component<IHappeningListProps> {
    public render() {
        return (
            <FlatList
                data={this.props.happenings}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <HappeningListItem happening={item} />}
            />
        );
    }
}
