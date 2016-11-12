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
  ScrollView,
  View
} from 'react-native';

var MapView = require('./MapCheck');
var ReactNative = require('react-native');
var ChooseType = require('./share/ChooseType');
var ChooseType = require('./PropertyView');

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
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
        title: 'Provide Food',
        component: ChooseType
      });
  }

  goToPropertyView() {
    this.props.navigator.push({
        title: 'Food Detail',
        component: PropertyView
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

class Thumb extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  render() {
    return (
      <View style={styles.button}>
        <Image style={styles.img} source={{uri:this.props.uri}} />
      </View>
    );
  }
}

var THUMBS = ['http://kingrichiespizza.com/wp-content/uploads/2015/12/d5a3498cfc9e53130b5f815ef44713b7_Jet.jpg', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851561_767334496626293_1958532586_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-ash3/t39.1997/p128x128/851579_767334503292959_179092627_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851589_767334513292958_1747022277_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851563_767334559959620_1193692107_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851593_767334566626286_1953955109_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851591_767334523292957_797560749_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851567_767334529959623_843148472_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851548_767334489959627_794462220_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851575_767334539959622_441598241_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-ash3/t39.1997/p128x128/851573_767334549959621_534583464_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851583_767334573292952_1519550680_n.png'];
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
    alignItems: 'center',
    backgroundColor: '#ecffc6',
    borderRadius: 3,
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
  }
});

module.exports = Homepage;
