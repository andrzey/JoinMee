import * as React from 'react';
import { StyleSheet, View as RNView } from 'react-native';

interface IViewProps {
    border?: boolean;
    center?: boolean;
    margin?: boolean;
    vertical?: boolean;
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
        props.border && {
            borderColor: '#e9e9e9',
            borderRadius: 5,
            borderWidth: 1,
        },
        props.vertical && {
            flexDirection: 'column',
        },
        props.margin && {
            margin: 5,
        },
        props.center && {
            alignItems: 'center',
            justifyContent: 'center',
        },
    ]),
});
