import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  AppRegistry,
  Button,
  Image,
  ActivityIndicator,
  Dimensions
} from 'react-native';
import axios from 'axios';
import { TabNavigator } from "react-navigation";
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height
import one from './one';
import two from './two';
import Detay from './src/components/detay';
import Resim from './resim';

const MainScreenNavigator=TabNavigator({
  
  Günlük: {screen: one},
  Popüler: {screen: two}
},{
  tabBarPosition:'top',
  tabBarOptions:{
    style:{
      backgroundColor:'#eeeeee',
      elevation: 1,shadowColor: 'black',
      shadowOpacity: 0.1,
      borderBottomWidth:1,
      borderColor:'red',
      shadowRadius: StyleSheet.hairlineWidth,
      shadowOffset: {
        height: StyleSheet.hairlineWidth,
      },
    },
    indicatorStyle:{
      backgroundColor: '#990000',
      position: 'absolute',
      left: 0,
      bottom: 0,
      right: 0,
      height: 5,
      borderTopRightRadius:5,
      borderTopLeftRadius:5,
    },
    labelStyle:{
      backgroundColor: 'transparent',
      color:'#5c5c3d',
      fontFamily:'coolvetica',
      fontWeight:"bold"
    }

  }
});
export default MainScreenNavigator;
