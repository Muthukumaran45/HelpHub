
// packages
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// icons
import Icon from 'react-native-vector-icons/MaterialIcons';
import { PhoneIcon, HouseIcon, UserRoundIcon } from 'lucide-react-native'
// screens
import HomeScreen from '../screens/HomeScreen';
import HelpLineScreen from '../screens/HelpLineScreen';
import ProfileScreen from '../screens/ProfileScreen';



const Tab = createBottomTabNavigator();

// Custom Bottom Tab Navigator
export const CustomBottomTabs = () => {

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: '#fff', height: 60 },
        tabBarLabelStyle: { fontSize: 12 },
        tabBarActiveTintColor: '#6200EE',
        tabBarInactiveTintColor: '#222',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <HouseIcon
              absoluteStrokeWidth={true}
              strokeWidth={1.5}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="HelpLine"
        component={HelpLineScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <PhoneIcon
              absoluteStrokeWidth={true}
              strokeWidth={1.5}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <UserRoundIcon
              absoluteStrokeWidth={true}
              strokeWidth={1.5}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};