import React from 'react';
import {
  StyleSheet, Text, View, Button, TouchableOpacity, ScrollView, Dimensions, Image
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import { Font } from 'expo';

const { width, height } = Dimensions.get('screen');

export default class ChangeChar extends React.Component {
  constructor() {
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
            {
              this.state.fontLoaded ? (
                <Text style={styles.title}>PICK A BITCH</Text>
              ) : null
            }
            </View>

            <View style={styles.characterContainer}>

              <TouchableOpacity onPress={()=> {this.props.navigation.replace('GameScreen', {image_dir: 'bao'});}}>
                <Image
                  source={require('../assets/images/bao_logo.png')}
                  style={styles.characterDisplay}
                  />
              </TouchableOpacity>

              <TouchableOpacity onPress={()=> {this.props.navigation.replace('GameScreen', {image_dir: 'milk_tea'});}}>
                <Image
                  source={require('../assets/images/milk_tea.png')}
                  style={styles.characterDisplay}
                  />
              </TouchableOpacity>
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
  title: {
    top: 1,
    marginTop: 100,
    fontSize: 30,
    fontFamily: 'homescreen-font'
  },
  characterContainer: {
    flexDirection: 'row',
  },
  characterDisplay: {
    height: 150,
    width: 150,
    top: 1,
    left: 1,
    marginTop: 50,
  }
});
