import React from 'react';
import {
  StyleSheet, Text, View, Button, TouchableOpacity, ScrollView, Dimensions, Image
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import { Font } from 'expo';
import getImage from '../components/getImage';

const {width, height} = Dimensions.get('screen');

export default class Homescreen extends React.Component {
  constructor(){
    super()
    this.state = {
      fontLoaded: false
    }
  }

  async componentDidMount() {
    await Font.loadAsync({
      'homescreen-font': require('../assets/fonts/Staatliches-Regular.ttf'),
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            { this.state.fontLoaded ? (
              <Text style={styles.title}>B A O</Text>
            ) : null}
            <Image source={getImage('bao')} style={styles.logo}/>

        { this.state.fontLoaded ? (
          <TouchableOpacity style={styles.playButton} onPress={()=>this.props.navigation.reset([NavigationActions.navigate({ routeName: 'GameScreen' })], 0)}>
            <Text style={styles.playButtonText}>TAP THAT SHIT</Text>
          </TouchableOpacity> ) : null }
        {  this.state.fontLoaded ? (
           <TouchableOpacity style={styles.changeCharButton} onPress={()=>this.props.navigation.reset([NavigationActions.navigate({ routeName: 'ChangeChar' })], 0)}>
             <Text style={styles.playButtonText}>CHOOSE SHIT</Text>
           </TouchableOpacity> ) : null }
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcf1e4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  playButton: {
    backgroundColor: 'rgb(157, 0, 0)',
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 50,
    paddingRight: 50,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    top: 1,
    marginTop: height*0.05
  },
  changeCharButton: {
    backgroundColor: 'rgb(157, 0, 0)',
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 50,
    paddingRight: 50,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    top: 1,
    marginTop: height*0.05
  },
  playButtonText: {
    fontFamily: 'homescreen-font',
    color: 'rgb(255, 255, 255)',
    fontSize: 35
  },
  logo: {
    width: 200,
    height: 200,
    top: 1,
  },
  title: {
    fontSize: 40,
    color: 'rgb(157, 0, 0)',
    fontFamily: 'homescreen-font',
    paddingBottom: 100,
    paddingTop: 20,
  }
});
