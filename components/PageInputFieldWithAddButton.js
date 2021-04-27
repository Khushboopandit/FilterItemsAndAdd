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
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import Styles from './AppStyle';

export default class PageInputFieldWithAddButton extends React.Component {

  
  renderButton() {
    return (
      <TouchableOpacity style={Styles.button} onPress={this.props.addItem}>
        <Text style={Styles.buttonText}>+</Text>
      </TouchableOpacity>
    );
  }
  render() {
    return (
      <View style={Styles.inputAndButtonView}>
        <TextInput
          style={Styles.input}
          value={this.props.inputValue}
          onChangeText={text => this.props.handleOnChange(text)}
          onSubmitEditing={this.props.addItem}
        />
        {/* Button rendering */}
        {this.renderButton()}
      </View>
    );
  }
}
