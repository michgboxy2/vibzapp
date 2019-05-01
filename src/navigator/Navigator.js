import React from "react";
import { StackNavigator } from "react-navigation";
import Welcome from "../components/scenes/Welcome";
import Main from "../components/scenes/Main";
import Blog from "../components/scenes/Blog";
import Video from "../components/scenes/Video";
import Country from "../components/scenes/Country";
import TabHost from "../components/scenes/BlogHome/TabHost";
import PostDetails from "../components/scenes/PostDetails";

const mainRoutesConfig = {
  Welcome: {
    screen: Welcome
  },
  Main: {
    screen: Main
  },
  Blog: {
    screen: Blog
  },
  Video: {
    screen: Video
  },
  Country: {
    screen: Country
  },
  TabHost: {
    screen: TabHost
  },
  PostDetails: {
    screen: PostDetails
  },
}

const defaultNavigatorOptions = {
  headerMode: "none",
  navigationOptions: {
    header: null,
  },
  mode: "modal",
};

export const MainIntroNavigator = StackNavigator(mainRoutesConfig, {
  ...defaultNavigatorOptions,
  initialRouteName: 'Welcome',
});
