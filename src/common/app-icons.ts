import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

const replaceSuffixPattern = /--(active|big|small|very-big)/g;
const icons = {
    'ios-person': [30, '#000'],
    'ios-person--active': [30, '#000'],

    'ios-timer-outline': [30, '#bbb'],
};

const defaultIconProvider = Ionicons;

// tslint:disable-next-line:prefer-const
let iconsMap = {};

const iconsLoaded = new Promise((resolve, reject) => {
    Promise.all(
        Object.keys(icons).map((iconName) => {
            const Provider = icons[iconName][2] || defaultIconProvider;

            return Provider.getImageSource(
                iconName.replace(replaceSuffixPattern, ''),
                icons[iconName][0],
                icons[iconName][1],
            );
        }),
    ).then((sources) => {
        Object.keys(icons)
            .forEach((iconName, idx) => iconsMap[iconName] = sources[idx]);

        resolve(true);
    });
});

export {
    iconsMap,
    iconsLoaded,
};
