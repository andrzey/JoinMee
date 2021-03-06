import * as React from 'react';
import { TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import HappeningList from '../components/happening-list/happening-list';
import * as happeningActions from '../happening/happening.actions';

interface IHappeningTabProps {
    actions: any;
    happenings: any[];
    navigator: any;
}

class HappeningTab extends React.Component<IHappeningTabProps> {
    public componentDidMount() {
        // this.props.actions.fetchHappenings();
    }

    public render() {
        const { navigator } = this.props;

        return (
            <HappeningList happenings={this.props.happenings} navigator={navigator} />
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(happeningActions, dispatch),
    };
};

const mapStateToProps = (state, ownProps) => {
    return {
        happenings: state.happenings,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HappeningTab);
