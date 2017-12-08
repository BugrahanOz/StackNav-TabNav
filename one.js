import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  AppRegistry,
  Button,
  ActivityIndicator,
  Dimensions,
  Image,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';
import axios from 'axios';
var ls = require('react-native-local-storage');
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height
const kisi = require('hizirYemek/images/group.png');
const zamann =require('hizirYemek/images/clock.png');
export default class one extends Component
{
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
  onResponse(veri)
  {
    this.setState({
      isLoading :false,
      gelenveri:veri.daily
    });
  }

  Don()
  {
    const{navigate}=this.props.navigation;
    
    return this.state.gelenveri.map((userData,val,val2,val3,val4,val5,val6,val7,val8) => {
    return <TouchableOpacity key={val} onPress={()=>ls.save('id',userData.id) .then(()=>{navigate('Detay',{'dailydetail': userData.id})})}>
    <View key={val2} style={{width:width-80,height:width*(600/1024),borderBottomRightRadius:5,borderBottomLeftRadius:5,backgroundColor:'#eeeeee',margin:10}}>
      <Image key={val3} source={{uri:userData.Image}} style={{width:width-80,height:width*(600/1024)-80,borderTopRightRadius:5,borderTopLeftRadius:5}}/>
      <Text key={val4} style={{fontWeight:'bold',marginLeft:5}}>{userData.Title}</Text>
    <View style={{flexDirection:'row'}}>
      <View key={val5} style={{flexDirection:'row',marginTop:5}}>
        <Image source={kisi} style={{height:20,width:20,marginRight:5,marginLeft:5}}/>
        <Text key={val6}>{userData.Servings}</Text>
      </View>
      <View key={val7} style={{flexDirection:'row',marginTop:5}}>
        <Image source={zamann} style={{height:20,width:20,marginRight:5,marginLeft:5}}/>
        <Text key={val8}>{userData.CookTime}</Text>
      </View>
    </View>
    </View>
    </TouchableOpacity>
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
      <View style={styles.container}>
      <ScrollView horizontal={true}>{this.Don()}</ScrollView>
      </View>
    );
  }
}
const styles=StyleSheet.create({
  container:{
    flex:1,
  }
});
