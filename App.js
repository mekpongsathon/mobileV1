/*Example of SQLite Database in React Native*/
import React, { Component } from 'react';
//In Version 2+
//import {createStackNavigator} from 'react-navigation';
//In Version 3+
import {createStackNavigator, createAppContainer, DrawerNavigator} from 'react-navigation';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import IOSIcon from "react-native-vector-icons/Ionicons";
import HomeScreen from './pages/HomeScreen';
import RegisterUser from './pages/RegisterUser';
import UpdateUser from './pages/UpdateUser';
import ViewUser from './pages/ViewUser';
import ViewAllUser from './pages/ViewAllUser';
import DeleteUser from './pages/DeleteUser';
import Login from './pages/Login';
import MainScreen from './pages/MainScreen';
import SideMenu from './pages/SideMenu';
import {createDrawerNavigator} from 'react-navigation'

 
const App = createStackNavigator({
  
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'Welcom to TreeProject',
      headerStyle: { backgroundColor: '#1e90ff' },
      headerTintColor: '#ffffff',
    },
  },
  View: {
    screen: ViewUser,
    navigationOptions: {
      title: 'View User',
      headerStyle: { backgroundColor: '#1e90ff' },
      headerTintColor: '#ffffff',
    },
  },
  ViewAll: {
    screen: ViewAllUser,
    navigationOptions: {
      title: 'Main',
      headerStyle: { backgroundColor: '#1e90ff' },
      headerTintColor: '#ffffff',
    },
  },
  Update: {
    screen: UpdateUser,
    navigationOptions: {
      title: 'Update User',
      headerStyle: { backgroundColor: '#1e90ff' },
      headerTintColor: '#ffffff',
    },
  },
  Register: {
    screen: RegisterUser,
    navigationOptions: {
      title: 'Register User',
      headerStyle: { backgroundColor: '#1e90ff' },
      headerTintColor: '#ffffff',
    },
  },
  Delete: {
    screen: DeleteUser,
    navigationOptions: {
      title: 'Delete User',
      headerStyle: { backgroundColor: '#1e90ff' },
      headerTintColor: '#ffffff',
    },
  },
  Login: {
    screen: Login,
    navigationOptions: {
      title: 'Login',
      headerStyle: { backgroundColor: '#1e90ff' },
      headerTintColor: '#ffffff',
    },
  },
  SideMenuP: {
    screen: SideMenu,
    navigationOptions: {
      title: 'SideMenu',
      headerStyle: { backgroundColor: '#1e90ff' },
      headerTintColor: '#ffffff',
    },
  },
  
  MainScreen: {
    screen: MainScreen,
    navigationOptions: {
      title: 'Home Page',
      headerRight:(
      <TouchableOpacity onPress={() => navigation.navigate("SideMenu")}>
                      <IOSIcon name="ios-menu" size={30} />
                   </TouchableOpacity>),
      headerStyle: { paddingRight: 10, paddingLeft: 15 },
      headerStyle: { backgroundColor: '#1e90ff' },
      headerTintColor: '#ffffff',
    },
    
  },
});
//For React Navigation Version 2+
//export default App;
//For React Navigation Version 3+
export default createAppContainer(App);


