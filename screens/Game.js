import React from 'react';
import { StyleSheet, Text, View, Image, Animated, TouchableWithoutFeedback } from 'react-native';
import { Font, Audio, Timers } from 'expo';
import { LottieView } from 'lottie-react-native';
import getImage from '../components/getImage';

const soundObject = new Audio.Sound();

export default class Game extends React.Component{
  constructor() {
    super()
    this.springValue = new Animated.Value(1)
    this.state = {
      counter: 0,
      fontLoaded: false,
      showLove: 0,
      timePassed: false
    }
  }

  async componentDidMount() {
    await soundObject.loadAsync(require('../assets/sounds/ding_2.mp3'));
    await Font.loadAsync({
      'counter-font': require('../assets/fonts/Staatliches-Regular.ttf'),
    });
    this.setState({ fontLoaded: true });
  }

  springUp() {
    this.springValue.setValue(1)
    Animated.spring(
      this.springValue,
      {
        toValue: 1.2,
        friction: 20
      }
    ).start()
  }

  springDown() {
    this.springValue.setValue(1.2)
    Animated.spring(
      this.springValue,
      {
        toValue: 1,
        friction: 20
      }
    ).start()
  }

  increaseCounter(){
    this.playDing()

    this.springUp()
    this.setState({counter: this.state.counter+1})
    this.setState({showLove: 50})
    this.springDown()
    setTimeout(()=>{this.setState({showLove: 0})}, 2000)
  }
  playDing(){
    soundObject.setPositionAsync(0)
    soundObject.playAsync()
  }

  render() {

    const { navigation } = this.props;
    const char_dir = navigation.getParam('image_dir', 'bao');
    return(
      <View style={styles.container}>
        <View style={styles.container}>
          { this.state.fontLoaded ? (
            <Animated.Text style={{
                fontSize: 45,
                color: "rgb(0, 6, 80)",
                transform: [{scale: this.springValue}],
                fontFamily: 'counter-font',
                bottom: 1,
                marginBottom: 290
              }}
              >{this.state.counter}</Animated.Text>
          ) : null
          }
          <TouchableWithoutFeedback onPress={this.increaseCounter.bind(this)}>
            <Animated.Image source={getImage(char_dir)}
              style={{
                height: 230,
                width: 230,
                transform: [{scale: this.springValue}],
                marginBottom: 250,
                zIndex: 1,
                position: 'absolute',
              }}/>
          </TouchableWithoutFeedback>
        </View>
      </View>


      /**<View style={styles.container}>
        <View style={styles.container}>
          {
            this.state.fontLoaded ? (
            <Animated.Text style={{
            fontSize: 45,
              color: "rgb(0, 6, 80)",
              transform: [{scale: this.springValue}],
              fontFamily: 'counter-font',
              bottom: 1,
              marginBottom: 290
            }}
            >{this.state.counter}</Animated.Text> ) : null
          }
          <LottieView
            source={require('../assets/lottie/coeur.json')}
            autoPlay={true}
            loop={true}
            style= {{
              height: 50,
              width: this.state.showLove,
              marginTop: -50,
              position: 'absolute',
              zIndex: 2,
            }}
            />
          <TouchableWithoutFeedback onPress={this.increaseCounter.bind(this)}>
            <Animated.Image source={require("../assets/images/bao_logo.png")}
            style = {{
              height: 230,
              width: 230,
              transform: [{scale: this.springValue}],
              marginLeft: 60,
              marginBottom: 250,
              zIndex: 1,
              position: 'absolute',
              bottom: 1,
              left: 1
            }}
            />
          </TouchableWithoutFeedback>

        </View>
      </View>**/
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
});
