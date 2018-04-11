import React from 'react'
import {Platform} from 'react-native';
import { StackNavigator , DrawerNavigator, addNavigationHelpers} from 'react-navigation';

import IntroScreen from '../scenes/IntroScreen';
import SideBar from '../scenes/SideBar';
import ManageAccountScreen from '../scenes/ManageAccountScreen';
import ToSScreen from '../scenes/TOS';
import AboutScreen from '../scenes/About';
import PolicyScreen from '../scenes/Policy';
import ContactUsScreen from '../scenes/Contact';

const HomeDrawerNav = DrawerNavigator({
    ManageAccounts:{screen:ManageAccountScreen},
    ToS:{screen:ToSScreen},
    About:{screen:AboutScreen},
    Policy:{screen:PolicyScreen},
    Contact:{screen:ContactUsScreen}
},{      
    mode: Platform.OS === 'ios' ? 'modal' : 'card',      
    cardStyle: { backgroundColor: 'white', shadowOpacity: 0 },
    contentComponent: props =><SideBar {...props} /> ,
    drawerPosition:'left'
  })

const AppNavigator = StackNavigator({
    Intro: {
        screen: IntroScreen,
      },
    Home:{
        screen:HomeDrawerNav
    }
  },{
      headerMode:'none'
  })
export default AppNavigator
//export default HomeScreen