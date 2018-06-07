import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Main from './components/Main';
import CreateQuiz from './components/CreateQuiz';

// uncomment this line to prevent yellow box warnings from being shown
console.disableYellowBox = true;

export default StackNavigator({
  Main: { screen: Main },
  CreateQuiz: { screen: CreateQuiz }
});
