/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import {createStackNavigator, createAppContainer} from 'react-navigation';

import { Provider } from 'react-redux';
import configureStore from './configureStore';

import HomePage from './containers/HomePage';

const store = configureStore();

const MainNavigator = createStackNavigator({
  Home: { screen: HomePage }
}, {
  initialRouteName: 'Home' ,
  defaultNavigationOptions: {
    headerTitle: <Text style={{
      color: 'white',
      fontFamily: 'Gabriela-Regular',
      fontWeight: '200',
      fontSize: 40,
      marginLeft: 'auto',
      marginRight: 'auto'
    }}>Search user</Text>,
    headerStyle: {
      backgroundColor: '#243650'
    }
  },
});

const AppContainer = createAppContainer(MainNavigator);

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
