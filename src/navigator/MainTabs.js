import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { HomeScreen, LibraryScreen, SettingsScreen } from '@/screens';

const Tab = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        name="Library"
        component={LibraryScreen}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
      />
    </Tab.Navigator>
  );
}