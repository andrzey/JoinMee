import { Navigation } from 'react-native-navigation';

import FirstTabScreen from './first-tab-screen';

export function registerScreens(store, provider) {
    Navigation.registerComponent('joinmee.FirstTabScreen', () => FirstTabScreen, store, provider);
}
