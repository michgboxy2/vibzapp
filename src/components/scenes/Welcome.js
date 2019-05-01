import React, { Component } from 'react';
import { View, Text, ImageBackground, Dimensions, TouchableOpacity, AsyncStorage, StatusBar } from 'react-native';
import Swiper from 'react-native-swiper';
import Main from "./Main";

const WIN_WIDTH = Dimensions.get("window").width,
  WIN_HEIGHT = Dimensions.get("window").height;

class Welcome extends Component {
	constructor() {
		super();
		this.state = {
			welcome: false
		}

		this.handlePress = this.handlePress.bind(this);
	}

  handlePress() {
    this.props.navigation.navigate("Main");
	}

	render() {
		return(
			<View style={styles.wrapper}>
				<Swiper loop={false} showsPagination={false}>
					<View>
						<ImageBackground source={require("../../assets/1.png")} style={styles.image}>
							<StatusBar barStyle="dark-content" backgroundColor="black" translucent={false} hidden={false}/>
						</ImageBackground>
					</View>
					<View>
						<ImageBackground source={require("../../assets/2.png")} style={styles.image}>
							<StatusBar barStyle="dark-content" backgroundColor="black" translucent={false}/>
						</ImageBackground>
					</View>
					<View>
						<TouchableOpacity onPress={this.handlePress}>
							<ImageBackground source={require("../../assets/3.png")} style={styles.image}>
								<StatusBar barStyle="dark-content" backgroundColor="black" translucent={false}/>
							</ImageBackground>
						</TouchableOpacity>
					</View>
				</Swiper>
			</View>
		);
	}
}

const styles = {
	wrapper: {
		backgroundColor: 'black',
		flex: 1
	},
	image: {
		width: '100%',
    height: '100%'
	}
}

export default Welcome;