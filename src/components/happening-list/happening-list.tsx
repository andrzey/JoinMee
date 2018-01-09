import * as React from 'react';
import { FlatList } from 'react-native';

import HappeningListItem from './happening-list-item';

interface IHappeningListProps {
    happenings: any[];
}

export default class HappeningList extends React.Component<IHappeningListProps> {
    public render() {
        const happeningArray = [
            {
                // tslint:disable-next-line:max-line-length
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
                id: 1,
                name: 'Lorem ipsum dolor sit',
                place: 'Excepteur sint',
                time: 'Mandag 2. januar',
            },
            {
                // tslint:disable-next-line:max-line-length
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
                id: 2,
                name: 'Dolor purus non enim',
                place: 'Excepteur sint',
                time: 'Mandag 2. januar',
            },
        ];

        return (
            <FlatList
                data={happeningArray}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <HappeningListItem happening={item} />}
            />
        );
    }
}
