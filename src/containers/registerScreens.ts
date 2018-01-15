import { Navigation } from 'react-native-navigation';

import Happening from '../components/happening/happening';
import HappeningTab from './happening-tab';

export enum ScreenKeys {
    HAPPENING_SCREEN = 'joinmee.HAPPENING_SCREEN',
    HAPPENING_TAB_SCREEN = 'joinmee.HAPPENING_TAB_SCREEN',
}

export function registerScreens(store, provider) {
    Navigation.registerComponent(ScreenKeys.HAPPENING_TAB_SCREEN, () => HappeningTab, store, provider);
    Navigation.registerComponent(ScreenKeys.HAPPENING_SCREEN, () => Happening, store, provider);
}
