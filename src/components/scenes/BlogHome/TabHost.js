import React from "react";
import { TabNavigator } from "react-navigation";
import Latest from "./Latest";
import Featured from "./Featured";

export default TabNavigator(
  {
    latest: {
      screen: Latest,
      navigationOptions: () => ({
        tabBarLabel: 'LATEST',
      }),
    },
    featured: {
      screen: Featured,
      navigationOptions: () => ({
        tabBarLabel: 'FEATURED',
      }),
    } 
  },
  {
    lazy: true,
    backBehavior: 'none',
    tabBarOptions: {
      labelStyle: {
        fontSize: 20,
        fontFamily: "ProximaNova-Bold",
      },
      style: {
        backgroundColor: "#1b1b1b",
        // shadowOffset: {
        //   width: 0,
        //   height: 0,
        // },
        // shadowRadius: 4,
        // shadowOpacity: 0.7,
        // elevation: 2,
      //  marginBottom: 2,
      },
      indicatorStyle: {
        backgroundColor: "white",
      },
    }
  },
)

