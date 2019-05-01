import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Flag from 'react-native-flags';

const CountryList = (props) => {

	const country = [
		{code: "NG", name: "NIGERIA"},
		{code: "ZA", name: "SOUTH AFRICA"},
		{code: "GH", name: "GHANA"},
		{code: "KE", name: "KENYA"},
		{code: "TZ", name: "TANZANIA"},
		{code: "US", name: "INTERNATIONAL"}
	];

	let result = [];
	const { viewStyle, textStyle } = styles;

	country.forEach((value) => {
    const { code, name } = value;
    
		result.push(
      <TouchableOpacity key={code}>
        <View style={viewStyle}>
          <Flag code={code} size={48}/><Text style={textStyle}>{name}</Text>
        </View>
      </TouchableOpacity>
		);
		
		return result;
	});

	return(
		<View>
			{result}
		</View>
	);
}

const styles = {
	viewStyle: {
    marginTop: 40,
		flexDirection: 'row', 
		alignItems:'center'
	},
	textStyle: {
		color:'#fff', 
		textAlign: 'center', 
		fontSize:24,
		paddingLeft: 5,
		fontFamily: "open-sans-bold"
	}
}

export default CountryList;