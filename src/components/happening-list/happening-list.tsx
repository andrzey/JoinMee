import * as React from 'react';
import { FlatList, View } from 'react-native';

import { ScreenKeys } from '../../containers/registerScreens';
import HappeningListItem from './happening-list-item/happening-list-item';
import Styles from './happening-list-styles';

interface IHappeningListProps {
    happenings: any[];
    navigator: any;
}

export default class HappeningList extends React.Component<IHappeningListProps, any> {
    constructor(props) {
        super(props);

        this.state = {
            refreshing: false,
        };
    }

    public render() {
        const happeningArray = [
            {
                attendees: [1, 1, 1, 1, 1, 1],
                // tslint:disable-next-line:max-line-length
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
                id: 1,
                name: 'Lorem ipsum dolor sit',
                place: 'Excepteur sint',
                time: 'Mandag 2. januar',
            },
            {
                attendees: [1, 1, 1, 1, 1],
                // tslint:disable-next-line:max-line-length
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
                id: 2,
                name: 'Dolor purus non enim',
                place: 'Excepteur sint',
                time: 'Mandag 2. januar',
            },
            {
                attendees: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                // tslint:disable-next-line:max-line-length
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
                id: 3,
                name: 'Dolor purus non enim',
                place: 'Excepteur sint',
                time: 'Mandag 2. januar',
            },
            {
                attendees: [1, 1],
                // tslint:disable-next-line:max-line-length
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
                id: 4,
                name: 'Dolor purus non enim',
                place: 'Excepteur sint',
                time: 'Mandag 2. januar',
            },
        ];

        return (
            <FlatList
                data={happeningArray}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <HappeningListItem happening={item} navigate={this.navigate} />}
                ListHeaderComponent={this.renderHeader}
                onRefresh={this.onRefresh}
                refreshing={this.state.refreshing}
            />
        );
    }

    private renderHeader = () => {
        return <View style={Styles.header} />;
    }

    private onRefresh = () => {
        this.setState({ refreshing: true });

        setTimeout(() => {
            this.setState({ refreshing: false });
        }, 1000);
    }

    private navigate = () => {
        this.props.navigator.push({
            screen: ScreenKeys.HAPPENING_SCREEN,
            title: 'Test',
        });
    }
}
