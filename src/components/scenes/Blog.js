import { DrawerNavigator } from "react-navigation";

import BlogHome from "./BlogHome";
import Art from "./categories/Art";
import SideMenu from "../../custom/SideMenu";

export default DrawerNavigator(
  {
    Home: {
      screen: BlogHome
    },
    Art: {
      screen: Art
    },
  },
  {
    drawerWidth: 300,
    contentComponent: SideMenu
  } 
);