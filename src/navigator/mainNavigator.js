import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen5116254Navigator from '../features/BlankScreen5116254/navigator';
import BlankScreen4116253Navigator from '../features/BlankScreen4116253/navigator';
import BlankScreen3116252Navigator from '../features/BlankScreen3116252/navigator';
import BlankScreen2116251Navigator from '../features/BlankScreen2116251/navigator';
import BlankScreen1116215Navigator from '../features/BlankScreen1116215/navigator';
import BlankScreen0116214Navigator from '../features/BlankScreen0116214/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen5116254: { screen: BlankScreen5116254Navigator },
BlankScreen4116253: { screen: BlankScreen4116253Navigator },
BlankScreen3116252: { screen: BlankScreen3116252Navigator },
BlankScreen2116251: { screen: BlankScreen2116251Navigator },
BlankScreen1116215: { screen: BlankScreen1116215Navigator },
BlankScreen0116214: { screen: BlankScreen0116214Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
