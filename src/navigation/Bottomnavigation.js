import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { PhoneIcon, HouseIcon, UserRoundIcon } from 'lucide-react-native';

// screens
import HomeScreen from '../screens/HomeScreen';
import HelpLineScreen from '../screens/HelpLineScreen';
import ProfileScreen from '../screens/ProfileScreen';


// packages
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { BOTTOM_BAR_COLORS } from '../theme/colors';


const Tab = createBottomTabNavigator();

export const CustomBottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: BOTTOM_BAR_COLORS.bg_blue,
          height: hp(8),
          marginBottom: hp(2),
          borderRadius: hp(500), 
          position: 'absolute', 
          marginHorizontal: hp(4), 
        },
        tabBarLabelStyle: { fontSize: hp(1.8) },
        tabBarActiveTintColor: BOTTOM_BAR_COLORS.text_white,
        tabBarInactiveTintColor: BOTTOM_BAR_COLORS.inactive_color
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size , focused}) => (
            <HouseIcon
              absoluteStrokeWidth={true}
              strokeWidth={focused ? 1.5 : 2}
              color={color}
              size={hp(3.5)}
            />
          ),
        }}
      />
      <Tab.Screen
        name="HelpLine"
        component={HelpLineScreen}
        options={{
          tabBarIcon: ({ color, size , focused}) => (
            <PhoneIcon
              absoluteStrokeWidth={true}
              strokeWidth={focused ? 1.5 : 2}
              color={color}
              size={hp(3.5)}

            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <UserRoundIcon
              absoluteStrokeWidth={true}
              strokeWidth={ focused ? 1.5 : 2}
              color={color}
              size={hp(3.5)}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
