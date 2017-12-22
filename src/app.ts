import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import { registerScreens } from './screens';
import configureStore from './store/configure-store';

const store = configureStore();
const state = store.getState();

registerScreens(store, Provider);

export default () => {
  Navigation.startTabBasedApp({
    tabs: [
      {
        label: 'One',
        screen: 'joinmee.FirstTabScreen',
        title: 'Screen One',
      },
    ],
  });
};
