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
  Text,
  View
} from 'react-native';

var Registration = require('./Registration');
var ReactNative = require('react-native');

class WhosHungry extends React.Component {
  render() {
    return (
      <ReactNative.NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Who is hungry?',
          component: Registration,
        }}/>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

AppRegistry.registerComponent('WhosHungry', () => WhosHungry);
