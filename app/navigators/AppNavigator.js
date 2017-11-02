
import React from 'react';
import PropTypes from 'prop-types';
import { Image, Text, TouchableHighlight, Button, View } from 'react-native';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator, DrawerNavigator, NavigationActions, DrawerItems } from 'react-navigation';
import { Colors, Fonts } from '../constants';

// -------------------------------------------------
//component importing 
import LoginScreen from '../components/Login';
import GroupVerification from '../components/GroupVerification';
import HomeView from "./HomeViewStack"
// import HistoryView from "./HistoryViewStack"
// import ProfileView from "./ProfileViewStack"


// const HomeStack = StackNavigator({
//   Main: {
//     screen: LoginScreen,
//   },
//   GroupVerification: {
//     screen: GroupVerification,
//   }
// })
// ============================================================
// 
const CustomDrawerContentComponent = (props) => (
  <View style={{ flex: 1, backgroundColor: Colors.nav_bg_color}}>
    <DrawerItems {...props} />
  </View>
);


const MainNavigator = DrawerNavigator({
  HomeView: {
    screen: HomeView,
    navigationOptions: {
      drawerLabel: <Text style={{ fontFamily: 'Montserrat-Regular', fontSize: 16, alignSelf: 'center', color: Colors.link_color, margin: 10, marginLeft: 15 }} >Home</Text>
    }
  },
  // HistoryView: {
  //   screen: HistoryView,
  //   navigationOptions: {
  //     drawerLabel: <Text style={{ fontFamily: 'Montserrat-Regular', fontSize: 16, alignSelf: 'center', color: Colors.link_color, margin: 10, marginLeft: 15 }} >History</Text>
  //   }
  // },
  // ProfileView: {
  //   screen: ProfileView,
  //   navigationOptions: {
  //     drawerLabel: <Text style={{ fontFamily: 'Montserrat-Regular', fontSize: 16, alignSelf: 'center', color: Colors.link_color, margin: 10, marginLeft: 15 }} >Profile</Text>
  //   }
  // }
},{
    contentComponent: CustomDrawerContentComponent,
    drawerPosition: 'left',
    contentOptions: {
      activeTintColor: '#000',
      inactiveTintColor: '#000',
      activeBackgroundColor: Colors.active_link_color,
    }
  });

// const LoginNav = DrawerNavigator({
//   MapView: {
//     screen: MapView,
//     navigationOptions: {
//       drawerLabel: "Home"
//     }
//   }
// });



// ============================================================
export const AppNavigator = StackNavigator({
  Login: { screen: LoginScreen },
  Group: { screen: GroupVerification },
  Main: { screen: MainNavigator }
}, {
    initialRouteName: LoginScreen,
    headerMode: 'none'
  });
// ============================================================
const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

// ======================== REDUX CONNECTORS ========================
AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
  nav: state.nav,
});
const mapDispatchToProps = dispatch => ({
  dispatch: dispatch
})
// ==================================================================

export default connect(mapStateToProps, mapDispatchToProps)(AppWithNavigationState);