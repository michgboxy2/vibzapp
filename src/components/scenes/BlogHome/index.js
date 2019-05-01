import React, { Component } from "react";
import { View } from "react-native";
import { Toolbar } from "react-native-material-ui";

import TabHost from "./TabHost";

class BlogHome extends Component {

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
          rightElement="more-vert"
          onRightElementPress={() => {navigation.navigate("Country")}}
          centerElement="VIBZN"
        />
        <TabHost screenProps={{ rootNavigation:navigation }} />
      </View>
    );
  }
}

export default BlogHome;
