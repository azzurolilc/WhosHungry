 'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  ActivityIndicator,
  View,
  Image,
  Slider
} from 'react-native';

var ReactNative = require('react-native');
var Homepage = require('../Homepage');
var PhotoSnap = require('./PhotoSnap');

class SliderExample extends React.Component {
  static minimumValue = {
    value: 1
  };
  static maximumValue = {
    value: 25
  };
  static defaultProps = {
    value: 1,
  };



  state = {
    value: this.props.value,
  };

  render() {
    return (
      <View>
        <Text style={styles.description1} >
          {this.state.value && +this.state.value.toFixed(1)}
        </Text>
        <Slider
          {...this.props}
          onValueChange={(value) => this.setState({value: value})} />
      </View>
    );
  }
}

function urlForQueryAndPage(key, value, pageNumber) {
  var data = {
      country: 'uk',
      pretty: '1',
      encoding: 'json',
      listing_type: 'buy',
      action: 'search_listings',
      page: pageNumber
  };
  data[key] = value;

  var querystring = Object.keys(data)
    .map(key => key + '=' + encodeURIComponent(data[key]))
    .join('&');

  return 'http://api.nestoria.co.uk/api?' + querystring;
};


class ChooseType extends React.Component {
  state = {
   slideCompletionValue: 0,
   slideCompletionCount: 0,
 };

  constructor(props) {
    super(props);
    this.state = {
      searchString: 'london',
      isLoading: false,
      message: '',
      address: "",
    };
  }

  onSearchTextChanged(event) {
    console.log('onSearchTextChanged');
    this.setState({ searchString: event.nativeEvent.text });
    console.log(this.state.searchString);
  }

  _executeQuery(query) {
    console.log(query);
    this.setState({ isLoading: true });

    fetch(query)
    .then(response => response.json())
    .then(json => this._handleResponse(json.response))
    .catch(error =>
       this.setState({
        isLoading: false,
        message: 'Something bad happened ' + error
     }));
  }

  _handleResponse(response) {
    this.setState({ isLoading: false , message: '' });
    if (response.application_response_code.substr(0, 1) === '1') {
      this.props.navigator.push({
        title: 'Results',
        component: Homepage,
        passProps: {listings: response.listings}
      });
    } else {
      this.setState({ message: 'Location not recognized; please try again.'});
    }
  }

  onSearchPressed() {
    var query = urlForQueryAndPage('place_name', this.state.searchString, 1);
    this._executeQuery(query);
  }

  onLocationPressed() {
    navigator.geolocation.getCurrentPosition(
      location => {
        var search = location.coords.latitude + ',' + location.coords.longitude;
        this.setState({ searchString: search });
        var query = urlForQueryAndPage('centre_point', search, 1);
        this._executeQuery(query);
      },
      error => {
        this.setState({
          message: 'There was a problem with obtaining your location: ' + error
        });
      });
  }

  goToPhotoSnap() {
    this.props.navigator.replace({
        title: 'Snap Food',
        component: PhotoSnap
      });
  }

  _onPressButton() {
    console.log("You tapped the button!");
  }

  _handlePress(event) {
    let address = this.state.address;

  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 1, flexDirection: 'row',justifyContent: 'space-around',alignItems: 'center'}}>
          <TouchableOpacity style={{height: 80,  justifyContent: 'flex-start'}}>
            <Image
              style={styles.image}
              source={require('../img/apple.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={{height: 80}}>
            <Image
              style={styles.image}
              source={require('../img/toast.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={{ height: 80,justifyContent: 'flex-end'}}>
            <Image
              style={styles.image}
              source={require('../img/salad.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, flexDirection: 'row',alignItems: 'center'}}>
          <TouchableOpacity style={{  height: 80,justifyContent: 'flex-start'}}>
            <Image
              style={styles.image}
              source={require('../img/chicken-leg.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={{  height: 80}}>
            <Image
              style={styles.image}
              source={require('../img/doughnut.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={{ height: 80 ,justifyContent: 'flex-end'}}>
            <Image
              style={styles.image}
              source={require('../img/fish.png')}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.flowRight}>
          <TextInput
            style={styles.searchInput}
            placeholder='Description of Food'/>
        </View>
        <View style={styles.flowRight}>
          <TextInput
            style={styles.searchInput}
            placeholder='Expiration Date (MM/DD/YY)'/>
        </View>

        <View style={styles.flowRight}>
        <Text style={styles.description}>
          Amount
        </Text>
          <SliderExample
            onSlidingComplete={(value) => this.setState({
                slideCompletionValue: value,
                step: 20,
                slideCompletionCount: this.state.slideCompletionCount})} />
        </View>

        <View style={styles.flowRight}>
          <TextInput
            ref = "address"
            onChangeText={(address)=>this.setState({address})}
            style={styles.searchInput}
            placeholder='Address'/>
            <TouchableOpacity style={{ height: 30 ,justifyContent: 'flex-end'}} onPress={this._handlePress.bind(this)}>
            <Image
              style={{height:50, width: 50}}
              source={require('../img/01location.png')}
            />
            </TouchableOpacity>
        </View>

          <TouchableHighlight style={styles.lbutton}
              underlayColor='#99d9f4'>
            <Text
              style={styles.buttonText}
              onPress={this.goToPhotoSnap.bind(this)}>
              Snap It!
            </Text>
          </TouchableHighlight>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'left',
    color: '#656565'
  },
  description1: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'right',
    color: '#656565'
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  flowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    width: 310,
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    borderStyle:'dashed',
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  lbutton: {
    width: 310,
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  searchInput: {
    height: 36,
    padding: 4,
    marginRight: 5,
    marginBottom: 15,
    flex: 4,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 8,
    color: '#48BBEC'
  },
  passwordInput: {
    height: 36,
    padding: 4,
    marginRight: 5,
    marginBottom: 15,
    flex: 4,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 8,
    color: '#48BBEC'
  },
  image: {
    width: 75,
    height: 75
  },
  slider: {
    height: 10,
    margin: 10,
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '500',
    margin: 10,
  }
});


module.exports = ChooseType;
