import React from 'react';
import { View, Text, ScrollView, Image, Dimensions } from 'react-native';
import moment from "moment";
import HTML from "react-native-render-html";
import { Toolbar } from "react-native-material-ui";
import RelatedPosts from './RelatedPosts';

const dimensions = Dimensions.get('window');
const imageWidth = dimensions.width;

const escapeRegExp = (content) => {
	let escapedContent = "";

	escapedContent = content.replace(/&nbsp;/g,'');
	escapedContent = escapedContent.replace(/\&.*/,'');
	escapedContent = escapedContent.replace(/&#8220;/g,'"');
	escapedContent = escapedContent.replace(/&#8221;/g,'"');
	escapedContent = escapedContent.replace(/&#8217;/g,"'");
	escapedContent = escapedContent.replace(/(<([^>]+)>)/ig,'');

	return escapedContent;
}

const postData = (date) => {
	let check = moment(date),
	    month = check.format('MMM'),
	    day   = check.format('DD'),
	    year  = check.format('YYYY');

	let time = month + " " + day + ", " + year;
	return time;
}

const PostDetails = (props) => {
	let { data, category, author } = props.navigation.state.params;
	console.log('data', data);
	console.log('category', category);
	console.log('author', author);

	let image = data.jetpack_featured_media_url;
	let time = postData(data.date_gmt);
	let content = data.content.rendered;
	let title = data.title.rendered;
	let { containerStyle, titleStyle, authorStyle, imageStyle, contentStyle, textStyle } = styles;
  let relatedPosts = data["jetpack-related-posts"];
  
  const { navigation } = props;

//	content = escapeRegExp(content);
	title = escapeRegExp(title);
  
	return(
		<ScrollView style={containerStyle}>
      <Toolbar
        style={{ 
          container: { backgroundColor: "white", height: 50 }, 
          leftElement: { color: "black" }
        }}
        leftElement="arrow-back"
        onLeftElementPress={() => {navigation.goBack()}}
      />
			<View style={{ marginLeft:10, marginRight: 15, marginTop: 10 }}>
				<Text style={titleStyle}>{title}</Text>
				<Text style={authorStyle}>By {author ? author : "Ayo"}{"  *  "}{time}{"  *  "}{category}</Text>
				<Image source={{uri: image}} style={imageStyle}/>
				<HTML 
					html={content} 				
					tagsStyles={{
						p: {  
							fontWeight: "400", 
							fontSize: 18, 
							marginTop: 10, 
							marginBottom: 10,
							fontFamily: "ProximaNova-Bold",
						}
					}}
				/>
			</View>
			<Text style={textStyle}>Related Posts</Text>
			<RelatedPosts data={relatedPosts}/>
		</ScrollView>
	)
}

const styles = {
	containerStyle: {
		flex: 1,
		backgroundColor: "#fff",
	},
	titleStyle: {
		fontFamily: "ProximaNova-Bold",
		fontSize: 20,
	//	fontWeight: 'bold',
	},
	authorStyle: {
		fontFamily: "ProximaNova-Bold",
		marginTop: 10,
		opacity: 0.5
	},
	imageStyle: {
		height: 200,
		width: imageWidth - 25,
		marginTop: 10,
	},
	contentStyle: {
		fontFamily: "ProximaNova-Regular",
		fontWeight: "400",
		fontSize: 16,
		marginTop: 10,
	},
	textStyle: {
		textAlign: "left",
		paddingLeft: 5, 
		fontFamily: "ProximaNova-Bold",
		fontWeight: "bold",
		fontSize: 18,
	}
}

export default PostDetails;
