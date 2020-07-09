import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen88484Navigator from '../features/BlankScreen88484/navigator';
import BlankScreen78483Navigator from '../features/BlankScreen78483/navigator';
import Messaging8394Navigator from '../features/Messaging8394/navigator';
import EmailAuth8393Navigator from '../features/EmailAuth8393/navigator';
import CalendarView8392Navigator from '../features/CalendarView8392/navigator';
import BlankScreen48382Navigator from '../features/BlankScreen48382/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
BlankScreen88484: { screen: BlankScreen88484Navigator },
BlankScreen78483: { screen: BlankScreen78483Navigator },
Messaging8394: { screen: Messaging8394Navigator },
EmailAuth8393: { screen: EmailAuth8393Navigator },
CalendarView8392: { screen: CalendarView8392Navigator },
BlankScreen48382: { screen: BlankScreen48382Navigator },
Messenger: { screen: MessengerNavigator },
Calendar: { screen: CalendarNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
