import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

import {CustomTabBar} from '../components/ui/CustomTabBar';

import {QuizletScreen, WebViewerScreen} from '../screens';

const Tab = createBottomTabNavigator<RootStackParamList>();

export type RootStackParamList = {
  QuizletScreen: undefined;
  WebViewerScreen: undefined;
};

const AppNavigation = () => {
  return (
    <Tab.Navigator tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: 'Quizlet',
        }}
        name="QuizletScreen"
        component={QuizletScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: 'WebViewer',
        }}
        name="WebViewerScreen"
        component={WebViewerScreen}
      />
    </Tab.Navigator>
  );
};

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  );
};
