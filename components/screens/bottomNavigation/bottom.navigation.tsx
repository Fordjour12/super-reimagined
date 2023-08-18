import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AccountIcon from "../../../assets/images/bt-acc.svg";
import DiscoveryIcon from "../../../assets/images/bt-disco.svg";
import FavoriteIcon from "../../../assets/images/bt-fav.svg";
import HomeIcon from "../../../assets/images/bt-home.svg";
import InboxIcon from "../../../assets/images/btn-mess.svg";
import Account from "../views/account";
import Discovery from "../views/discovery";
import Favorites from "../views/favorites";
import Homepage from "../views/homepage";
import Inbox from "../views/inbox";

const BottomNavigation = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <BottomNavigation.Navigator
      initialRouteName="account"
      screenOptions={{
        tabBarActiveBackgroundColor: "gray",
        tabBarShowLabel: false,
        headerShown: false,
      }}
    >
      <BottomNavigation.Screen
        name="homepage"
        component={Homepage}
        options={{
          title: "Home",
          tabBarIcon: () => {
            return <HomeIcon width={30} style={{ opacity: 0.7 }} />;
          },
        }}
      />
      <BottomNavigation.Screen
        name="favorites"
        component={Favorites}
        options={{
          title: "Favorites",
          tabBarIcon: () => {
            return <FavoriteIcon width={30} style={{ opacity: 0.7 }} />;
          },
        }}
      />
      <BottomNavigation.Screen
        name="discovery"
        component={Discovery}
        options={{
          title: "Discovery",
          tabBarIcon: () => {
            return <DiscoveryIcon width={30} style={{ opacity: 0.7 }} />;
          },
        }}
      />
      <BottomNavigation.Screen
        name="inbox"
        component={Inbox}
        options={{
          title: "Inbox",
          tabBarIcon: () => {
            return <InboxIcon width={30} style={{ opacity: 0.7 }} />;
          },
        }}
      />
      <BottomNavigation.Screen
        name="account"
        component={Account}
        options={{
          title: "Account",
          tabBarIcon: () => {
            return <AccountIcon width={30} style={{ opacity: 0.7 }} />;
          },
        }}
      />
    </BottomNavigation.Navigator>
  );
};

export default BottomTab;
