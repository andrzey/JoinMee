import * as React from 'react';
import { StyleSheet, Text as RNText } from 'react-native';

interface ITextProps {
    fontSize?: 15 | 20;
}

export default class Text extends React.PureComponent<ITextProps> {
    public render() {
        const styles = createStyles(this.props);

        return (
            <RNText style={styles.text}>
                {this.props.children}
            </RNText>
        );
    }
}

const createStyles = (props: ITextProps) => StyleSheet.create({
    text: StyleSheet.flatten([
        {
            fontSize: 10,
        },
        props.fontSize && {
            fontSize: props.fontSize,
        },
    ]),
});
