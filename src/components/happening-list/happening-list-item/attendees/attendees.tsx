import * as React from 'react';
import { Image, View } from 'react-native';

import Styles from './attendees-styles';
import Counter from './counter';

interface IAttendeesProps {
    attendee?: any[];
}

export default class Attendees extends React.PureComponent<IAttendeesProps> {
    public render() {

        const items = this.createSomething(this.createArray());
        const counterNumber = this.createArray().length - 4;

        return (
            <View style={Styles.container}>
                <Image style={Styles.image} source={require('../../../../../../assets/profile.jpg')} />
                {
                    items.map((item, index) => {
                        return <Image key={index} style={Styles.overImage} source={require('../../../../../../assets/profile.jpg')} />;
                    })
                }
                <Counter number={counterNumber} />
            </View>
        );
    }

    private createSomething = (array) => {
        const images = [];

        for (let index = 0; index < 3; index++) {
            images.push(array[index]);
        }
        return images;
    }

    private createArray = () => {
        const source = '../../../../../../assets/profile.jpg';
        return [source, source, source, source, source, source, source];
    }
}
