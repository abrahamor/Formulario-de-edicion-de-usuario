import React,{useEffect,useState} from 'react';
import { Text, View, StyleSheet, Button,TextInput } from 'react-native';
import Constants from 'expo-constants';
import useForm from '../hooks/useForm';
import { UserContext, UserContextData, initialState } from '../resources/users';

export default function UserScreen({navigation, route}) {
  
  const [users, handleChange] = useForm(initialState);
  
  const contextData:UserContextData={
    data: users,
    handleChange
  }
  const { id,name,role,address,salary } = users;
  const [na,setNa] = useState('')
  useEffect(()=>{
    setNa(route.params.name)
  },[])

  
  return (
    <UserContext.Provider value={contextData}>
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          {route.params.name}
        </Text>
        <TextInput
          style={styles.input}
          placeholder='Name'
          value={name}
          onChangeText={(value: string) => handleChange('name', value)}
        />
        <TextInput
          style={styles.input}
          placeholder='Role'
          value={role}
          onChangeText={(value: string) => handleChange('role', value)}
        />
        <TextInput
            style={styles.input}
            placeholder='Salary'
            value={salary}
            onChangeText={(value: string) => handleChange('salary', value)}
        />
        <TextInput
          style={styles.input}
          placeholder='Address'
          value={address}
          onChangeText={(value: string) => handleChange('address', value)}
        />
        <Button
        title = "Previous Screen"
        onPress = {() => navigation.navigate("Users")}
        />
      </View>
    </UserContext.Provider>
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

});