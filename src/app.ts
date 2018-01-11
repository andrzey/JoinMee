import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import { iconsLoaded, iconsMap } from '../src/common/app-icons';
import { registerScreens, ScreenKeys } from './containers/registerScreens';
import configureStore from './store/configure-store';

const store = configureStore();

registerScreens(store, Provider);

export default () => {
  iconsLoaded.then(() => {
    Navigation.startTabBasedApp({
      tabs: [
        {
          icon: iconsMap['ios-timer-outline'],
          label: 'One',
          screen: ScreenKeys.HAPPENING_TAB_SCREEN,
          title: 'Screen One',
        },
      ],
    });
  });
};
