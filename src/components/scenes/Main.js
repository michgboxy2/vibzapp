import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

const logo = require("../../assets/vibzn-logo.png");

class Main extends Component {
  constructor() {
    super();

    this.blogButtonPress = this.blogButtonPress.bind(this);
    this.videoButtonPress = this.videoButtonPress.bind(this);
  }

  blogButtonPress() {
		this.props.navigation.navigate('Blog');
	}

	videoButtonPress() {
		this.props.navigation.navigate('Video');
	}

  render() {
    return(
      <View style={styles.container}>
				<View>
					<Image 
						source={logo}
						style={styles.logo}
					/>
				</View>
				<View style={styles.storyView}>
					<Text style={styles.story}>
						All the latest updates on Sports, Fashion, 
						Music, Technology, Art, Cars and Lifestyle 
						      right at your fingertips.
					</Text>
				</View>
				<TouchableOpacity style={styles.button} onPress={this.blogButtonPress}>
					<Text style={styles.textStyle}>
						VIBZN DAILY
					</Text>
				</TouchableOpacity>	
				<TouchableOpacity style={styles.button2} onPress={this.videoButtonPress}>
					<Text style={styles.textStyle}>
						VIBZN VIDEOS
					</Text>
				</TouchableOpacity>
			</View>
    );
  }
}

const styles = {
	container: {
		flex: 1,
		backgroundColor: '#1b1b1b',
		justifyContent: 'flex-end',
		alignItems: 'center'
	},
	storyView: {
		alignItems: 'center',
		height: 60,
		width: 250,
		marginBottom: 50
	},
	story: {
		fontSize: 14,
		color: "#ffffff",
		alignItems: 'center',
		marginTop: 50,
		position: 'relative',
		textAlign: 'center',
		fontFamily: "ProximaNova-Regular"
	},
	button: {
		height: 55,
		width: 270,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
    backgroundColor: "#f79c1d",
		marginTop: 50
	},
	button2: {
		height: 55,
		width: 270,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
    backgroundColor: "#d82727",
		marginTop: 40,
		marginBottom: 70
	},
	textStyle: {
		fontSize: 18,
		color: "#ffffff",
		fontFamily: "ProximaNova-Bold"
	}
}

export default Main;