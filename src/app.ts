import { Navigation } from 'react-native-navigation';

import { registerScreens } from './screens';

registerScreens();

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
