import React, { Component } from "react";
import { View } from "react-native";
import { Toolbar } from "react-native-material-ui";
import CountryList from "./CountryList";


class Country extends Component {

  render() {
    const { navigation } = this.props;

    return(
      <View style={styles.modalViewStyle}>
        <Toolbar
          style={{ container: { backgroundColor: "black" } }}
          leftElement="arrow-back"
          onLeftElementPress={() => {navigation.goBack()}}
        />
        <View style={{ flex: 1 }}>
          <CountryList />
        </View>
      </View>
    )
  }
}


const styles = {
  modalViewStyle: {
    flex:1, 
    justifyContent:'center', 
		alignItems:'center', 
		backgroundColor:'#1b1b1b'
	},
};

export default Country;
