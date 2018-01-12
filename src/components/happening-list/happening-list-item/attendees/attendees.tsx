import * as React from 'react';
import { Image, View } from 'react-native';

import Styles from './attendees-styles';
import Counter from './counter';

interface IAttendeesProps {
    attendees: any[];
}

export default class Attendees extends React.PureComponent<IAttendeesProps> {
    public render() {
        const { attendees } = this.props;
        const counter = attendees.length;
        const items = this.createAttendeesArray(counter);
        const counterNumber = (counter < 5) ? 0 : counter - 4;

        return (
            <View style={Styles.container}>
                <Image style={Styles.creatorImage} source={require('../../../../../../assets/profile.jpg')} />
                {
                    items.map((item, index) => {
                        return <Image key={index} style={Styles.overImage} source={require('../../../../../../assets/profile.jpg')} />;
                    })
                }
                {
                    counter > 4 &&
                    <Counter number={counterNumber} />
                }
            </View>
        );
    }

    private createAttendeesArray = (attendeesCount) => {
        const images = [];
        const counter = (attendeesCount < 5) ? attendeesCount - 1 : 3;
        const source = '../../../../../../assets/profile.jpg';

        for (let index = 0; index < counter; index++) {
            images.push(source);
        }
        return images;
    }
}
