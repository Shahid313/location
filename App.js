/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import MapView  from 'react-native-maps'

class App extends React.Component{
  state = {
    countryRegion:'pakistan',
    adminDistrict:'swat',
    locality:'saidu',
    addressLine:'shifa hospital',
    maxResults:1,
    key:'Amd4ZHaPKhbcIvu7ZMvGu1Ev7p3pyD86uoLlPH_QqpXGDQz9sOTEEzkbIeJN0oMB',
    latitude:'',
    longitude:''
  }
  getLocation = async () => {
    await fetch(`http://dev.virtualearth.net/REST/v1/Locations?countryRegion=${this.state.countryRegion}&adminDistrict=${this.state.adminDistrict}&locality=${this.state.locality}&addressLine=${this.state.addressLine}&maxResults=${this.state.maxResults}&key=${this.state.key}`,{
      method: 'GET',
    }).then(response => response.json()).then(
    response => {
      // this.setState({latitude:response.resourceSets[0].resources[0].bbox[0]})
      // this.setState({longitude:response.resourceSets[0].resources[0].bbox[1]})
      console.log(response.resourceSets[0].resources[0].bbox)

    })
  }

  componentDidMount(){
    this.getLocation()
  }
render(){

  return(
    <SafeAreaView style={styles.container}>
       <MapView
       style={styles.map}
       region={{
         latitude: 34.793555,
         longitude: 72.290411,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}/>
    </SafeAreaView>
  )
}
}

const styles = StyleSheet.create({
  map:{
    width:'100%', 
    height:'100%'
  },

  container:{
    flex:1, 
    alignItems:'center'
  }
})

export default App;
