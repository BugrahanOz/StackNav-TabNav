import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  AppRegistry
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Firstpage from './firstpage';
import detay from './src/components/detay';
import malzemeler from './src/components/malzemeler';
import puf from './src/components/puf';
import nasil from './src/components/nasil';
import Gun from './src/components/one';
import Pop from './src/components/two';




export default Gecis = StackNavigator({
  AnaSayfa: {screen: Firstpage},
  Detay: {screen: detay},
  Malzemeler: {screen: malzemeler},
  Nasil: {screen: nasil},
  Puf: {screen: puf},
  Gun: {screen: Gun},
  Pop: {screen: Pop},
},
);
