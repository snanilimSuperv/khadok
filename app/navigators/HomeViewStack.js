
import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { Icon } from 'native-base';
import { addNavigationHelpers, StackNavigator, NavigationActions } from 'react-navigation';
//component importing 
import HomeScreen from '../components/Home';
// import ChatScreen from '../components/Chat';
//variables
import { Colors, Fonts } from '../constants';
const backAction = NavigationActions.back()
const HomeView = StackNavigator({
  Main: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      headerTitle: <Text style={{ fontSize: Fonts.header_font_size, alignSelf: 'center', textAlign: 'center', color: Colors.primary, fontFamily: Fonts.header_font_family }}>Home</Text>,
      headerLeft: (
        <Icon name="menu" color={Colors.primary} size={28} onPress={() => navigation.navigate('DrawerOpen')} style={{ margin: 10 }} />
      ),
      headerStyle: {
        elevation: 0,
        borderBottomColor: Colors.title_border_bottom,
        borderBottomWidth: 1,
        backgroundColor: Colors.title_bg_color,
      },
      headerTitleStyle: {
        fontFamily: Fonts.header_font_family,
        textAlign: 'center',
      },
      titleStyle: {
        textAlign: 'center'
      }
    })
  },
//   ChatScreen: {
//     screen: ChatScreen,
//     navigationOptions: ({ navigation }) => ({
//       headerTitle: <Text style={{ fontSize: Fonts.header_font_size, alignSelf: 'center', textAlign: 'center', color: Colors.primary, fontFamily: Fonts.header_font_family }}>Chat Box</Text>,
//       headerLeft: (
//         <Icon name="chevron-left" size={46} color={Colors.primary} onPress={() => { navigation.dispatch(backAction) }} style={{ margin: 10 }} />
//       ),
//       headerStyle: {
//         elevation: 0,
//         borderBottomColor: "#292E37",
//         borderBottomWidth: 1,
//         backgroundColor: Colors.title_bg_color,
//       },
//       headerTitleStyle: {
//         fontFamily: Fonts.header_font_family,
//         textAlign: 'center'
//       },
//       titleStyle: {
//         textAlign: 'center'
//       }
//     })
//   }
})

export default HomeView