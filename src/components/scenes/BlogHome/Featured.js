import React, { Component } from "react";
import { 
  View, 
  Text, 
  FlatList,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import { NavigationActions } from "react-navigation";
import TimeAgo from 'react-native-timeago';

import Card from "../../../custom/Card";

const categories = [
	{ART: 4968},
	{AUTOMOTIVE: 4963},
	{ENTERTAINMENT:  4},
	{FASHION: 3},
	{FEATURED: 5094},
	{FOOTWEAR: 4967},
	{LIFESTYLE: 6},
	{MIXTAPES: 4978},
	{MUSIC: 5},
	{RANDOM: 1},
	{SPORT: 6185},
	{TRAVEL: 4964},
	{TRENDING: 4966},
	{VIDEOS: 4961},
	{WOMEN: 4965}
];

class Latest extends Component {

  constructor() {
    super();
    this.state = {
      posts: "",
			isLoading: false,
			page: 1,
			per_page: 10,
			refreshing: false,
			author: ""
    }
  }
  
  getAuthorName(id) {
		fetch(`http://www.vibzn.com/wp-json/wp/v2/users/${id}`)
			.then(response => response.json())
			.then(result => {
				let { name } = result;
				this.setState({author: name});
			})
			.catch(error => {
				console.log(error);
			})
	};

	componentDidMount() {
		this.makeRemoteRequest();
  };
  
  componentWillUnmount() {
    this.makeRemoteRequest();
    this.handleRefresh();
  }

	makeRemoteRequest = () => {
		const { page, per_page } = this.state;
		const url = `https://www.vibzn.com/wp-json/wp/v2/posts?categories=5094`;

		this.setState({isLoading: true});

		fetch(url)
			.then((response) => response.json())
			.then((responseJson) => {
				this.setState({
					posts: page == 1 ? responseJson : [ ...this.state.posts,  ...responseJson],
					isLoading: false,
					refreshing: false
				})
			})
			.catch(error => {
				console.log(error);
			})
	};

	handleLoadMore = () => {
    this.setState(
      {
        page: this.state.page + 1,
        refreshing: false,
      },
      () => {
        this.makeRemoteRequest();
      }
    );
  };

  handleRefresh = () => {
    this.setState(
      {
        page: 1,
        refreshing: true,
      },
      () => {
        this.makeRemoteRequest();
      }
    );
  };

  escapeRegExp = (content) => {
		let escapedContent = "";

		escapedContent = content.replace(/&nbsp;/g,'');
		escapedContent = escapedContent.replace(/\&.*/,'');
		escapedContent = escapedContent.replace(/&#8220;/g,'"');
		escapedContent = escapedContent.replace(/&#8221;/g,'"');
		escapedContent = escapedContent.replace(/&#8217;/g,"'");
		escapedContent = escapedContent.replace(/(<([^>]+)>)/ig, '');
		escapedContent = escapedContent.replace(/&#038;/g,'&');

		return escapedContent;
	}

  postNavigator = (item, cat) => {
    const { screenProps:{ rootNavigation }, navigation } = this.props;
    const nav = rootNavigation || navigation;
    // const navigateAction = NavigationActions.navigate({
    //   routeName: "Country",
    // //  params: {data: item, category: cat, author: this.state.author}
    // });
    nav.navigate('PostDetails', { data: item, category: cat, author: this.state.author });
  }

  handleRender = ({ item }) => {
		let { containerStyle, postStyle, categoryStyle, titleStyle, imageStyle } = styles;
    let image = item.better_featured_image;

		let img = image && image.media_details ? image.media_details.sizes.thumbnail.source_url : null;
		let title = item.title.rendered;
		let { author } = item;
		let { navigation, dispatch } = this.props;
		let cat = "";
  //  onOutletSelected
		title = this.escapeRegExp(title);
		this.getAuthorName(author);

		for(var i = 0; i < categories.length; i++) {
			for(var category in categories[i]) {
				if(categories[i][category] == item.categories[0]) {
					cat = category;
				}
			}
    }
    
		return(
			<TouchableOpacity onPress={() => this.postNavigator(item, cat)}>
				<Card>
					<View style={containerStyle}>
						<View style={postStyle}>
							<Text style={categoryStyle}>{cat ? cat : "News"}{'\n'}</Text>
							<Text style={titleStyle}>{title}{'\n'}</Text>
							<TimeAgo time={item.date_gmt} style={{fontFamily: "open-sans-bold", fontSize: 8}}/>
						</View>
						<Image source={{uri: img}} style={imageStyle}/>
					</View>
				</Card> 
			</TouchableOpacity>
		)
	}

  renderFooter = () => {
    if (!this.state.isLoading) return null;

    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: "#CED0CE"
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    );
  };

  render() {
    return(
      <View style={{ flex: 1 }}>
				<FlatList style={{flex:1}}
					data={this.state.posts}
					renderItem={this.handleRender}
					keyExtractor={(item, index) => index.toString() }
					ListFooterComponent={this.renderFooter}
					onEndReached={this.handleLoadMore}
					onRefresh={this.handleRefresh}
					refreshing={this.state.refreshing}
					onEndReachedThreshold={5}
				/>
			</View>
    );
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
		width: 200,
		justifyContent: 'space-evenly',
		marginBottom:5,
		marginTop: 5,
		marginLeft: 5,
		marginRight: 5
	},
	imageStyle: {
		alignItems: 'flex-end',
		height: 130, 
		width:150, 
		position:'absolute', 
		right:0
	},
	titleStyle: {
		fontSize: 14,
		fontWeight: '300',
		fontWeight: 'bold',
		fontFamily:"open-sans-bold",
		paddingRight: 5
	},
	categoryStyle: {
		color:'red', 
		fontSize:12,
		fontWeight: '500',
		fontFamily:"open-sans-bold"
	}
}

export default Latest;