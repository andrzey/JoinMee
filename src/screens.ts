import { Navigation } from 'react-native-navigation';

import FirstTabScreen from './first-tab-screen';

export function registerScreens() {
    Navigation.registerComponent('joinmee.FirstTabScreen', () => FirstTabScreen);
}
