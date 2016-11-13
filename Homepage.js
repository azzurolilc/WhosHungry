/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
 'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  ActivityIndicator,
  ListView,
  PropTypes,
  ScrollView,
  View
} from 'react-native';

var MapView = require('./MapCheck');
var ReactNative = require('react-native');
var ChooseType = require('./share/ChooseType');

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      pressStatus: false ,
    }
  }

  renderRow(rowData, sectionID, rowID) {
    return (
      <TouchableHighlight style={styles.button} underlayColor='#99d9f4'>
        <Text
          style={styles.buttonText}
          onPress={this.goToHomepage.bind(this)}>
          Go
        </Text>
      </TouchableHighlight>
    );
  }

  rowPressed(listerURL) {
    var property = this.props.listings.filter(prop => prop.lister_url === listerURL)[0];

    this.props.navigator.push({
      title: "Property",
      component: PropertyView,
      passProps: {property: property}
    });
  }

  goToMapView() {
    this.props.navigator.push({
        title: 'Map',
        component: MapView
      });
  }

  goToChooseType() {
    this.props.navigator.push({
        title: 'Food Description',
        component: ChooseType
      });
  }

  render() {
    var _scrollView: ScrollView;
    return (
      <View>
        <ScrollView
          ref={(scrollView) => { _scrollView = scrollView; }}
          automaticallyAdjustContentInsets={false}
          onScroll={() => { console.log('onScroll!'); }}
          scrollEventThrottle={200}
          style={styles.scrollView}>

          {THUMBS.map(createThumbRow)}

        </ScrollView>
        <View>
          <TouchableOpacity
            style={styles.buttonProvide}
            onPress={this.goToChooseType.bind(this)}>
            <Text>Provide Food?</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={styles.buttonEat}
            onPress={this.goToMapView.bind(this)}>
            <Text>Eat!</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

var i = 0;
var pressed = 0;
var carttext = "You choosed: ";

class Thumb extends React.Component {

  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  constructor(props) {
  super(props);
  this.state = { carttext: "You choosed: ", egg: false};
  }


  render() {
    switch (i) {
      case 0: var icon = true ? require('./img/apple.png') : require('./apple-icon.png');
      break;
      case 1: var icon = true ? require('./img/doughnut.png') : require('./Coca-Cola-icon.png');
      break;
      case 2: var icon = true ? require('./img/chicken-leg.png') : require('./apple-icon.png');
      break;
      case 3: var icon = true ? require('./img/carrot.png') : require('./Coca-Cola-icon.png');
      break;
      case 4: var icon = true ? require('./img/banana.png') : require('./apple-icon.png');
      break;
      case 5: var icon = true ? require('./img/cookie.png') : require('./Coca-Cola-icon.png');
      break;
      case 6: var icon = true ? require('./img/fish.png') : require('./apple-icon.png');
      break;
      case 7: var icon = true ? require('./img/salad.png') : require('./Coca-Cola-icon.png');
      break;
    }

    return (
      <View style={styles.button}>
      <TouchableOpacity onPress={(carttext) => this.setState({carttext: "item1"})} selected={this.state.egg} >
        <View>
        <Text style={ this.props.selected ? styles.img : styles.imgtext }>{foodData[i++]}</Text>
        </View>
        </TouchableOpacity>
        <Image style={styles.img} source={icon} />
      </View>
    );
  }
}

var foodData = ['Fruit: \n fresh apples (5)'
                , 'Doughnut:\n chocolate falvor (3)'
                , 'Meat:\n chicken breast (4 lbs)'
                , 'Vegatable:\n fresh carrot (2 lbs)'
                , 'Fruit: \n bananas (3)'
                , 'Cookie:\n white chocolate (12 pc)'
                , 'Meat:\n fish(4 lbs)'
                , 'Vegatable:\n fresh patato (2 lbs)'];
var THUMBS = ['./img/apple.png'
              , './img/doughnut.png', './img/chicken-leg.png', './img/salad.png', './img/doughnut.png', './img/chicken-leg.png', './img/salad.png'];
var createThumbRow = (uri, i) => <Thumb key={i} uri={uri} />;

var styles = StyleSheet.create({
  scrollView: {
    padding: 20,
    backgroundColor: '#ffffff',
    height: 460,
    top: 56,
  },
  horizontalScrollView: {
    height: 120,
  },
  containerPage: {
    height: 50,
    width: 50,
    backgroundColor: '#527FE4',
    padding: 5,
  },
  text: {
    fontSize: 20,
    color: '#888888',
    left: 80,
    top: 20,
    height: 40,
  },
  button: {
    margin: 7,
    padding: 5,
    //alignItems: 'center',
    backgroundColor: '#ecffc6',
    borderRadius: 3,
    flexWrap: 'wrap',
  },
  buttonScroll: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    padding: 5,
    alignItems: 'center',
    backgroundColor: '#eaeaea',
    borderRadius: 3,
  },
  buttonProvide: {
    width: 130,
    height: 46,
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 76,
    marginLeft: 120,
    marginRight: 10,
    padding: 5,
    alignItems: 'center',
    backgroundColor: '#eaeaea',
    borderRadius: 46,
  },
  buttonEat: {
    width: 130,
    height: 46,
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    marginLeft: 120,
    marginRight: 10,
    padding: 5,
    alignItems: 'center',
    backgroundColor: '#eaeaea',
    borderRadius: 46,
  },
  buttonContents: {
    flexDirection: 'row',
    width: 64,
    height: 64,
  },
  img: {
    width: 64,
    height: 64,
    marginLeft: 10,
    flex: 1,
    marginTop:-50,
  },
  imgtext: {
    fontFamily: 'Helvetica',
    flex: 0,
    textAlign: 'center',
    marginTop:20,
  },
  textpress: {
    fontSize:30,
  },
});

module.exports = Homepage;
