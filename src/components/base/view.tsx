import * as React from 'react';
import { StyleSheet, View as RNView } from 'react-native';

interface IViewProps {
    direction?: 'vertical';
    margin?: boolean;
}

export default class View extends React.PureComponent<IViewProps> {
    public render() {
        const styles = createStyles(this.props);

        return (
            <RNView style={styles.view}>
                {this.props.children}
            </RNView>
        );
    }
}

const createStyles = (props: IViewProps) => StyleSheet.create({
    view: StyleSheet.flatten([
        props.direction && {
            flexDirection: 'column',
        },
        props.margin && {
            margin: 5,
        },
    ]),
});
