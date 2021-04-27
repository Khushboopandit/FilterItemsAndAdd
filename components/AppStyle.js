// eslint-disable-next-line
'use strict';
/* eslint-disable no-unused-expressions */

import {StyleSheet} from 'react-native';

var Styles = StyleSheet.create({
    body:{
        alignItems:'center',
        marginVertical:30
    },
    inputAndButtonView:{
        borderWidth:1,
        borderRadius:50,
        width:'80%',
        flexDirection:'row',
        justifyContent:'space-between',
        borderColor:'#192d4e'
    },
    button:{
        backgroundColor:'#192d4e',
        paddingHorizontal:20,
        borderTopRightRadius:50,
        borderBottomRightRadius:50,
        alignItems:'center',
        justifyContent:'center',
        width:'20%'
    },
    buttonText:{
        color:'#ffff',
        fontSize:30,
        top:-2
    },
    input:{
        marginLeft:20,
        textDecorationLine:'none',
        width:'70%',
        paddingVertical:6
    },
    itemsView:{
        marginVertical:30,
        width:'80%'
    },
    text:{
        fontSize:20,
        fontWeight:'bold',
        color:'#192d4e',
        borderBottomWidth:1.5,
        paddingTop:15,
        paddingBottom:4,
        borderColor:'#d5d5d5'
    }
});

export default Styles;
