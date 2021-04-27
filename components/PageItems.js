/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Text,
  View,
} from 'react-native';

import Styles from './AppStyle'

export default class PageItems extends React.Component {

  renderItem(item, index) {
    // specify key for making each item unique for react
    return <Text style={Styles.text} key={item + index}>
      {item}
    </Text>
  }
  render() {
    const data = this.props.data.filter(item => item.toLowerCase().includes(this.props.inputValue.toLowerCase()))
    return (
      <View style={Styles.itemsView}>
        {/* loop for iterating to the array */}
        {data.map((item, index) => this.renderItem(item, index))}
      </View>

    );
  }
};



