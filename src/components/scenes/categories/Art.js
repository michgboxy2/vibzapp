import React, { Component } from "react";
import { View, Text } from "react-native";
import { Toolbar } from "react-native-material-ui";

class Art extends Component {

  render() {
    const { navigation } = this.props;
    return(
      <View style={{ flex: 1, backgroundColor: "#1b1b1b" }}>
        <Toolbar
          style={{ 
            container: { backgroundColor: "#1b1b1b", height: 60, marginBottom: 10, shadowColor: "#fff", elevation: 0 }, 
            centerElementContainer: { alignItems: "center", },
            titleText: { fontSize: 22, fontWeight: "bold" }, 
          }}
          leftElement="menu"
          onLeftElementPress={() => {navigation.navigate("DrawerOpen")}}
        />
        <Text>
          Art Screen
        </Text>
      </View>
    );
  }
}

export default Art;