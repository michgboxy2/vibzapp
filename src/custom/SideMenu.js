import React, { Component } from "react";
import { View, ScrollView, Text } from "react-native";
import { DrawerItem } from "react-native-paper";
import { NavigationActions } from "react-navigation";
import IconMd from "react-native-vector-icons/MaterialIcons";
import IconMdc from "react-native-vector-icons/MaterialCommunityIcons";

class SideMenu extends Component {  

  navigateToScreen = (route) => {
    const { navigation } = this.props;
    const navigateAction = NavigationActions.navigate({
      routeName: route,
    });
    navigation.dispatch(navigateAction);
  };

  render() {
    return(
      <View style={{ flex: 1 }}>
        <ScrollView>
          <View style={{ marginTop: 30, marginLeft: 20, marginBottom: 20 }}>
            <Text style={{ fontFamily: "ProximaNova-Bold", fontSize: 18}}>
              CATEGORIES
            </Text>
          </View>
          <DrawerItem
            onPress={() => {
              this.navigateToScreen('Home');
            }}
            icon={<IconMd name="home" size={24}  />}
            label="Home"
          />
          <DrawerItem
            onPress={() => {
              this.navigateToScreen('Art');
            }}
            icon={<IconMd name="art-track" size={24}  />}
            label="Art"
          />
          <DrawerItem
            onPress={() => {
              this.navigateToScreen('Home');
            }}
            icon={<IconMdc name="car" size={24}  />}
            label="Automative"
          />
          <DrawerItem
            onPress={() => {
              this.navigateToScreen('Home');
            }}
            icon={<IconMdc name="pool" size={24}  />}
            label="Entertainment"
          />
          <DrawerItem
            onPress={() => {
              this.navigateToScreen('Home');
            }}
            icon={<IconMdc name="instagram" size={24}  />}
            label="Fashion"
          />
          <DrawerItem
            onPress={() => {
              this.navigateToScreen('Home');
            }}
            icon={<IconMdc name="shopping" size={24}  />}
            label="Footwear"
          />
          <DrawerItem
            onPress={() => {
              this.navigateToScreen('Home');
            }}
            icon={<IconMd name="hotel" size={24}  />}
            label="Lifestyle"
          />
          <DrawerItem
            onPress={() => {
              this.navigateToScreen('Home');
            }}
            icon={<IconMdc name="music-box" size={24}  />}
            label="Mixtapes"
          />
          <DrawerItem
            onPress={() => {
              this.navigateToScreen('Home');
            }}
            icon={<IconMdc name="music" size={24}  />}
            label="Music"
          />
          <DrawerItem
            onPress={() => {
              this.navigateToScreen('Home');
            }}
            icon={<IconMdc name="soccer" size={24}  />}
            label="Sport"
          />
          <DrawerItem
            onPress={() => {
              this.navigateToScreen('Home');
            }}
            icon={<IconMdc name="train" size={24}  />}
            label="Travel"
          />
          <DrawerItem
            onPress={() => {
              this.navigateToScreen('Home');
            }}
            icon={<IconMdc name="trending-up" size={24}  />}
            label="Trending"
          />
          <DrawerItem
            onPress={() => {
              this.navigateToScreen('Home');
            }}
            icon={<IconMdc name="video" size={24}  />}
            label="Videos"
          />
        </ScrollView>
      </View>
    )
  }
}

export default SideMenu;