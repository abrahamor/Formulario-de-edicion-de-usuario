import * as React from 'react';
import UsersScreen from './screens/UsersScreen.tsx';
import UserScreen from './screens/UserScreen.tsx';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tabs = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        initialRouteName={UsersScreen}

        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;
            
            if (rn === "User") {
              iconName = focused ? 'list' : 'list-outline';

            } else if (rn === "Users") {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}

        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70}
        }}
      >
          <Tabs.Screen
            name="Users"
            component={UsersScreen}
            options={{title: "Users"}}
          />
        <Tabs.Screen
          name="User"
          component={UserScreen}
          options={{title: "User"}}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}

