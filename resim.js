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
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height
var icon = require('./images/icon.png');
import Tabs from './router';

export default class resim extends Component {

  static navigationOptions = {
    headerTitle:<Image source={icon} style={{alignSelf:'center'}}/>
}
  constructor(props) {
      super(props);
      this.state = {
        isLoading: true,
      }
    }

  componentDidMount()
  {
    axios.get('url')
    .then(response =>this.onResponse(response.data));
  }
  onResponse(gel){
    this.setState({
      isLoading:false,
      dat:gel.banner
    });
  }
  render()
  {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }
    return(
      <View style={{flex:1}}>
       
        <Image source={{uri:this.state.dat.Image}} style={{height:width*(850/1024),width:width}} />

        <Tabs />
        
        <TextInput
          style={{width:width-40,height:40,borderWidth:1,borderColor:'white',borderRadius:5,alignSelf:'center',backgroundColor:'white',position: 'absolute',marginTop:width-90}}
          placeholder='Yemek Arayın!'
          underlineColorAndroid='transparent'>
        </TextInput>
      </View>
    );
  }
}
