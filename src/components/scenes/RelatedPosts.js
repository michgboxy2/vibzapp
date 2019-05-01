import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, Dimensions, Linking } from 'react-native';
import TimeAgo from 'react-native-timeago';
import Card from '../../custom/Card';

const { width } = Dimensions.get("window");

class RelatedPosts extends Component{
	constructor(props) {
		super(props);
		this.state = {
			url: ""
		}

		this.handleList = this.handleList.bind(this);
	}

	handleList = ({ item }) => {
		let title = item.title,
				image = item.img.src,
				url   = item.url;

		const {
			containerStyle,
			postStyle,
			titleStyle,
			imageStyle
		} = styles;

		return (
			<TouchableOpacity onPress={() => Linking.openURL(url)} activeOpacity={0.7}>
				<Card style={{margin: 0}}>
					<View style={containerStyle}>
						<View style={postStyle}>
							<Text style={titleStyle}>{title}{'\n'}</Text>
							<Text style={{
								fontFamily: "open-sans-bold", 
								fontSize: 8, 
								marginHorizontal: 5,
							}}>
								{item.date}
							</Text>
						</View>
						<Image source={{uri: image}} style={imageStyle}/>
					</View>
				</Card>
			</TouchableOpacity>
		)
	}

	render() {
		
		return(
      <View style={{ flex:1, backgroundColor: "#1b1b1b" }}>
        <FlatList
          data={this.props.data}
          renderItem={this.handleList}
          keyExtractor={(item, index) => index.toString() }
        />
      </View>	
		)
	}
}

const styles = {
	containerStyle: {
		flex:1, 
		flexDirection: "row", 
		backgroundColor: '#fff'
	},
	postStyle: {
		position:'relative',
		width: width - 150,
		justifyContent: 'space-evenly',
		marginBottom:5,
		marginTop: 5,
		marginRight: 5
	},
	imageStyle: {
		alignItems: 'flex-end',
		height: 120, 
		width:150, 
		position:'absolute', 
		right:0
	},
	titleStyle: {
		fontSize: 14,
		fontWeight: '300',
		fontWeight: 'bold',
		fontFamily:"open-sans-bold",
		alignSelf: "flex-start",
	//	paddingLeft: 5,
		paddingRight: 10,
		marginHorizontal: 5,
	}
}


export default RelatedPosts;