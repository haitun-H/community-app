import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './screens/HomeScreen';
import EarnScreen from './screens/EarnScreen';
import AIScreen from './screens/AIScreen';
import CommunityScreen from './screens/CommunityScreen';
import WalletScreen from './screens/WalletScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === '首页') iconName = focused ? 'home' : 'home-outline';
            else if (route.name === '赚币') iconName = focused ? 'cash' : 'cash-outline';
            else if (route.name === 'AI助手') iconName = focused ? 'chatbubble' : 'chatbubble-outline';
            else if (route.name === '社区') iconName = focused ? 'people' : 'people-outline';
            else if (route.name === '钱包') iconName = focused ? 'wallet' : 'wallet-outline';
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#FF7E36',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        })}
      >
        <Tab.Screen name="首页" component={HomeScreen} />
        <Tab.Screen name="赚币" component={EarnScreen} />
        <Tab.Screen name="AI助手" component={AIScreen} />
        <Tab.Screen name="社区" component={CommunityScreen} />
        <Tab.Screen name="钱包" component={WalletScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}