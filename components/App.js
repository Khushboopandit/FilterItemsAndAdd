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
  View,
} from 'react-native';

import PageInputFieldWithAddButton from './PageInputFieldWithAddButton';
import PageItems from './PageItems';
import Styles from './AppStyle'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      data:['Milk','Coffee','Oranges','Bread'],
      filterData:[],
      inputValue:''
    };
  }

  //update Input value
  handleOnChange=(inputValue)=>{
    this.setState({inputValue})
  }

  // Adding new item to list
  addItemToData=()=>{
    let data = this.state.data
    data.push(this.state.inputValue)
    this.setState({data,inputValue:''})
  }
  render(){
  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        >
          <View style={Styles.body}>
            {/* rendering child components and passing props to it */}
            <PageInputFieldWithAddButton inputValue={this.state.inputValue} handleOnChange={this.handleOnChange} addItem={this.addItemToData}/>
            <PageItems data={this.state.data} filterData={this.state.filterData} inputValue={this.state.inputValue}/>
          </View>
      </ScrollView>
    </SafeAreaView>
  );
    }
};



