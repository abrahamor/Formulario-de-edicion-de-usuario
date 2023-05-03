import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { NavigationScreenProp } from 'react-navigation';
// import { users } from '../resources/users';
import { ListItem } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import useForm from '../hooks/useForm';
import { initialState } from '../resources/users';

interface UsersNavigation {
  navigation: NavigationScreenProp<any,any>,
}

export default function UsersScreen({navigation}: UsersNavigation) {
  
  const [users] = useForm(initialState);

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Users Screen
      </Text>
      {
        users.map(({ id, name,role,address,salary }) => 
          (
            <ListItem
              key={id}
              title={name}
              leading={<Icon name="email-open" size={24} />}
              trailing={props => <Icon name="chevron-right" {...props} />}
              onPress = {() => navigation.navigate("User", {id,name,role,address,salary})}
            />
          )
        )
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});