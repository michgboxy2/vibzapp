import React, { Component } from "react";
import { View, Text, ImageBackground, ActivityIndicator } from "react-native";


const splash = require("../../assets/splash.png");

class Splash extends Component {
	
  render() {
  	const { imgContainer, container } = styles;
    return (
      <ImageBackground source={splash} style={imgContainer}>
        <View style={container}>
          <ActivityIndicator animating size="large" color="#ffffff" />
        </View>
      </ImageBackground>
    );
  }
}

const styles = {
	imgContainer: {
    flex: 1,
    backgroundColor: "#ffffff",
	},
  container: {
    flex: 1,
		justifyContent: "flex-end",
		alignItems: "center",
    backgroundColor: "transparent",
  },
  logo: {},
}

export default Splash;