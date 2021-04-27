/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import PageInputFieldWithAddButton from './PageInputFieldWithAddButton'
import Styles from './AppStyle'

export default class App extends React.Component {
  render(){

  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        >
          <View style={Styles.body}>
            <PageInputFieldWithAddButton/>
          <Text>
            Read the docs to discover what to do next:
          </Text>
          </View>
      </ScrollView>
    </SafeAreaView>
  );
    }
};



