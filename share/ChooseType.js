 'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  ActivityIndicator,
  View,
  Image
} from 'react-native';

var ReactNative = require('react-native');

class ChooseType extends React.Component{
  render(){
    return (
      <View>
        <Image
        style={{width: 90, height: 90}}
        source={require('../img/apple.png')} />
      </View>
    )
  }
}

// var styles = StyleSheet.create({
//     list: {
//         justifyContent: 'center',
//         flexDirection: 'row',
//         flexWrap: 'wrap'
//     },
//     item: {
//         backgroundColor: '#CCC',
//         margin: 10,
//         width: 100,
//         height: 100
//     }
// })

// class ChooseType extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       searchString: 'london',
//       isLoading: false,
//       message: ''
//     };
//   }
//
//   onSearchTextChanged(event) {
//     console.log('onSearchTextChanged');
//     this.setState({ searchString: event.nativeEvent.text });
//     console.log(this.state.searchString);
//   }
//
//   _executeQuery(query) {
//     console.log(query);
//     this.setState({ isLoading: true });
//
//     fetch(query)
//     .then(response => response.json())
//     .then(json => this._handleResponse(json.response))
//     .catch(error =>
//        this.setState({
//         isLoading: false,
//         message: 'Something bad happened ' + error
//      }));
//   }
//
//   _handleResponse(response) {
//     this.setState({ isLoading: false , message: '' });
//     if (response.application_response_code.substr(0, 1) === '1') {
//       this.props.navigator.push({
//         title: 'Results',
//         component: Homepage,
//         passProps: {listings: response.listings}
//       });
//     } else {
//       this.setState({ message: 'Location not recognized; please try again.'});
//     }
//   }
//
//   onSearchPressed() {
//     var query = urlForQueryAndPage('place_name', this.state.searchString, 1);
//     this._executeQuery(query);
//   }
//
//   onLocationPressed() {
//     navigator.geolocation.getCurrentPosition(
//       location => {
//         var search = location.coords.latitude + ',' + location.coords.longitude;
//         this.setState({ searchString: search });
//         var query = urlForQueryAndPage('centre_point', search, 1);
//         this._executeQuery(query);
//       },
//       error => {
//         this.setState({
//           message: 'There was a problem with obtaining your location: ' + error
//         });
//       });
//   }
//
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.description}>
//           Provide food ~
//         </Text>
//       </View>
//     );
//   }
// }
//
// var styles = StyleSheet.create({
//   description: {
//     marginBottom: 20,
//     fontSize: 18,
//     textAlign: 'center',
//     color: '#656565'
//   },
//   container: {
//     padding: 30,
//     marginTop: 65,
//     alignItems: 'center'
//   },
//   flowRight: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     alignSelf: 'stretch'
//   },
//   buttonText: {
//     fontSize: 18,
//     color: 'white',
//     alignSelf: 'center'
//   },
//   button: {
//     height: 36,
//     flex: 1,
//     flexDirection: 'row',
//     backgroundColor: '#48BBEC',
//     borderColor: '#48BBEC',
//     borderWidth: 1,
//     borderRadius: 8,
//     marginBottom: 10,
//     alignSelf: 'stretch',
//     justifyContent: 'center'
//   },
//   searchInput: {
//     height: 36,
//     padding: 4,
//     marginRight: 5,
//     flex: 4,
//     fontSize: 18,
//     borderWidth: 1,
//     borderColor: '#48BBEC',
//     borderRadius: 8,
//     color: '#48BBEC'
//   },
//   image: {
//     width: 217,
//     height: 138
//   }
// });
//
module.exports = ChooseType;
