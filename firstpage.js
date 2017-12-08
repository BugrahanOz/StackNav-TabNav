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
  Dimensions,
  TextInput
} from 'react-native';
import axios from 'axios';
import Tabs from './router';
import {StackNavigator,TabNavigator} from 'react-navigation';
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height
var icon = require('./images/icon.png');
import searchdetail from './src/components/searchdetail';
import detay from './src/components/detay';
import malzemeler from './src/components/malzemeler';
import nasil from './src/components/nasil';
import puf from './src/components/puf';
import Resim from './resim';

export default class firstpage extends Component {
  
    static navigationOptions = {
      headerTitle:<Image source={icon} style={{alignSelf:'center'}}/>
  }
   render()
   {
     return(
       <View style={{flex:1}}>
          <Gecis />
         </View>
     );
   }
  }
 const Gecis = StackNavigator({
  Firstpage: {screen: Resim},
  Detay: {screen: detay},
  Malzemeler: {screen: malzemeler},
  Nasil: {screen: nasil},
  Puf: {screen: puf},
},
);
