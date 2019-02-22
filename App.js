import React from 'react';
import {
  StyleSheet, Text, View, Image, Animated, TouchableWithoutFeedback
 } from 'react-native';
import { Font, Audio, Timers } from 'expo';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import LottieView from 'lottie-react-native';
import Homescreen from './screens/Homescreen';
import Game from './screens/Game';
import ChangeChar from './screens/ChangeChar';

const soundObject = new Audio.Sound();

export class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      </View>
    );
  }
}

const AppStackNavigator = createStackNavigator({
  Home: Homescreen,
  GameScreen: Game,
  ChangeChar: ChangeChar,
}, {
  defaultNavigationOptions: {
    headerTintColor: '#fcf1e4',
    headerStyle: {
      backgroundColor: '#fcf1e4',
      borderBottomWidth: 0,
      height: 0
    }
  }
});

const AppContainer = createAppContainer(AppStackNavigator);

export default AppContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcf1e4',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
