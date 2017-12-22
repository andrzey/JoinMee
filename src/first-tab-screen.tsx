import * as React from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as userActions from './user/user.actions';

const instructions = Platform.select({
    android: 'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
    ios: 'Press Cmd+R to reload,\n' +
        'Cmd+D or shake for dev menu',
});

class FirstTabScreen extends React.Component<{ actions: any; }, {}> {
    public render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native!
        </Text>
                <Text style={styles.instructions}>
                    To get started, edit App.js
        </Text>
                <TouchableHighlight onPress={() => { this.props.actions.loginUser('test'); }}>
                    <Text>Press me!</Text>
                </TouchableHighlight>
                <Text style={styles.instructions}>
                    {instructions}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        flex: 1,
        justifyContent: 'center',
    },
    instructions: {
        color: '#333333',
        marginBottom: 5,
        textAlign: 'center',
    },
    welcome: {
        fontSize: 20,
        margin: 10,
        textAlign: 'center',
    },
});

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(userActions, dispatch),
    };
};

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.user,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FirstTabScreen);
